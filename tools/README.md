# Tools

Code that supports our assessments — calculators, bookkeeping helpers, and
(later) report generators. Python-based.

> ⚠️ These tools are **aids**, not authorities. Always validate results against
> the applicable published methodology (SORA tables, the client's standard, etc.).
> The tool encodes a *specific version* of a method — check it matches the
> version you are applying.

## Setup

```bash
cd tools
python -m venv .venv
# Windows PowerShell:  .venv\Scripts\Activate.ps1
# bash:                source .venv/bin/activate
pip install -r requirements.txt
```

## What's here

| Module | Purpose |
|--------|---------|
| `src/sora_helper.py` | Derive SAIL from final GRC + residual ARC; 5×5 risk scoring helpers |

Run the built-in self-check:

```bash
python src/sora_helper.py
```

## Roadmap ideas
- Risk register → formatted report generator (Markdown/DOCX/PDF)
- FMEA RPN calculator with CSV in/out
- ConOps-driven GRC/ARC worksheet
