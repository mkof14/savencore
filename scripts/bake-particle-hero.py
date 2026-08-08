#!/usr/bin/env python3
"""Bake home particle-hero Float32 buffers (D-0256) from the owner 5-panel sheet.

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
COUNT = 650_000
FLOATS = 7
RNG = np.random.default_rng(20260808)
NAMES = ["human", "logo", "touch", "water", "return"]


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


def enhance_panel(panel: Image.Image, scale: int = 12) -> np.ndarray:
    w, h = panel.size
    target_w = max(1600, w * scale)
    target_h = max(900, int(round(target_w * (h / w))))
    up = panel.resize((target_w, target_h), Image.Resampling.LANCZOS)
    up = ImageEnhance.Contrast(up).enhance(1.35)
    up = ImageEnhance.Color(up).enhance(1.55)
    up = ImageEnhance.Brightness(up).enhance(1.12)
    up = up.filter(ImageFilter.UnsharpMask(radius=1.2, percent=140, threshold=2))
    return np.asarray(up.convert("RGB"), dtype=np.float32) / 255.0


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
    edge = (yy < 0.06) | (yy > 0.96)
    out[white | (midgray & edge)] = 0.0
    return out


def sample_buffer(arr: np.ndarray, count: int) -> np.ndarray:
    _h, w = arr.shape[:2]
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    sat = np.where(mx > 1e-5, (mx - mn) / np.maximum(mx, 1e-5), 0.0)
    blueish = np.clip(b - 0.5 * r, 0, 1)
    orangish = np.clip(r - 0.35 * b, 0, 1)
    chroma = blueish + orangish
    weight = (lum**1.65) * (0.35 + 1.65 * sat) * (0.55 + 0.9 * chroma)
    weight = np.where(lum < 0.045, 0.0, weight)
    weight = weight + np.where(lum >= 0.045, lum * 0.08, 0.0)
    flat = weight.ravel()
    total = float(flat.sum())
    if total <= 0:
        raise SystemExit("no sample weight")
    idx = RNG.choice(flat.size, size=count, replace=True, p=flat / total)
    ys, xs = np.divmod(idx, w)
    jx = (xs + RNG.random(count)) / w
    jy = (ys + RNG.random(count)) / arr.shape[0]
    cols = np.clip(arr[ys, xs] * 1.22 + 0.04 * (arr[ys, xs] > 0.05), 0, 1.5)
    size = 0.55 + 0.55 * np.clip(lum[ys, xs], 0, 1) ** 0.85
    size = size * (0.92 + 0.16 * RNG.random(count))
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


def make_poster(arr: np.ndarray, path: Path) -> None:
    prev = Image.fromarray(np.clip(arr * 255, 0, 255).astype(np.uint8))
    w, h = prev.size
    target_aspect = 16 / 9
    if w / h > target_aspect:
        # Left-weighted crop keeps the human profile in frame on wide panels.
        nw = int(h * target_aspect)
        x0 = min(int(w * 0.02), max(0, w - nw))
        prev = prev.crop((x0, 0, x0 + nw, h))
    else:
        nh = int(w / target_aspect)
        y0 = (h - nh) // 2
        prev = prev.crop((0, y0, w, y0 + nh))
    prev = ImageEnhance.Brightness(prev).enhance(1.1)
    prev = ImageEnhance.Contrast(prev).enhance(1.12)
    prev = ImageEnhance.Color(prev).enhance(1.15)
    prev.resize((1600, 900), Image.Resampling.LANCZOS).save(
        path, "WEBP", quality=88, method=6
    )


def main() -> None:
    if not SHEET.exists():
        raise SystemExit(f"missing sheet: {SHEET}")
    OUT.mkdir(parents=True, exist_ok=True)
    panels = split_panels(content_crop(Image.open(SHEET)))
    human_arr: np.ndarray | None = None
    for name, panel in zip(NAMES, panels):
        arr = mask_ui(enhance_panel(panel))
        if name == "human":
            human_arr = arr
        write_gz(OUT / f"{name}.bin.gz", sample_buffer(arr, COUNT))
    if human_arr is not None:
        make_poster(human_arr, OUT / "poster.webp")
    print("done")


if __name__ == "__main__":
    main()
