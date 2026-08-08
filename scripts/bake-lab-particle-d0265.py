#!/usr/bin/env python3
"""D-0265 — Lab story particle morph: Understanding → Assistance → Care.

Sources (owner screenshots):
  1. particle human + energy waves (system / understanding)
  2. robotic arm handing water (assistance) — mask SAVEN ASSIST HUD
  3. humanoid handing water (care) — mask SAVEN ASSIST HUD; keep chest SAVEN mark

True 16:9, COUNT=650000. Writes public/lab/particle/{understand,assist,care}.bin.gz
plus poster.webp. Removes obsolete wave-*.bin.gz from prior Lab bake.
"""
from __future__ import annotations

import gzip
import hashlib
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path("/Users/mk/.cursor/projects/Users-mk-Desktop-savencore/assets")
OUT = ROOT / "public/lab/particle"
PREVIEW = ROOT / "tmp-particle-frames"
COUNT, FLOATS, STRIDE = 650_000, 7, 28
HERO_W, HERO_H = 1920, 1080
RNG = np.random.default_rng(20260813)

FRAMES = [
    {
        "name": "understand",
        "src": ASSETS
        / "Screenshot_2026-08-08_at_4.41.57_PM-e5710b4f-3156-4cba-a5b3-19eabb1bfd09.png",
        "focal_x": 0.55,
        "focal_y": 0.48,
        "mode": "waves",
    },
    {
        "name": "assist",
        "src": ASSETS
        / "Screenshot_2026-08-08_at_4.41.41_PM-812f6060-50d4-446b-96e8-ba27ccfc1cc3.png",
        "focal_x": 0.50,
        "focal_y": 0.50,
        "mode": "arm",
    },
    {
        "name": "care",
        "src": ASSETS
        / "Screenshot_2026-08-08_at_4.42.28_PM-80e61ff9-74e7-40f1-ba63-f1e183831bd3.png",
        "focal_x": 0.48,
        "focal_y": 0.50,
        "mode": "humanoid",
    },
]


def write_gz(path: Path, data: np.ndarray) -> str:
    raw = data.astype(np.float32).tobytes()
    assert len(raw) == COUNT * STRIDE
    with gzip.open(path, "wb", compresslevel=9) as f:
        f.write(raw)
    digest = hashlib.sha256(raw).hexdigest()[:16]
    print(f"wrote {path.name} {path.stat().st_size / 1e6:.2f}MB sha={digest}")
    return digest


def _hard_rects(mask: np.ndarray, w: int, h: int, rects: list[tuple[float, float, float, float]]) -> None:
    """OR normalized (x0,y0,x1,y1) rectangles into boolean mask."""
    for x0, y0, x1, y1 in rects:
        mask[
            int(y0 * h) : int(y1 * h),
            int(x0 * w) : int(x1 * w),
        ] = True


def mask_hud(im: Image.Image, mode: str) -> Image.Image:
    """Mask SAVEN ASSIST HUD / UI chrome; keep faces, glass, product SAVEN marks."""
    w, h = im.size
    arr = np.asarray(im.convert("RGB"), dtype=np.float32)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    sat = np.where(mx > 1e-5, (mx - mn) / np.maximum(mx, 1e-5), 0.0)
    yy = np.arange(h)[:, None] / h
    xx = np.arange(w)[None, :] / w

    mask = np.zeros((h, w), dtype=bool)

    if mode == "waves":
        mask |= (yy < 0.04) & (lum > 40)
        mask |= (yy > 0.94) & (lum > 40)
    elif mode == "arm":
        # Full SAVEN ASSIST panel + circular HUD (title starts at y≈0).
        # Keep face (far right), glass/hands, arm SAVEN marks (left).
        _hard_rects(
            mask,
            w,
            h,
            [
                (0.38, 0.00, 0.78, 0.50),  # title + rows + most of circular HUD
                (0.70, 0.00, 0.86, 0.44),  # right edge of circular HUD
            ],
        )
        hud = (xx > 0.38) & (xx < 0.86) & (yy < 0.50)
        cyan_ui = (b > r * 1.12) & (b > g * 0.92) & (lum > 50) & (lum < 230)
        mask |= hud & cyan_ui
        mask |= hud & (lum > 145) & (sat < 0.35)
        face = (xx > 0.80) & (yy > 0.12) & (yy < 0.58)
        mask &= ~face
        hands = (xx > 0.35) & (xx < 0.72) & (yy > 0.52) & (yy < 0.84)
        mask &= ~hands
    else:  # humanoid
        # Top-right SAVEN ASSIST + residual BALANCE chip by the head
        _hard_rects(
            mask,
            w,
            h,
            [
                (0.58, 0.00, 0.99, 0.32),  # main SAVEN ASSIST panel
                (0.72, 0.24, 0.96, 0.44),  # residual HYDRATION/BALANCE chip
            ],
        )
        hud = ((xx > 0.58) & (yy < 0.32)) | (
            (xx > 0.72) & (xx < 0.96) & (yy > 0.24) & (yy < 0.44)
        )
        cyan_ui = (b > r * 1.08) & (b > g * 0.88) & (lum > 45)
        mask |= hud & cyan_ui
        mask |= hud & (lum > 130) & (sat < 0.42)
        chest = (xx > 0.18) & (xx < 0.42) & (yy > 0.32) & (yy < 0.58)
        mask &= ~chest
        # Keep smiling face (center of head), not the side chip
        face = (xx > 0.58) & (xx < 0.78) & (yy > 0.28) & (yy < 0.58)
        mask &= ~face

    # Soft edge + heavy dissolve into deep scene black (no solid hard box)
    kill = Image.fromarray((mask.astype(np.uint8) * 255)).filter(
        ImageFilter.GaussianBlur(radius=14.0)
    )
    k = np.asarray(kill, dtype=np.float32) / 255.0
    k = np.clip(k * 1.55, 0, 1)
    scene_blur = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8)).filter(
        ImageFilter.GaussianBlur(radius=28.0)
    )
    sb = np.asarray(scene_blur, dtype=np.float32)
    bg = np.array([4, 8, 16], dtype=np.float32)
    fill = sb * 0.25 + bg * 0.75
    out = arr * (1 - k[:, :, None]) + fill * k[:, :, None]
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))


