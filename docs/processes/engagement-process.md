# Engagement Process

The standard lifecycle for a consulting engagement, from first contact to
close-out. Each stage lists its gate (what must be true to move on) and the
artifacts it produces.

## Stages

### 0. Lead / inquiry
- Capture the request, the asset/operation, and the desired outcome.
- **Gate:** the ask is something we can credibly deliver.

### 1. Scoping & proposal
- Clarify objectives, boundaries, applicable standards, deliverables, timeline.
- Produce a proposal from [`templates/proposal-template.md`](../../templates/proposal-template.md).
- **Gate:** signed proposal / agreement + confidentiality terms.
- **Artifacts:** proposal, NDA (if separate).

### 2. Kick-off & data gathering
- Create the engagement folder: copy `projects/_TEMPLATE/` to
  `projects/<YYYY>-<client>-<short-name>/`.
- Collect inputs: ConOps, drawings, ops manuals, prior assessments, data.
- Record assumptions and information requests.
- **Gate:** sufficient information to begin analysis.

### 3. Assessment
- Run the applicable method ([risk](../methodology/risk-assessment-methodology.md),
  [safety](../methodology/safety-assessment-methodology.md), or
  [SORA](../methodology/sora.md)).
- Maintain the hazard log / risk register as you go.
- **Gate:** analysis complete; residual risk and mitigations defined.

### 4. Reporting
- Draft the deliverable from [`templates/report-template.md`](../../templates/report-template.md).
- **Internal review** (QA, below) before issue.
- **Gate:** report passes internal review.

### 5. Delivery & review with client
- Issue the report; walk the client through findings.
- Tag the delivered version in git (e.g. `v1.0-<client>-report`).
- **Gate:** client acceptance / agreed actions.

### 6. Close-out
- Archive the engagement folder; capture lessons learned.
- Note any follow-on / re-assessment triggers.

## Quality assurance

- Every deliverable gets a second-person review before issue.
- Track findings/changes in the document's revision table and git history.
- Keep methodology choices and assumptions explicit and traceable.

## Roles (tailor to team size)

| Role | Responsibility |
|------|----------------|
| Engagement lead | Scope, client relationship, sign-off |
| Assessor | Performs the analysis, drafts deliverables |
| Reviewer | Independent QA before issue |
