# SORA — Specific Operations Risk Assessment (UAS)

**SORA** is the JARUS/EASA methodology for assessing and mitigating the risk of
a drone operation in the **Specific** category (i.e. operations that are riskier
than *Open* but do not require full *Certified*-category type certification).
It is the backbone of most of our drone operational risk work.

> Confirm the applicable SORA version per engagement (e.g. JARUS SORA 2.0 / 2.5,
> or the version referenced by the relevant EASA AMC). Record it in the ConOps.

## The SORA flow (high level)

```
ConOps ─► Ground Risk Class (GRC) ─► (mitigations) ─► Final GRC ┐
        └ Air Risk Class (ARC) ─► (strategic/tactical) ─► Residual ARC ┘
                                                          │
                                                          ▼
                                                  SAIL (I–VI)
                                                          │
                                                          ▼
                              Operational Safety Objectives (OSOs)
                              + adjacent area / containment requirements
```

## 1. ConOps

The **Concept of Operations** describes who, what, where, how, and under what
limits the operation runs. Everything downstream depends on it. Use
[`templates/conops-template.md`](../../templates/conops-template.md).

## 2. Ground Risk Class (GRC)

Intrinsic risk to people **on the ground**, driven by UAS dimension/kinetic
energy and the population density of the overflown area (controlled ground area,
sparsely populated, populated, gathering of people). Mitigations (e.g. reducing
the area at risk, ERP, ground impact reduction such as parachutes) can lower the
GRC.

## 3. Air Risk Class (ARC)

Likelihood of encountering a **manned aircraft** in the operational volume
(ARC-a … ARC-d). Reduced via **strategic** mitigations (airspace, time, geo)
and **tactical** mitigations (detect-and-avoid, traffic awareness).

## 4. SAIL

The **Specific Assurance and Integrity Level** (I–VI) is derived from the final
GRC and residual ARC. It sets *how robustly* the operation must meet its safety
objectives.

## 5. OSOs

The **Operational Safety Objectives** (Annex E) are the safety requirements to
satisfy at a robustness (Low/Medium/High) determined by the SAIL — covering the
operator, the UAS, crew training, and procedures.

## 6. Containment

Demonstrate that the operation stays within the operational volume and that the
adjacent area / ground risk buffer is adequate.

## Our deliverable for a SORA engagement

1. ConOps (`templates/conops-template.md`)
2. GRC & ARC determination with mitigation evidence
3. SAIL derivation
4. OSO compliance matrix with robustness evidence
5. Containment & buffer justification
6. Summary application package for the authority

> The `tools/` area contains a starter helper for GRC/ARC/SAIL bookkeeping —
> see [`tools/README.md`](../../tools/README.md). It is an aid, **not** a
> substitute for the official SORA tables; always validate against the
> applicable published methodology.

## References

- JARUS — SORA main body and annexes (A–F)
- EASA — Easy Access Rules for UAS (Reg. (EU) 2019/947 & 2019/945); relevant AMC/GM
