# [Company Name] — Engineering Risk & Safety Consulting

> Independent engineering consultancy specializing in **risk assessments** and
> **safety assessments**, with a focus on **drones / Unmanned Aircraft Systems (UAS)**.

This repository is the company's working framework: methodologies, reusable
templates, per-client engagement folders, supporting tooling, and reference
material. It is intended to standardize how we scope, perform, and deliver
assessments so that every engagement is consistent, traceable, and auditable.

> ⚠️ **Rename me.** Replace `[Company Name]` throughout once the legal/brand name
> is set.

---

## Repository structure

```
Consulting/
├── docs/            # How we work: methodologies, standards, processes
│   ├── methodology/ # Risk & safety assessment methods (incl. SORA)
│   ├── standards/   # Regulations and standards we apply
│   └── processes/   # Internal engagement / quality processes
├── templates/       # Reusable deliverable & working templates
├── projects/        # One folder per client engagement (see _TEMPLATE)
├── tools/           # Code: calculators, report generators, helpers
└── resources/       # Reference material, regulatory source documents
```

## How to use this repo

1. **Starting a new engagement** → copy `projects/_TEMPLATE/` to
   `projects/<YYYY>-<client>-<short-name>/` and work inside it.
2. **Producing a deliverable** → start from the relevant file in `templates/`.
3. **Need the method?** → see `docs/methodology/`. The drone-specific risk
   approach is documented in [`docs/methodology/sora.md`](docs/methodology/sora.md).
4. **Tooling** → see [`tools/README.md`](tools/README.md).

## Service lines

- **Risk assessments** — operational and project risk (ISO 31000-aligned),
  Ground Risk / Air Risk for UAS operations (SORA), hazard identification.
- **Safety assessments** — Functional Hazard Assessment (FHA), FMEA, Fault Tree
  Analysis (FTA), bowtie analysis, safety cases.
- **Regulatory support** — EASA Open/Specific/Certified categories, operational
  authorizations, ConOps development, FAA Part 107 where applicable.

## Conventions

- **Engagement folders:** `projects/<YYYY>-<client>-<short-name>/`
- **Document versions:** track in-file (see the revision table in each template)
  and via git history; tag delivered versions (e.g. `v1.0-clientX-report`).
- **Confidentiality:** this is a **private** repository. Client data lives only
  here; never copy it to public locations. See `.gitignore` for excluded files.

## Status

🚧 Initial framework scaffold. See open work in the issues / project board.