def to_16x9(im: Image.Image, fx: float, fy: float) -> Image.Image:
    w, h = im.size
    ta = HERO_W / HERO_H
    if w / h > ta:
        nw, nh = int(round(h * ta)), h
    else:
        nw, nh = w, int(round(w / ta))
    cx, cy = int(fx * w), int(fy * h)
    x0 = max(0, min(cx - nw // 2, w - nw))
    y0 = max(0, min(cy - nh // 2, h - nh))
    crop = im.crop((x0, y0, x0 + nw, y0 + nh)).resize(
        (HERO_W, HERO_H), Image.Resampling.LANCZOS
    )
    crop = ImageEnhance.Contrast(crop).enhance(1.22)
    crop = ImageEnhance.Color(crop).enhance(1.35)
    crop = ImageEnhance.Brightness(crop).enhance(1.1)
    return crop.filter(ImageFilter.UnsharpMask(radius=1.25, percent=145, threshold=2))


def sample_dense(arr: np.ndarray, count: int) -> np.ndarray:
    h, w = arr.shape[:2]
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    sat = np.where(mx > 1e-5, (mx - mn) / np.maximum(mx, 1e-5), 0.0)
    chroma = np.clip(b - 0.3 * r, 0, 1) + np.clip(r - 0.2 * b, 0, 1)
    mask = (lum > 0.035) | ((chroma > 0.07) & (lum > 0.025))
    # Suppress near-white residual HUD glyphs
    mask &= ~((lum > 0.72) & (sat < 0.16))
    weight = np.where(
        mask,
        (0.5 + 0.75 * lum**0.55) * (0.4 + 1.6 * sat) * (0.45 + 1.4 * chroma),
        0.0,
    )
    weight = np.where(lum > 0.3, weight * 1.35, weight)
    flat = weight.ravel()
    p = flat / flat.sum()
    n_w = int(count * 0.72)
    n_u = count - n_w
    idx_w = RNG.choice(flat.size, size=n_w, replace=True, p=p)
    midx = np.flatnonzero(mask.ravel())
    mw = flat[midx]
    mw = mw / mw.sum()
    idx_u = midx[RNG.choice(midx.size, size=n_u, replace=True, p=mw)]
    idx = np.concatenate([idx_w, idx_u])
    RNG.shuffle(idx)
    ys, xs = np.divmod(idx, w)
    cols = np.clip(arr[ys, xs] * 1.4 + 0.03, 0, 1.85)
    mean = cols.mean(axis=1, keepdims=True)
    cols = np.clip(mean + (cols - mean) * 1.25, 0, 1.85)
    size = (0.5 + 0.55 * np.clip(lum[ys, xs], 0, 1) ** 0.7) * (
        0.92 + 0.16 * RNG.random(count)
    )
    buf = np.empty((count, FLOATS), dtype=np.float32)
    buf[:, 0] = (xs + RNG.random(count)) / w
    buf[:, 1] = (ys + RNG.random(count)) / h
    buf[:, 2:5] = cols
    buf[:, 5] = size
    buf[:, 6] = RNG.random(count)
    return buf.ravel()


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    PREVIEW.mkdir(exist_ok=True)
    # Remove prior wave-* experiment bins
    for obsolete in OUT.glob("wave-*"):
        obsolete.unlink()
        print("removed", obsolete.name)

    cleaned: list[Image.Image] = []
    for meta in FRAMES:
        print("source", meta["src"].name, meta["src"].exists())
        # Frame to 16:9 first so HUD hard-rects use final canvas coordinates
        framed = mask_hud(
            to_16x9(
                Image.open(meta["src"]),
                meta["focal_x"],
                meta["focal_y"],
            ),
            meta["mode"],
        )
        framed.save(PREVIEW / f"lab-{meta['name']}-d0265.png")
        framed.save(OUT / f"{meta['name']}.webp", "WEBP", quality=90, method=6)
        cleaned.append(framed)
        write_gz(
            OUT / f"{meta['name']}.bin.gz",
            sample_dense(np.asarray(framed, dtype=np.float32) / 255.0, COUNT),
        )

    # Poster from care beat (story destination)
    poster = ImageEnhance.Brightness(cleaned[2]).enhance(1.08)
    poster.resize((1600, 900), Image.Resampling.LANCZOS).save(
        OUT / "poster.webp", "WEBP", quality=91, method=6
    )
    print("poster", (OUT / "poster.webp").stat().st_size)


if __name__ == "__main__":
    main()
