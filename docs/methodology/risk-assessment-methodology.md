# Risk Assessment Methodology

This document describes our general approach to risk assessment. It is aligned
with **ISO 31000 (Risk management — Guidelines)** and adapted for engineering and
UAS operational contexts. For the drone-operation-specific method (Ground Risk /
Air Risk / SAIL), see [`sora.md`](sora.md).

## 1. Process overview

```
Scope → Identify → Analyze → Evaluate → Treat → Monitor & Review
                    ▲                                     │
                    └──────────── communicate ◄───────────┘
```

| Step | Goal | Typical output |
|------|------|----------------|
| **Scope & context** | Define the system, boundaries, operating environment, and acceptance criteria | Context statement, assumptions log |
| **Identify** | Find hazards / risk sources | Hazard log, risk register (draft) |
| **Analyze** | Determine likelihood & consequence; existing controls | Risk register with ratings |
| **Evaluate** | Compare against acceptance criteria; prioritize | Ranked risks, ALARP justification |
| **Treat** | Define mitigations / controls | Mitigation actions, residual risk |
| **Monitor & review** | Track effectiveness, re-assess on change | Review log, updated register |

## 2. Risk rating

Default 5×5 matrix. Tailor the scales per engagement and record any changes in
the assessment's assumptions log.

**Likelihood (L)**

| Level | Label | Guidance |
|-------|-------|----------|
| 1 | Rare | Not expected in the system's life |
| 2 | Unlikely | Could occur, but improbable |
| 3 | Possible | Might occur sometime |
| 4 | Likely | Expected to occur in normal operation |
| 5 | Almost certain | Recurring / continuous exposure |

**Consequence (C)** — assess across relevant dimensions (safety, environmental,
financial, regulatory, reputational); use the worst credible outcome.

| Level | Label | Safety example |
|-------|-------|----------------|
| 1 | Negligible | No injury |
| 2 | Minor | First-aid injury |
| 3 | Moderate | Lost-time injury |
| 4 | Major | Serious / permanent injury |
| 5 | Catastrophic | Fatality / multiple fatalities |

**Risk score = L × C**

| Score | Band | Action |
|-------|------|--------|
| 1–4 | Low | Acceptable; monitor |
| 5–9 | Medium | Reduce as reasonably practicable |
| 10–16 | High | Mitigation required before proceeding |
| 17–25 | Extreme | Stop / do not proceed without senior sign-off |

## 3. ALARP

Where risk cannot be eliminated, demonstrate it is **As Low As Reasonably
Practicable**: weigh the residual risk against the cost/effort of further
reduction, and document the justification.

## 4. Deliverable

Use [`templates/risk-assessment-template.md`](../../templates/risk-assessment-template.md)
and maintain the live risk register in
[`templates/hazard-log.csv`](../../templates/hazard-log.csv).

## References

- ISO 31000:2018 — Risk management — Guidelines
- IEC 31010 — Risk assessment techniques
- ISO 12100 — Safety of machinery — Risk assessment and risk reduction
