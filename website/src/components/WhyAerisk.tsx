import { Boxes, FileStack, GitBranch, Plane } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';

interface Point {
  title: string;
  body: string;
  icon: LucideIcon;
}

const points: Point[] = [
  {
    title: 'Aviation-grade rigor on UAS',
    body: 'System safety methods drawn from civil-aircraft practice (ARP4761/4754A) — applied to drones, not generic software risk retrofitted to hardware.',
    icon: Plane,
  },
  {
    title: 'Standards-based, not proprietary',
    body: 'Our methods are published international standards — ISO 31000, SAE ARP, IEC. What we add is expertise in applying them well.',
    icon: FileStack,
  },
  {
    title: 'Traceable & version-controlled',
    body: 'Hazard logs and registers are maintained under version control, with assumptions recorded — so any conclusion can be traced to its evidence.',
    icon: GitBranch,
  },
  {
    title: 'Deep platform & battery focus',
    body: 'Hands-on understanding of drone systems and their energy storage — the highest-consequence failure modes get the attention they deserve.',
    icon: Boxes,
  },
];

export function WhyAerisk() {
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Why Aerisk"
        title="Engineering judgment you can put in front of a regulator"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {points.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="flex gap-4 rounded-2xl border border-line bg-ink-850/50 p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-bright bg-ink-900 text-azure-400">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-fog-50">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fog-300">{p.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
