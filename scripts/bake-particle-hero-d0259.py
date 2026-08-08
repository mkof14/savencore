#!/usr/bin/env python3
"""D-0259 — rebake HUMAN + INTERFACE only (ROBOT/WATER stay HTML).

INTERFACE: brand flame mark (`public/brand/saven-logo-mark.png`) large on
true 16:9 with soft collage logo ambient. Dense silhouette-fill sampling.

HUMAN: collage panel 1 → 16:9 cover-crop, gray/hot remapped to blue/orange,
silhouette fill. Poster from improved HUMAN frame.

COUNT=650000, stride 28. Cache-bust via HeroParticleScene ASSET_VER=d0259.
"""
from __future__ import annotations

import gzip
import hashlib
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/home/particle-hero"
SHEET = Path(
    "/Users/mk/.cursor/projects/Users-mk-Desktop-savencore/assets/"
    "Screenshot_2026-08-08_at_12.31.00_PM-9879c7bb-177e-4dc4-b8df-dc437247cb4b.png"
)
BRAND = ROOT / "public/brand/saven-logo-mark.png"
COUNT, FLOATS = 650_000, 7
HERO_W, HERO_H = 1920, 1080
RNG = np.random.default_rng(20260810)


def content_crop(im: Image.Image) -> Image.Image:
    arr = np.array(im.convert("RGB"), dtype=np.float32)
    lum = arr.mean(axis=2)
    rows = np.where(np.abs(lum.mean(axis=1) - 30) > 2)[0]
    cols = np.where(np.abs(lum.mean(axis=0) - 30) > 2)[0]
    return Image.fromarray(
        arr[int(rows[0]) : int(rows[-1]) + 1, int(cols[0]) : int(cols[-1]) + 1].astype(
            np.uint8
        )
    )


def split_panels(crop: Image.Image) -> list[Image.Image]:
    arr = np.array(crop, dtype=np.float32)
    h = arr.shape[0]
    crow = arr.mean(axis=(1, 2))
    seps = [0]
    for k in range(1, 5):
        c = int(k * h / 5)
        w = slice(max(0, c - 8), min(h, c + 8))
        seps.append(w.start + int(np.argmin(crow[w])))
    seps.append(h)
    out: list[Image.Image] = []
    for i in range(5):
        a, b = seps[i], seps[i + 1]
        a2 = a + 1 if i > 0 else a
        b2 = b - 1 if i < 4 else b
        out.append(Image.fromarray(arr[a2:b2].astype(np.uint8)))
    return out


