import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/services';
import { Section, SectionHeader } from './ui/Section';
import { ServiceCard } from './ServiceCard';
import { StandardChip } from './ui/StandardChip';

export function Services() {
  const primary = services.filter((s) => s.tier === 'primary');
  const secondary = services.filter((s) => s.tier === 'secondary');

  return (
    <Section id="services">
      <SectionHeader
        eyebrow="What we do"
        title="Engineering safety & risk, end to end"
        intro="Three core services built on aviation-grade methodology — applied to drone platforms, their power systems, and the programs around them."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {primary.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {secondary.map((service) => {
        const Icon = service.icon;
        return (
          <div
            key={service.id}
            className="mt-6 flex flex-col gap-5 rounded-2xl border border-dashed border-line-bright bg-ink-850/40 p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-bright bg-ink-900 text-fog-400">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-fog-50">
                    {service.name}
                  </h3>
                  <span className="rounded-full bg-azure-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-azure-300">
                    Expanding
                  </span>
                </div>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-fog-300">
                  {service.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.standards.map((s) => (
                    <StandardChip key={s} label={s} />
                  ))}
                </div>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-azure-300 hover:text-azure-400"
            >
              Ask about this <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        );
      })}
    </Section>
  );
}
