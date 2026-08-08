#!/usr/bin/env python3
"""Bake home particle-hero Float32 buffers (D-0257) from the owner 5-panel sheet.

CRITICAL: The sheet is ONLY a source to crop 5 separate scenes.
Each scene is framed into a true 16:9 cinematic artboard before sampling.
Never bake or publish the vertical collage as the hero / poster.

Layout per particle (stride 28 / 7 floats): p.xy, c.rgb, size, seed
Output: public/home/particle-hero/{human,logo,touch,water,return}.bin.gz
"""

from __future__ import annotations

import gzip
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SHEET = Path(
    "/Users/mk/.cursor/projects/Users-mk-Desktop-savencore/assets/"
    "Screenshot_2026-08-08_at_12.31.00_PM-9879c7bb-177e-4dc4-b8df-dc437247cb4b.png"
)
OUT = ROOT / "public/home/particle-hero"
PREVIEW = ROOT / "tmp-particle-frames"  # local QA only; not published
COUNT = 650_000
FLOATS = 7
HERO_W, HERO_H = 1920, 1080  # true 16:9
RNG = np.random.default_rng(20260808)

# Per-scene horizontal focal point for cover-crop into 16:9 (0=left, 1=right).
FOCAL_X = {
    "human": 0.18,  # face on left
    "logo": 0.50,  # mark centered
    "touch": 0.42,  # figures mid-left
    "water": 0.48,  # glass exchange center
    "return": 0.18,
}
NAMES = list(FOCAL_X.keys())


def content_crop(im: Image.Image) -> Image.Image:
    arr = np.array(im.convert("RGB"), dtype=np.float32)
    lum = arr.mean(axis=2)
    row = lum.mean(axis=1)
    col = lum.mean(axis=0)
    rows = np.where(np.abs(row - 30) > 2)[0]
    cols = np.where(np.abs(col - 30) > 2)[0]
    y0, y1 = int(rows[0]), int(rows[-1]) + 1
    x0, x1 = int(cols[0]), int(cols[-1]) + 1
    return Image.fromarray(arr[y0:y1, x0:x1].astype(np.uint8))


def split_panels(crop: Image.Image) -> list[Image.Image]:
    arr = np.array(crop, dtype=np.float32)
    h = arr.shape[0]
    crow = arr.mean(axis=(1, 2))
    approx = h / 5
    seps = [0]
    for k in range(1, 5):
        center = int(k * approx)
        window = slice(max(0, center - 8), min(h, center + 8))
        sep = window.start + int(np.argmin(crow[window]))
        seps.append(sep)
    seps.append(h)
    panels: list[Image.Image] = []
    for i in range(5):
        a, b = seps[i], seps[i + 1]
        a2 = a + 1 if i > 0 else a
        b2 = b - 1 if i < 4 else b
        panels.append(Image.fromarray(arr[a2:b2].astype(np.uint8)))
    return panels


