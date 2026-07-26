#!/usr/bin/env python3
"""Restore shielded brand/legal terms corrupted to '0' in legal dictionaries."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LEGAL_KEYS = json.loads(
    (ROOT / "tmp/flagship-legal-keys/legal.json").read_text(encoding="utf-8")
)
OUT_DIR = ROOT / "src/content/legal/dictionaries"
LOCALES = ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]

KEEP_TERMS = [
    "SAVEN Core",
    "SAVEN Robotics Lab",
    "SAVEN Robotics Interface",
    "Internal Future Lab",
    "Intelligence for the Physical World",
    "Turning Intelligence Into Human Care",
    "WCAG 2.2 Level AA",
    "WCAG 2.2 AA",
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

ENTRY_RE = re.compile(r'^\s+"((?:\\.|[^"\\])*)":\s+"((?:\\.|[^"\\])*)",\s*$')


def unesc(s: str) -> str:
    return s.replace('\\"', '"').replace("\\\\", "\\")


def esc_ts(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")


def fix_value(en_key: str, val: str) -> str:
    out = val
    for term in sorted(set(t for t in KEEP_TERMS if t in en_key), key=len, reverse=True):
        if term in out:
            continue
        patterns = [
            r'(?<=[\s«"(\[])(?:0|０)(?=[\s»".\],;])',
            r'(?<=[\s:])0(?=\s)',
            r'«0»',
            r'"0"',
            r'\b0\b',
        ]
        for pat in patterns:
            new_out, n = re.subn(pat, term, out, count=1)
            if n:
                out = new_out
                break
    return out


for locale in LOCALES:
    path = OUT_DIR / f"{locale}.ts"
    lines = path.read_text(encoding="utf-8").splitlines()
    mapping: dict[str, str] = {}
    for line in lines:
        m = ENTRY_RE.match(line)
        if m:
            mapping[unesc(m.group(1))] = unesc(m.group(2))

    fixed = 0
    for key in LEGAL_KEYS:
        if key not in mapping:
            continue
        new_val = fix_value(key, mapping[key])
        if new_val != mapping[key]:
            mapping[key] = new_val
            fixed += 1

    out_lines = [f'  "{esc_ts(k)}": "{esc_ts(mapping[k])}",' for k in LEGAL_KEYS]
    path.write_text(
        "/* Generated from the canonical English source. */\n"
        "export const dictionary: Record<string, string> = {\n"
        + "\n".join(out_lines)
        + "\n};\n",
        encoding="utf-8",
    )
    zeros = sum(1 for k in LEGAL_KEYS if re.search(r'\b0\b', mapping[k]))
    print(f"{locale}: fixed {fixed} entries, remaining standalone 0: {zeros}")
