# Safety Assessment Methodology

Safety assessment focuses on **system safety** — identifying failure conditions,
their effects and severity, and demonstrating that the system is acceptably safe
for its intended function. This complements the operational
[risk assessment](risk-assessment-methodology.md).

## When to use which technique

| Technique | Question it answers | Best for |
|-----------|---------------------|----------|
| **FHA** (Functional Hazard Assessment) | What functions can fail, and how bad is each failure? | Early design; setting safety objectives |
| **FMEA / FMECA** | For each component/failure mode, what is the effect? | Bottom-up, hardware/process reliability |
| **FTA** (Fault Tree Analysis) | What combinations of failures cause a top event? | Top-down, quantifying rare events |
| **Bowtie** | What threats lead to an event, and what barriers stop it? | Communicating prevention vs. mitigation barriers |
| **Safety case** | Is the overall argument that the system is safe sound? | Regulatory submissions, sign-off |

## 1. Functional Hazard Assessment (FHA)

1. List system functions.
2. For each, identify failure conditions (loss, malfunction, degraded).
3. Classify severity and assign a **Development Assurance Level / safety
   objective** (e.g. failure-condition classes: *No Effect → Minor → Major →
   Hazardous → Catastrophic*).
4. Feed objectives into design requirements and verification.

**Severity classification (aviation-style)**

| Class | Effect | Target qualitative probability |
|-------|--------|-------------------------------|
| Catastrophic | Multiple fatalities / loss of aircraft | Extremely improbable |
| Hazardous | Serious injury; large reduction in safety margins | Extremely remote |
| Major | Significant reduction in safety margins | Remote |
| Minor | Slight reduction in safety margins | Probable |
| No effect | No safety effect | — |

> Tailor classes/probabilities to the applicable standard (e.g. SORA OSOs for
> UAS in the Specific category; ARP4761 / AMC 25.1309 style for certified work).

## 2. FMEA

Maintain in tabular form (see template). Minimum columns: *Item · Function ·
Failure mode · Cause · Local effect · System effect · Detection · Severity ·
Occurrence · Detectability · RPN · Recommended action · Residual*.

## 3. Fault Tree Analysis

Define the **top event**, decompose with AND/OR gates to basic events, then
evaluate minimal cut sets and (where data exists) probability.

## 4. Bowtie

`Threats → [preventive barriers] → Top Event → [mitigative barriers] → Consequences`.
Identify barrier owners, degradation factors, and barrier controls.

## 5. Safety case / argument

Structure the argument explicitly (claim → argument → evidence; GSN optional).
Tie each claim to verification evidence and residual risk acceptance.

## Deliverable

Use [`templates/safety-assessment-template.md`](../../templates/safety-assessment-template.md).

## References

- SAE ARP4761 — Guidelines and methods for conducting the safety assessment process
- ARP4754 — Development of civil aircraft and systems
- IEC 60812 (FMEA), IEC 61025 (FTA)
- JARUS SORA — Annex E (OSOs), for UAS Specific category
