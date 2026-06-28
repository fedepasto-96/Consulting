import { Check } from 'lucide-react';
import type { Service } from '@/data/services';
import { cn } from '@/lib/cn';
import { StandardChip } from './ui/StandardChip';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border border-line bg-ink-850/60 p-6',
        'transition-colors duration-300 hover:border-azure-500/60',
      )}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-bright bg-ink-900 text-azure-400 transition-colors group-hover:border-azure-500/60">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-fog-500">
          {service.eyebrow}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold tracking-tight text-fog-50">
        {service.name}
      </h3>
      <p className="mt-1.5 text-sm font-medium text-azure-300">{service.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-fog-300">{service.description}</p>

      <ul className="mt-5 space-y-2">
        {service.deliverables.map((d) => (
          <li key={d} className="flex items-start gap-2.5 text-sm text-fog-300">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-azure-400" />
            <span>{d}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
        {service.standards.map((s) => (
          <StandardChip key={s} label={s} />
        ))}
      </div>
    </div>
  );
}
