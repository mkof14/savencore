#!/usr/bin/env python3
"""D-0260 — official logo INTERFACE, sharper HUMAN, living alt buffers.

Outputs under public/home/particle-hero/:
  human.bin.gz, human-alt.bin.gz
  interface.bin.gz
  robot-alt.bin.gz, water-alt.bin.gz
  poster.webp

ROBOT/WATER primary remain the D-0258 HTML extracts (not rewritten here).
COUNT=650000, stride 28. True 16:9 frames only — never the 5-panel sheet.
"""
from __future__ import annotations

import gzip
import hashlib
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/home/particle-hero"
PREVIEW = ROOT / "tmp-particle-frames"
SHEET = Path(
    "/Users/mk/.cursor/projects/Users-mk-Desktop-savencore/assets/"
    "Screenshot_2026-08-08_at_12.31.00_PM-9879c7bb-177e-4dc4-b8df-dc437247cb4b.png"
)
# Best official mark in repo (1024² RGBA) — prefer over 128px mark.png
BRAND = ROOT / "public/brand/saven-logo.png"
COUNT, FLOATS, STRIDE = 650_000, 7, 28
HERO_W, HERO_H = 1920, 1080
# Sample at higher res for sharper HUMAN silhouette
SAMPLE_W, SAMPLE_H = 2560, 1440
RNG = np.random.default_rng(20260811)


def write_gz(path: Path, data: np.ndarray) -> str:
    raw = data.astype(np.float32).tobytes()
    assert len(raw) == COUNT * STRIDE, len(raw)
    with gzip.open(path, "wb", compresslevel=9) as f:
        f.write(raw)
    digest = hashlib.sha256(raw).hexdigest()[:16]
    print(f"wrote {path.name} {path.stat().st_size / 1e6:.2f}MB sha={digest}")
    return digest


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
    """Official saven-logo.png large on 16:9 with soft brand glow dust."""
    canvas = Image.new("RGB", (HERO_W, HERO_H), (3, 10, 24))
    # Soft radial brand wash (no collage sheet)
    yy, xx = np.mgrid[0:HERO_H, 0:HERO_W].astype(np.float32)
    cx, cy = HERO_W * 0.5, HERO_H * 0.48
    rad = np.sqrt(((xx - cx) / (HERO_W * 0.38)) ** 2 + ((yy - cy) / (HERO_H * 0.42)) ** 2)
    wash = np.clip(1.0 - rad, 0, 1) ** 1.6
    amb = np.zeros((HERO_H, HERO_W, 3), dtype=np.float32)
    amb[:, :, 0] = wash * 0.22 * (xx / HERO_W)  # warm right
    amb[:, :, 1] = wash * 0.12
    amb[:, :, 2] = wash * 0.38 * (1 - xx / HERO_W)  # cool left
    canvas = Image.fromarray(
        np.clip(
            np.asarray(canvas, dtype=np.float32) + amb * 255, 0, 255
        ).astype(np.uint8)
    )

    mark = Image.open(BRAND).convert("RGBA")
    # Large recognizable mark (~70% frame height)
    th = int(HERO_H * 0.70)
    tw = int(mark.size[0] * (th / mark.size[1]))
    mark = mark.resize((tw, th), Image.Resampling.LANCZOS)
    gx = (HERO_W - tw) // 2
    gy = (HERO_H - th) // 2 - int(HERO_H * 0.02)
    layer = Image.new("RGBA", (HERO_W, HERO_H), (0, 0, 0, 0))
    layer.paste(mark, (gx, gy), mark)
    glow = layer.filter(ImageFilter.GaussianBlur(radius=28))
    # Boost glow alpha slightly
    ga = np.asarray(glow, dtype=np.float32)
    ga[:, :, 3] = np.clip(ga[:, :, 3] * 1.35, 0, 255)
    glow = Image.fromarray(ga.astype(np.uint8))
    composed = Image.alpha_composite(canvas.convert("RGBA"), glow)
    composed = Image.alpha_composite(composed, layer)
    out = composed.convert("RGB")
    out = ImageEnhance.Contrast(out).enhance(1.28)
    out = ImageEnhance.Color(out).enhance(1.35)
    out = ImageEnhance.Brightness(out).enhance(1.06)
    return out.filter(ImageFilter.UnsharpMask(radius=1.4, percent=160, threshold=1))


