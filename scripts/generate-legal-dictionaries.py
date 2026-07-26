#!/usr/bin/env python3
"""Generate clean legal dictionary .ts files from English keys (D-0161)."""
import json
import re
import time
from pathlib import Path

from deep_translator import GoogleTranslator

ROOT = Path(__file__).resolve().parents[1]
LEGAL_KEYS_PATH = ROOT / "tmp/flagship-legal-keys/legal.json"
OUT_DIR = ROOT / "src/content/legal/dictionaries"

LOCALES = {
    "fr": "fr",
    "ja": "ja",
    "zh-cn": "zh-CN",
    "ar": "ar",
    "he": "iw",
    "ru": "ru",
    "uk": "uk",
}

KEEP_TERMS = [
    "SAVEN Core",
    "SAVEN Robotics Lab",
    "SAVEN Robotics Interface",
    "Internal Future Lab",
    "Intelligence for the Physical World",
    "Turning Intelligence Into Human Care",
    "WCAG 2.2 AA",
    "WCAG 2.2 Level AA",
    "WCAG 2.2 Nivel AA",
    "Layer-2",
    "Layer 2",
    "HMI",
    "IRR",
    "ROI",
    "TBD",
    "security@",
    "Future Lab",
    "Robotics Interface",
    "Robotics Lab",
    "Robotics Layer",
    "Inc.",
]

MANUAL = {
    "fr": {"Privacy Policy": "Politique de confidentialité", "Responsible AI": "IA responsable"},
    "ja": {"Privacy Policy": "プライバシーポリシー"},
    "zh-cn": {"Privacy Policy": "隐私政策"},
    "ar": {"Privacy Policy": "سياسة الخصوصية"},
    "he": {"Privacy Policy": "מדיניות פרטיות"},
    "ru": {"Privacy Policy": "Политика конфиденциальности"},
    "uk": {"Privacy Policy": "Політика конфіденційності"},
}


def shield(text: str) -> tuple[str, list[str]]:
    slots: list[str] = []
    out = text
    for term in sorted(KEEP_TERMS, key=len, reverse=True):
        if term in out:
            token = f"ZZZKEEP{len(slots)}ZZZ"
            slots.append(term)
            out = out.replace(term, token)
    return out, slots


def unshield(text: str, slots: list[str]) -> str:
    out = text
    for i, term in enumerate(slots):
        out = out.replace(f"ZZZKEEP{i}ZZZ", term)
    return out


def esc_ts(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")


def translate_chunk(text: str, translator: GoogleTranslator) -> str:
    for attempt in range(6):
        try:
            return translator.translate(text)
        except Exception:
            time.sleep(1.5 * (attempt + 1))
    return text


def translate_text(text: str, translator: GoogleTranslator) -> str:
    if not text.strip():
        return text
    shielded, slots = shield(text)
    if len(shielded) <= 4500:
        translated = translate_chunk(shielded, translator)
    else:
        parts = re.split(r"(?<=[.!?])\s+", shielded)
        translated = " ".join(translate_chunk(part, translator) for part in parts if part)
    return unshield(translated, slots)


def write_dict(locale: str, mapping: dict[str, str], keys: list[str]) -> None:
    lines = [f'  "{esc_ts(k)}": "{esc_ts(mapping[k])}",' for k in keys]
    content = (
        "/* Generated from the canonical English source. */\n"
        "export const dictionary: Record<string, string> = {\n"
        + "\n".join(lines)
        + "\n};\n"
    )
    out = OUT_DIR / f"{locale}.ts"
    out.write_text(content, encoding="utf-8")
    assert "Politique de confidentialité" in content or locale != "fr"
    assert out.stat().st_size > 1000, f"{out} too small"


keys: list[str] = json.loads(LEGAL_KEYS_PATH.read_text(encoding="utf-8"))
print(f"Translating {len(keys)} legal keys for {len(LOCALES)} locales...")

for locale, google_code in LOCALES.items():
    translator = GoogleTranslator(source="en", target=google_code)
    mapping: dict[str, str] = {}
    for i, key in enumerate(keys):
        if locale in MANUAL and key in MANUAL[locale]:
            mapping[key] = MANUAL[locale][key]
        else:
            mapping[key] = translate_text(key, translator)
        if (i + 1) % 25 == 0:
            print(f"  {locale}: {i + 1}/{len(keys)}")
        time.sleep(0.15)
    write_dict(locale, mapping, keys)
    erkl = sum(1 for v in mapping.values() if "erklärung" in v.lower())
    spanish_markers = sum(
        1 for v in mapping.values() if re.search(r"\b(borrador|Consulte|sitio web)\b", v, re.I)
    )
    print(
        f"Wrote {locale}.ts — Privacy Policy={mapping['Privacy Policy']!r}, "
        f"erklärung={erkl}, es_markers={spanish_markers}"
    )

print("Done.")