def make_logo_frame() -> Image.Image:
    canvas = Image.new("RGB", (HERO_W, HERO_H), (4, 12, 28))
    panels = split_panels(content_crop(Image.open(SHEET)))
    logo_strip = panels[1]
    scale = HERO_H / logo_strip.size[1]
    amb = logo_strip.resize(
        (int(logo_strip.size[0] * scale), HERO_H), Image.Resampling.LANCZOS
    )
    if amb.size[0] >= HERO_W:
        x0 = (amb.size[0] - HERO_W) // 2
        amb = amb.crop((x0, 0, x0 + HERO_W, HERO_H))
    else:
        pad = Image.new("RGB", (HERO_W, HERO_H), (4, 12, 28))
        pad.paste(amb, ((HERO_W - amb.size[0]) // 2, 0))
        amb = pad
    amb = ImageEnhance.Brightness(amb).enhance(0.55).filter(
        ImageFilter.GaussianBlur(radius=18)
    )
    canvas = Image.blend(canvas, amb, 0.35)

    mark = Image.open(BRAND).convert("RGBA")
    th = int(HERO_H * 0.62)
    tw = int(mark.size[0] * (th / mark.size[1]))
    mark = mark.resize((tw, th), Image.Resampling.LANCZOS)
    gx, gy = (HERO_W - tw) // 2, (HERO_H - th) // 2 - int(HERO_H * 0.02)
    layer = Image.new("RGBA", (HERO_W, HERO_H), (0, 0, 0, 0))
    layer.paste(mark, (gx, gy), mark)
    glow = layer.filter(ImageFilter.GaussianBlur(radius=22))
    composed = Image.alpha_composite(canvas.convert("RGBA"), glow)
    composed = Image.alpha_composite(composed, layer)
    out = composed.convert("RGB")
    out = ImageEnhance.Contrast(out).enhance(1.25)
    out = ImageEnhance.Color(out).enhance(1.45)
    out = ImageEnhance.Brightness(out).enhance(1.08)
    return out.filter(ImageFilter.UnsharpMask(radius=1.2, percent=140, threshold=2))


def make_human_frame() -> Image.Image:
    panels = split_panels(content_crop(Image.open(SHEET)))
    hp = panels[0]
    scale = HERO_H / hp.size[1]
    up = hp.resize((int(hp.size[0] * scale), HERO_H), Image.Resampling.LANCZOS)
    cx = int(0.2 * up.size[0])
    x0 = max(0, min(cx - HERO_W // 2, up.size[0] - HERO_W))
    framed = up.crop((x0, 0, x0 + HERO_W, HERO_H))
    z = framed.resize((int(HERO_W * 1.1), int(HERO_H * 1.1)), Image.Resampling.LANCZOS)
    x0 = max(0, (z.size[0] - HERO_W) // 2 - int(HERO_W * 0.04))
    y0 = (z.size[1] - HERO_H) // 2
    framed = z.crop((x0, y0, x0 + HERO_W, y0 + HERO_H))

    a = np.asarray(framed, dtype=np.float32) / 255.0
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    L = 0.2126 * r + 0.7152 * g + 0.0722 * b
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    sat = np.where(mx > 1e-5, (mx - mn) / np.maximum(mx, 1e-5), 0)
    out = a.copy()
    hot = (L > 0.55) & (sat < 0.35)
    out[hot, 0] = np.clip(0.95 + 0.35 * (L[hot] - 0.55), 0, 1.6)
    out[hot, 1] = np.clip(0.48 + 0.3 * (L[hot] - 0.55), 0, 1.35)
    out[hot, 2] = np.clip(0.1 + 0.1 * (1 - (L[hot] - 0.55)), 0, 0.7)
    gray = (sat < 0.12) & (L > 0.07) & (L < 0.55)
    out[gray, 0] = 0.06 + 0.12 * L[gray]
    out[gray, 1] = 0.28 + 0.4 * L[gray]
    out[gray, 2] = 0.6 + 0.65 * L[gray]
    blur = Image.fromarray(np.clip(out * 255, 0, 255).astype(np.uint8)).filter(
        ImageFilter.GaussianBlur(3.2)
    )
    ba = np.asarray(blur, dtype=np.float32) / 255.0
    soft = Image.fromarray(((L > 0.05) * 255).astype(np.uint8)).filter(
        ImageFilter.MaxFilter(11)
    )
    soft_m = (
        np.asarray(soft.filter(ImageFilter.GaussianBlur(3)), dtype=np.float32) / 255.0
    )
    interior = (soft_m > 0.3) & (out.max(2) < 0.2)
    out = np.where(interior[:, :, None], np.maximum(out, ba * 0.9), out)
    im = Image.fromarray(np.clip(out * 255, 0, 255).astype(np.uint8))
    im = ImageEnhance.Contrast(im).enhance(1.4)
    im = ImageEnhance.Color(im).enhance(1.7)
    im = ImageEnhance.Brightness(im).enhance(1.22)
    return im.filter(ImageFilter.UnsharpMask(radius=1.3, percent=150, threshold=2))


def sample_fill(arr: np.ndarray, count: int, mode: str) -> np.ndarray:
    h, w = arr.shape[:2]
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    sat = np.where(mx > 1e-5, (mx - mn) / np.maximum(mx, 1e-5), 0.0)
    chroma = np.clip(b - 0.35 * r, 0, 1) + np.clip(r - 0.2 * b, 0, 1)
    gray = (np.abs(r - g) < 0.05) & (np.abs(g - b) < 0.05)
    yy = np.linspace(0, 1, h, endpoint=False)[:, None]
    xx = np.linspace(0, 1, w, endpoint=False)[None, :]
    cx, cy = (0.50, 0.48) if mode == "logo" else (0.28, 0.50)
    rad = np.sqrt((xx - cx) ** 2 + ((yy - cy) * 1.1) ** 2)
    mask = (lum > 0.04) | ((chroma > 0.07) & (lum > 0.03))
    base = (0.7 + 0.5 * np.clip(lum, 0, 1) ** 0.55) * (0.5 + 1.5 * sat) * (
        0.5 + 1.3 * chroma
    )
    if mode == "logo":
        center = np.clip(1.2 - rad * 1.9, 0.08, 1.25)
        weight = np.where(mask, base * center, 0.0)
        weight = np.where(gray & (lum < 0.5), weight * 0.05, weight)
        weight = np.where((rad > 0.48) & (lum < 0.12), weight * 0.1, weight)
    else:
        left = np.clip(1.25 - xx * 0.9, 0.4, 1.25)
        weight = np.where(mask, base * left, 0.0)
        face = (xx < 0.58) & (yy > 0.12) & (yy < 0.88) & mask
        weight = np.where(face, weight + 0.55 * (0.2 + lum) * (0.4 + sat), weight)
        weight = np.where(gray & (sat < 0.1) & (lum < 0.35), weight * 0.15, weight)

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
    cols = np.clip(arr[ys, xs] * 1.4 + 0.04, 0, 1.8)
    mean = cols.mean(axis=1, keepdims=True)
    cols = np.clip(mean + (cols - mean) * 1.3, 0, 1.8)
    size = (1.05 + 0.9 * np.clip(lum[ys, xs], 0, 1) ** 0.65) * (
        0.9 + 0.2 * RNG.random(count)
    )
    buf = np.empty((count, FLOATS), dtype=np.float32)
    buf[:, 0] = (xs + RNG.random(count)) / w
    buf[:, 1] = (ys + RNG.random(count)) / h
    buf[:, 2:5] = cols
    buf[:, 5] = size
    buf[:, 6] = RNG.random(count)
    return buf.ravel()


def write_gz(path: Path, data: np.ndarray) -> str:
    raw = data.astype(np.float32).tobytes()
    assert len(raw) == COUNT * 28
    with gzip.open(path, "wb", compresslevel=9) as f:
        f.write(raw)
    digest = hashlib.sha256(raw).hexdigest()[:16]
    print(f"wrote {path.name} {path.stat().st_size / 1e6:.2f}MB sha256={digest}")
    return digest


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    logo = make_logo_frame()
    human = make_human_frame()
    logo_arr = np.asarray(logo, dtype=np.float32) / 255.0
    human_arr = np.asarray(human, dtype=np.float32) / 255.0
    write_gz(OUT / "interface.bin.gz", sample_fill(logo_arr, COUNT, "logo"))
    write_gz(OUT / "human.bin.gz", sample_fill(human_arr, COUNT, "human"))
    poster = ImageEnhance.Color(
        ImageEnhance.Contrast(
            ImageEnhance.Brightness(human).enhance(1.15)
        ).enhance(1.18)
    ).enhance(1.25)
    poster.resize((1600, 900), Image.Resampling.LANCZOS).save(
        OUT / "poster.webp", "WEBP", quality=90, method=6
    )
    print("poster", (OUT / "poster.webp").stat().st_size)


if __name__ == "__main__":
    main()