def make_human_frame(alt: bool = False) -> Image.Image:
    """Sharper dense HUMAN from collage panel 1 → true 16:9 cover."""
    panels = split_panels(content_crop(Image.open(SHEET)))
    hp = panels[0]
    # Upscale strip tall first for crisper LANCZOS
    scale = (SAMPLE_H / hp.size[1]) * (1.08 if not alt else 1.12)
    up = hp.resize((int(hp.size[0] * scale), int(hp.size[1] * scale)), Image.Resampling.LANCZOS)
    # Cover crop into SAMPLE_W x SAMPLE_H, left-biased face
    if up.size[0] < SAMPLE_W or up.size[1] < SAMPLE_H:
        pad = Image.new("RGB", (max(SAMPLE_W, up.size[0]), max(SAMPLE_H, up.size[1])), (4, 12, 28))
        pad.paste(up, (0, (pad.size[1] - up.size[1]) // 2))
        up = pad
    cx = int(0.18 * up.size[0]) + (int(up.size[0] * 0.02) if alt else 0)
    cy = up.size[1] // 2 + (int(up.size[1] * 0.015) if alt else 0)
    x0 = max(0, min(cx - SAMPLE_W // 2, up.size[0] - SAMPLE_W))
    y0 = max(0, min(cy - SAMPLE_H // 2, up.size[1] - SAMPLE_H))
    framed = up.crop((x0, y0, x0 + SAMPLE_W, y0 + SAMPLE_H))

    if alt:
        # Mild “breath / expression” warp: slight vertical squash + face nudge
        framed = framed.transform(
            framed.size,
            Image.Transform.AFFINE,
            (1.0, 0.0, -8, 0.012, 0.985, 10),
            resample=Image.Resampling.BICUBIC,
        )

    a = np.asarray(framed, dtype=np.float32) / 255.0
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    L = 0.2126 * r + 0.7152 * g + 0.0722 * b
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    sat = np.where(mx > 1e-5, (mx - mn) / np.maximum(mx, 1e-5), 0)
    out = a.copy()
    # Remap muddy gray/hot → brand blue/orange
    hot = (L > 0.52) & (sat < 0.32)
    out[hot, 0] = np.clip(0.98 + 0.3 * (L[hot] - 0.52), 0, 1.65)
    out[hot, 1] = np.clip(0.5 + 0.28 * (L[hot] - 0.52), 0, 1.4)
    out[hot, 2] = np.clip(0.08 + 0.08 * (1 - (L[hot] - 0.52)), 0, 0.65)
    gray = (sat < 0.11) & (L > 0.06) & (L < 0.52)
    out[gray, 0] = 0.05 + 0.1 * L[gray]
    out[gray, 1] = 0.26 + 0.38 * L[gray]
    out[gray, 2] = 0.62 + 0.7 * L[gray]
    # Soft interior fill (less muddy than heavy blur)
    blur = Image.fromarray(np.clip(out * 255, 0, 255).astype(np.uint8)).filter(
        ImageFilter.GaussianBlur(2.2)
    )
    ba = np.asarray(blur, dtype=np.float32) / 255.0
    soft = Image.fromarray(((L > 0.045) * 255).astype(np.uint8)).filter(
        ImageFilter.MaxFilter(9)
    )
    soft_m = (
        np.asarray(soft.filter(ImageFilter.GaussianBlur(2.2)), dtype=np.float32) / 255.0
    )
    interior = (soft_m > 0.28) & (out.max(2) < 0.18)
    out = np.where(interior[:, :, None], np.maximum(out, ba * 0.92), out)

    if alt:
        # Face region slightly brighter / warmer (micro-expression)
        yy = np.linspace(0, 1, out.shape[0], False)[:, None]
        xx = np.linspace(0, 1, out.shape[1], False)[None, :]
        face = (xx > 0.12) & (xx < 0.52) & (yy > 0.18) & (yy < 0.72)
        out[face, 0] = np.clip(out[face, 0] * 1.08 + 0.04, 0, 1.7)
        out[face, 1] = np.clip(out[face, 1] * 1.04 + 0.02, 0, 1.5)
        out[face, 2] = np.clip(out[face, 2] * 0.96, 0, 1.6)

    im = Image.fromarray(np.clip(out * 255, 0, 255).astype(np.uint8))
    im = ImageEnhance.Contrast(im).enhance(1.48)
    im = ImageEnhance.Color(im).enhance(1.75)
    im = ImageEnhance.Brightness(im).enhance(1.18)
    im = im.filter(ImageFilter.UnsharpMask(radius=1.6, percent=190, threshold=1))
    # Down to hero 16:9 for poster / consistent uv
    return im.resize((HERO_W, HERO_H), Image.Resampling.LANCZOS)


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
    cx, cy = (0.50, 0.48) if mode == "logo" else (0.26, 0.50)
    rad = np.sqrt((xx - cx) ** 2 + ((yy - cy) * 1.1) ** 2)
    mask = (lum > 0.035) | ((chroma > 0.06) & (lum > 0.025))
    base = (0.65 + 0.55 * np.clip(lum, 0, 1) ** 0.5) * (0.45 + 1.55 * sat) * (
        0.45 + 1.35 * chroma
    )
    if mode == "logo":
        center = np.clip(1.25 - rad * 2.05, 0.06, 1.3)
        weight = np.where(mask, base * center, 0.0)
        weight = np.where(gray & (lum < 0.45), weight * 0.04, weight)
        # Prefer mark body over sparse ambient
        weight = np.where((rad > 0.42) & (lum < 0.1), weight * 0.08, weight)
    else:
        left = np.clip(1.3 - xx * 0.95, 0.35, 1.3)
        weight = np.where(mask, base * left, 0.0)
        face = (xx < 0.55) & (yy > 0.1) & (yy < 0.86) & mask
        weight = np.where(face, weight + 0.7 * (0.22 + lum) * (0.45 + sat), weight)
        weight = np.where(gray & (sat < 0.1) & (lum < 0.32), weight * 0.12, weight)

    flat = weight.ravel()
    p = flat / flat.sum()
    n_w = int(count * 0.68)
    n_u = count - n_w
    idx_w = RNG.choice(flat.size, size=n_w, replace=True, p=p)
    midx = np.flatnonzero(mask.ravel())
    mw = flat[midx]
    mw = mw / mw.sum()
    idx_u = midx[RNG.choice(midx.size, size=n_u, replace=True, p=mw)]
    idx = np.concatenate([idx_w, idx_u])
    RNG.shuffle(idx)
    ys, xs = np.divmod(idx, w)
    # Sub-pixel jitter for crisper denser look
    cols = np.clip(arr[ys, xs] * 1.36 + 0.035, 0, 1.75)
    mean = cols.mean(axis=1, keepdims=True)
    cols = np.clip(mean + (cols - mean) * 1.32, 0, 1.75)
    size = (0.98 + 0.88 * np.clip(lum[ys, xs], 0, 1) ** 0.62) * (
        0.9 + 0.18 * RNG.random(count)
    )
    if mode == "logo":
        size *= 1.08
    buf = np.empty((count, FLOATS), dtype=np.float32)
    buf[:, 0] = (xs + RNG.random(count)) / w
    buf[:, 1] = (ys + RNG.random(count)) / h
    buf[:, 2:5] = cols
    buf[:, 5] = size
    buf[:, 6] = RNG.random(count)
    return buf.ravel()


def load_bin(path: Path) -> np.ndarray:
    raw = gzip.open(path, "rb").read()
    assert len(raw) == COUNT * STRIDE
    return np.frombuffer(raw, dtype=np.float32).copy()


def warp_alt_from_html(src: np.ndarray, kind: str) -> np.ndarray:
    """Derive living alt keyframe from HTML ROBOT/WATER particle field."""
    f = src.reshape(-1, FLOATS).copy()
    x, y = f[:, 0], f[:, 1]
    if kind == "water":
        # Hand/glass band — reach toward center (pass gesture)
        hand = (x > 0.28) & (x < 0.72) & (y > 0.28) & (y < 0.78)
        f[hand, 0] = np.clip(x[hand] + 0.018 * np.sin((y[hand] - 0.5) * 6), 0, 1)
        f[hand, 1] = np.clip(y[hand] - 0.012 * np.cos((x[hand] - 0.5) * 5), 0, 1)
        # Slight warm lift on glass cluster
        glass = (x > 0.40) & (x < 0.60) & (y > 0.35) & (y < 0.65)
        f[glass, 2:5] = np.clip(f[glass, 2:5] * 1.12 + 0.03, 0, 1.8)
        f[glass, 5] = np.clip(f[glass, 5] * 1.08, 0.3, 2.8)
    else:  # robot
        # Arm / torso subtle lean + head nod
        arm = (x < 0.55) & (y > 0.25) & (y < 0.85)
        f[arm, 0] = np.clip(x[arm] + 0.014, 0, 1)
        f[arm, 1] = np.clip(y[arm] + 0.008 * np.sin(x[arm] * 8), 0, 1)
        head = (x > 0.15) & (x < 0.45) & (y < 0.42)
        f[head, 1] = np.clip(y[head] + 0.01, 0, 1)
        f[arm, 5] = np.clip(f[arm, 5] * 1.05, 0.3, 2.8)
    return f.ravel()


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    PREVIEW.mkdir(exist_ok=True)

    print("logo source:", BRAND, "exists", BRAND.exists())
    logo = make_logo_frame()
    logo.save(PREVIEW / "logo-d0260.png")
    human = make_human_frame(alt=False)
    human_alt_img = make_human_frame(alt=True)
    human.save(PREVIEW / "human-d0260.png")
    human_alt_img.save(PREVIEW / "human-alt-d0260.png")

    logo_arr = np.asarray(logo, dtype=np.float32) / 255.0
    human_arr = np.asarray(human, dtype=np.float32) / 255.0
    human_alt_arr = np.asarray(human_alt_img, dtype=np.float32) / 255.0

    write_gz(OUT / "interface.bin.gz", sample_fill(logo_arr, COUNT, "logo"))
    write_gz(OUT / "human.bin.gz", sample_fill(human_arr, COUNT, "human"))
    write_gz(OUT / "human-alt.bin.gz", sample_fill(human_alt_arr, COUNT, "human"))

    robot = load_bin(OUT / "robot.bin.gz")
    water = load_bin(OUT / "water.bin.gz")
    write_gz(OUT / "robot-alt.bin.gz", warp_alt_from_html(robot, "robot"))
    write_gz(OUT / "water-alt.bin.gz", warp_alt_from_html(water, "water"))

    poster = ImageEnhance.Color(
        ImageEnhance.Contrast(ImageEnhance.Brightness(human).enhance(1.12)).enhance(
            1.2
        )
    ).enhance(1.28)
    poster.resize((1600, 900), Image.Resampling.LANCZOS).save(
        OUT / "poster.webp", "WEBP", quality=91, method=6
    )
    print("poster", (OUT / "poster.webp").stat().st_size)
    print("done D-0260 bake")


if __name__ == "__main__":
    main()