def to_hero_16x9(panel: Image.Image, focal_x: float) -> Image.Image:
    """Cover-crop one storyboard strip into a full-bleed 16:9 cinematic frame.

    Upscales by height so the strip fills the hero vertically, then crops a
    16:9 window around focal_x. Never returns the multi-panel sheet.
    """
    pw, ph = panel.size
    if ph < 8 or pw < 8:
        raise SystemExit(f"panel too small: {panel.size}")

    # Scale so panel height fills hero height (full-bleed vertically).
    scale = HERO_H / ph
    nw, nh = max(1, int(round(pw * scale))), HERO_H
    up = panel.resize((nw, nh), Image.Resampling.LANCZOS)

    # If still narrower than hero (shouldn't happen for wide strips), pad.
    if nw < HERO_W:
        canvas = Image.new("RGB", (HERO_W, HERO_H), (6, 16, 34))
        canvas.paste(up, ((HERO_W - nw) // 2, 0))
        framed = canvas
    else:
        # Cover-crop horizontal window around focal point.
        win = HERO_W
        cx = int(round(focal_x * nw))
        x0 = cx - win // 2
        x0 = max(0, min(x0, nw - win))
        framed = up.crop((x0, 0, x0 + win, HERO_H))

    framed = ImageEnhance.Contrast(framed).enhance(1.4)
    framed = ImageEnhance.Color(framed).enhance(1.6)
    framed = ImageEnhance.Brightness(framed).enhance(1.18)
    framed = framed.filter(ImageFilter.UnsharpMask(radius=1.4, percent=160, threshold=2))
    return framed


def mask_ui(arr: np.ndarray) -> np.ndarray:
    out = arr.copy()
    h = out.shape[0]
    white = (out[:, :, 0] > 0.92) & (out[:, :, 1] > 0.92) & (out[:, :, 2] > 0.92)
    gray = (np.abs(out[:, :, 0] - out[:, :, 1]) < 0.03) & (
        np.abs(out[:, :, 1] - out[:, :, 2]) < 0.03
    )
    mid = out.mean(axis=2)
    midgray = gray & (mid > 0.18) & (mid < 0.45)
    yy = np.linspace(0, 1, h, endpoint=False)[:, None]
    edge = (yy < 0.04) | (yy > 0.97)
    out[white | (midgray & edge)] = 0.0
    return out


def sample_buffer(arr: np.ndarray, count: int) -> np.ndarray:
    h, w = arr.shape[:2]
    assert w == HERO_W and h == HERO_H, f"expected {HERO_W}x{HERO_H}, got {w}x{h}"
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    sat = np.where(mx > 1e-5, (mx - mn) / np.maximum(mx, 1e-5), 0.0)
    blueish = np.clip(b - 0.5 * r, 0, 1)
    orangish = np.clip(r - 0.35 * b, 0, 1)
    chroma = blueish + orangish
    weight = (lum**1.55) * (0.4 + 1.8 * sat) * (0.5 + 1.0 * chroma)
    weight = np.where(lum < 0.04, 0.0, weight)
    weight = weight + np.where(lum >= 0.04, lum * 0.1, 0.0)
    flat = weight.ravel()
    total = float(flat.sum())
    if total <= 0:
        raise SystemExit("no sample weight")
    idx = RNG.choice(flat.size, size=count, replace=True, p=flat / total)
    ys, xs = np.divmod(idx, w)
    jx = (xs + RNG.random(count)) / w
    jy = (ys + RNG.random(count)) / h
    cols = np.clip(arr[ys, xs] * 1.28 + 0.05 * (arr[ys, xs] > 0.04), 0, 1.6)
    size = 0.5 + 0.5 * np.clip(lum[ys, xs], 0, 1) ** 0.85
    size = size * (0.9 + 0.18 * RNG.random(count))
    seed = RNG.random(count).astype(np.float32)
    buf = np.empty((count, FLOATS), dtype=np.float32)
    buf[:, 0] = jx.astype(np.float32)
    buf[:, 1] = jy.astype(np.float32)
    buf[:, 2:5] = cols.astype(np.float32)
    buf[:, 5] = size.astype(np.float32)
    buf[:, 6] = seed
    return buf.ravel()


def write_gz(path: Path, data: np.ndarray) -> None:
    raw = data.astype(np.float32).tobytes()
    assert len(raw) == COUNT * 28
    with gzip.open(path, "wb", compresslevel=9) as f:
        f.write(raw)
    print(f"wrote {path.name} {path.stat().st_size / 1e6:.2f}MB")


def assert_single_frame(arr: np.ndarray, name: str) -> None:
    """Guard: reject accidental full-sheet bake (5 luminance bands)."""
    h = arr.shape[0]
    row = arr.mean(axis=(1, 2))
    # Sheet separators are dark bands — a single cinematic frame should not
    # have 4 regularly spaced deep valleys across height.
    band = h // 5
    valleys = 0
    for k in range(1, 5):
        center = k * band
        window = row[max(0, center - 6) : min(h, center + 6)]
        if window.size and float(window.mean()) < 0.06 and float(row.mean()) > 0.12:
            valleys += 1
    if valleys >= 3:
        raise SystemExit(
            f"{name}: looks like stacked multi-panel sheet (valleys={valleys}). Abort."
        )
    aspect = arr.shape[1] / arr.shape[0]
    if abs(aspect - 16 / 9) > 0.05:
        raise SystemExit(f"{name}: aspect {aspect:.3f} is not 16:9")


def main() -> None:
    if not SHEET.exists():
        raise SystemExit(f"missing sheet: {SHEET}")
    OUT.mkdir(parents=True, exist_ok=True)
    PREVIEW.mkdir(parents=True, exist_ok=True)

    panels = split_panels(content_crop(Image.open(SHEET)))
    if len(panels) != 5:
        raise SystemExit(f"expected 5 panels, got {len(panels)}")

    human_arr: np.ndarray | None = None
    for name, panel in zip(NAMES, panels):
        print(f"panel {name}: source strip {panel.size}")
        framed = to_hero_16x9(panel, FOCAL_X[name])
        assert framed.size == (HERO_W, HERO_H), framed.size
        framed.save(PREVIEW / f"{name}-16x9.png")
        arr = mask_ui(np.asarray(framed, dtype=np.float32) / 255.0)
        assert_single_frame(arr, name)
        print(
            f"  framed {framed.size} mean={arr.mean():.3f} "
            f"bright%={(arr.mean(axis=2) > 0.12).mean():.2f}"
        )
        if name == "human":
            human_arr = arr
        write_gz(OUT / f"{name}.bin.gz", sample_buffer(arr, COUNT))

    if human_arr is None:
        raise SystemExit("missing human frame")
    poster = Image.fromarray(np.clip(human_arr * 255, 0, 255).astype(np.uint8))
    poster = ImageEnhance.Brightness(poster).enhance(1.08)
    poster = ImageEnhance.Contrast(poster).enhance(1.1)
    poster.resize((1600, 900), Image.Resampling.LANCZOS).save(
        OUT / "poster.webp", "WEBP", quality=90, method=6
    )
    poster.resize((1600, 900), Image.Resampling.LANCZOS).save(PREVIEW / "poster.png")
    print("poster.webp", (OUT / "poster.webp").stat().st_size)

    # Remove obsolete assets that could confuse caching / review.
    for obsolete in (
        "interface.bin.gz",
        "robot.bin.gz",
        "poster-interface.webp",
        "poster-robot.webp",
        "poster-logo.webp",
    ):
        p = OUT / obsolete
        if p.exists():
            p.unlink()
            print("removed", obsolete)
    print("done — 5×16:9 scenes, sheet never published")


if __name__ == "__main__":
    main()
