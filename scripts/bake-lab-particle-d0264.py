#!/usr/bin/env python3
"""D-0264 — Lab particle experiment from owner cinematic hero frames.

Sources (full frames, not collage strips):
  S010101, S111, S333 — human bust + SAVEN energy waves.
Strong UI/text mask, cover-crop to true 16:9, dense COUNT=650000.

Writes public/lab/particle/{wave-a,wave-b,wave-c}.bin.gz + poster.webp
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
RNG = np.random.default_rng(20260812)

FRAMES = [
    {
        "name": "wave-a",
        "src": ASSETS / "S010101-2d817894-d08a-4588-bb4a-8d3b300f9f28.png",
        "focal_x": 0.68,
        "focal_y": 0.50,
        "left_kill": 0.40,
    },
    {
        "name": "wave-b",
        "src": ASSETS / "S111-9bcbb09c-d62f-4c38-86be-a2ad32bf2d7b.png",
        "focal_x": 0.72,
        "focal_y": 0.50,
        "left_kill": 0.42,
    },
    {
        "name": "wave-c",
        "src": ASSETS / "S333-fd283083-afea-4e8d-b47c-05566d1d49cb.png",
        "focal_x": 0.70,
        "focal_y": 0.48,
        "left_kill": 0.42,
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


def mask_ui(im: Image.Image, left_kill: float) -> Image.Image:
    w, h = im.size
    arr = np.asarray(im.convert("RGB"), dtype=np.float32)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    sat = np.where(mx > 1e-5, (mx - mn) / np.maximum(mx, 1e-5), 0.0)
    yy = np.arange(h)[:, None]
    xx = np.arange(w)[None, :]
    mask = np.zeros((h, w), dtype=bool)
    mask |= yy < int(h * 0.10)
    mask |= yy > int(h * 0.86)
    left = xx < int(w * left_kill)
    mask |= left & (sat < 0.28) & (lum > 55)
    mask |= left & (lum > 140)
    mask |= left & (b > r) & (sat < 0.35) & (lum > 70) & (lum < 200)
    mask |= (
        (xx < int(w * 0.45))
        & (yy > int(h * 0.52))
        & (yy < int(h * 0.80))
        & (sat < 0.4)
        & (lum > 60)
    )
    mask |= (lum > 185) & (sat < 0.2)

    kill = Image.fromarray((mask.astype(np.uint8) * 255)).filter(
        ImageFilter.GaussianBlur(3.5)
    )
    k = np.asarray(kill, dtype=np.float32) / 255.0
    lx = np.clip((left_kill * w - xx) / (left_kill * w * 0.35 + 1), 0, 1)
    wave_protect = (sat > 0.22) & (lum > 40)
    gkill = lx * (~wave_protect).astype(np.float32) * 0.92
    k = np.maximum(k, gkill)
    bg = np.array([3, 8, 18], dtype=np.float32)
    out = arr * (1 - k[:, :, None]) + bg * k[:, :, None]
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
    a = np.asarray(crop, dtype=np.float32)
    xx = np.linspace(0, 1, HERO_W)[None, :]
    yy = np.linspace(0, 1, HERO_H)[:, None]
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    sat = np.where(mx > 1e-5, (mx - mn) / np.maximum(mx, 1e-5), 0)
    left = xx < 0.28
    kill = left & (sat < 0.25) & (lum > 50)
    kill |= (yy < 0.08) | (yy > 0.92)
    kill |= left & (lum > 130)
    kf = Image.fromarray((kill.astype(np.uint8) * 255)).filter(
        ImageFilter.GaussianBlur(2.5)
    )
    k = np.asarray(kf, dtype=np.float32) / 255.0
    bg = np.array([3, 8, 18], dtype=np.float32)
    a = a * (1 - k[:, :, None]) + bg * k[:, :, None]
    out = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))
    out = ImageEnhance.Contrast(out).enhance(1.3)
    out = ImageEnhance.Color(out).enhance(1.5)
    out = ImageEnhance.Brightness(out).enhance(1.14)
    return out.filter(ImageFilter.UnsharpMask(radius=1.35, percent=160, threshold=1))


def sample_dense(arr: np.ndarray, count: int) -> np.ndarray:
    h, w = arr.shape[:2]
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    sat = np.where(mx > 1e-5, (mx - mn) / np.maximum(mx, 1e-5), 0.0)
    chroma = np.clip(b - 0.3 * r, 0, 1) + np.clip(r - 0.2 * b, 0, 1)
    mask = (lum > 0.04) | ((chroma > 0.08) & (lum > 0.03))
    mask &= ~((lum > 0.75) & (sat < 0.18))
    weight = np.where(
        mask,
        (0.55 + 0.7 * lum**0.55) * (0.4 + 1.7 * sat) * (0.45 + 1.5 * chroma),
        0.0,
    )
    weight = np.where(lum > 0.35, weight * 1.4, weight)
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
    cols = np.clip(arr[ys, xs] * 1.45 + 0.03, 0, 1.9)
    mean = cols.mean(axis=1, keepdims=True)
    cols = np.clip(mean + (cols - mean) * 1.3, 0, 1.9)
    size = (0.52 + 0.52 * np.clip(lum[ys, xs], 0, 1) ** 0.7) * (
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
    cleaned: list[Image.Image] = []
    for meta in FRAMES:
        print("source", meta["src"].name, meta["src"].exists())
        framed = to_16x9(
            mask_ui(Image.open(meta["src"]), meta["left_kill"]),
            meta["focal_x"],
            meta["focal_y"],
        )
        framed.save(PREVIEW / f"lab-{meta['name']}-d0264.png")
        framed.save(OUT / f"{meta['name']}.webp", "WEBP", quality=90, method=6)
        cleaned.append(framed)
        write_gz(
            OUT / f"{meta['name']}.bin.gz",
            sample_dense(np.asarray(framed, dtype=np.float32) / 255.0, COUNT),
        )
    poster = ImageEnhance.Brightness(cleaned[1]).enhance(1.1)
    poster.resize((1600, 900), Image.Resampling.LANCZOS).save(
        OUT / "poster.webp", "WEBP", quality=91, method=6
    )
    print("poster", (OUT / "poster.webp").stat().st_size)


if __name__ == "__main__":
    main()
