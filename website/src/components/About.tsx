import { Section, SectionHeader } from './ui/Section';

// NOTE: Principal names and bios are placeholders — replace with real details.
const principals = [
  {
    role: 'Principal Engineer',
    name: '[ Name ]',
    bio: '[ Short bio — background in UAS system safety, failure analysis, and certification. Replace with real details. ]',
  },
  {
    role: 'Principal Engineer',
    name: '[ Name ]',
    bio: '[ Short bio — background in battery/energy safety and risk engineering. Replace with real details. ]',
  },
];

export function About() {
  return (
    <Section id="about" className="border-y border-line bg-ink-950/40">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <SectionHeader eyebrow="About" title="A small firm, built around the work" />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-fog-300">
            <p>
              Aerisk is an independent engineering consultancy focused on the safety
              and risk of drone / UAS platforms. We take on system safety, battery
              and energy safety, and risk assessments — and we apply the same
              aviation-grade methodology whether the subject is an airframe, a
              battery pack, or an operation.
            </p>
            <p>
              We deliberately keep engagements senior and hands-on. Every assessment
              is independently reviewed, traceable to its evidence, and written to
              stand up in front of stakeholders and regulators.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {principals.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-line bg-ink-850/60 p-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-azure-400">
                {p.role}
              </span>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-fog-50">
                {p.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog-400">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
