import { ClipboardCheck, FileSearch, Microscope, Send } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';

interface Step {
  n: string;
  title: string;
  body: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    n: '01',
    title: 'Scope',
    body: 'We clarify the system, boundaries, applicable standards, and what "acceptably safe" means for your case — then agree the method and deliverables.',
    icon: FileSearch,
  },
  {
    n: '02',
    title: 'Assess',
    body: 'We run the analysis — FHA, FMEA, FTA, bowtie, or an ISO 31000 risk register — maintaining a live, traceable hazard log as we go.',
    icon: Microscope,
  },
  {
    n: '03',
    title: 'Independent review',
    body: 'Every deliverable is checked by a second engineer before it leaves our desk. Assumptions are logged; conclusions are defensible.',
    icon: ClipboardCheck,
  },
  {
    n: '04',
    title: 'Deliver & walk-through',
    body: 'You get a clear, auditable report and a walk-through of the findings, residual risk, and recommended actions — ready for your stakeholders.',
    icon: Send,
  },
];

export function Approach() {
  return (
    <Section id="approach" className="border-y border-line bg-ink-950/40">
      <SectionHeader
        eyebrow="How we work"
        title="A traceable path from question to evidence"
        intro="A consistent engagement structure keeps every assessment auditable — calibrated to your need, not a one-size-fits-all template."
      />

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <li
              key={step.n}
              className="relative rounded-2xl border border-line bg-ink-850/60 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-bright bg-ink-900 text-azure-400">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-2xl font-medium text-line-bright">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-fog-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog-300">{step.body}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
