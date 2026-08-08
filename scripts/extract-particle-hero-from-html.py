#!/usr/bin/env python3
"""Extract professional particle buffers from owner HTML (D-0258).

Source: /Users/mk/Desktop/343434.html
Writes: public/home/particle-hero/{human,interface,robot,water}.bin.gz
Also renders a single-frame HUMAN poster.webp (never the 5-panel sheet).
"""
from __future__ import annotations
import base64, gzip
from pathlib import Path
import numpy as np
from PIL import Image, ImageEnhance

ROOT = Path(__file__).resolve().parents[1]
HTML = Path("/Users/mk/Desktop/343434.html")
OUT = ROOT / "public/home/particle-hero"
COUNT, STRIDE = 650_000, 28

def extract(script: str, key: str) -> bytes:
    marker = f"{key}:'"
    i = script.find(marker)
    if i < 0:
        raise SystemExit(f"missing {key}")
    i += len(marker)
    j = script.find("'", i)
    raw = base64.b64decode(script[i:j])
    if len(raw) != COUNT * STRIDE:
        raise SystemExit(f"{key} size {len(raw)}")
    return raw

def main() -> None:
    script = HTML.read_text(encoding="utf-8", errors="replace")
    s0, s1 = script.find("<script>") + 8, script.rfind("</script>")
    script = script[s0:s1]
    OUT.mkdir(parents=True, exist_ok=True)
    for obsolete in ("logo.bin.gz", "touch.bin.gz", "return.bin.gz", "poster-logo.webp"):
        p = OUT / obsolete
        if p.exists():
            p.unlink()
    human = None
    for name in ("HUMAN", "INTERFACE", "ROBOT", "WATER"):
        raw = extract(script, name)
        if name == "HUMAN":
            human = raw
        with gzip.open(OUT / f"{name.lower()}.bin.gz", "wb", compresslevel=9) as f:
            f.write(raw)
        print("wrote", name.lower(), (OUT / f"{name.lower()}.bin.gz").stat().st_size)
    assert human
    f = np.frombuffer(human, dtype=np.float32).reshape(-1, 7)
    W, H = 1600, 900
    img = np.zeros((H, W, 3), dtype=np.float32)
    step = 2
    xs, ys, cols = f[::step, 0], f[::step, 1], np.clip(f[::step, 2:5] * 1.35, 0, 1.8)
    px = np.clip((xs * (W - 1)).astype(np.int32), 0, W - 1)
    py = np.clip((ys * (H - 1)).astype(np.int32), 0, H - 1)
    for c in range(3):
        np.add.at(img[:, :, c], (py, px), cols[:, c] * 0.35)
    mx = np.percentile(img[img > 0], 99.5) if (img > 0).any() else 1.0
    img = np.clip((img / max(float(mx), 1e-6)) ** 0.72, 0, 1)
    poster = Image.fromarray((img * 255).astype(np.uint8))
    poster = ImageEnhance.Brightness(poster).enhance(1.15)
    poster = ImageEnhance.Contrast(poster).enhance(1.2)
    poster = ImageEnhance.Color(poster).enhance(1.25)
    poster.save(OUT / "poster.webp", "WEBP", quality=90, method=6)
    print("poster", (OUT / "poster.webp").stat().st_size)

if __name__ == "__main__":
    main()
