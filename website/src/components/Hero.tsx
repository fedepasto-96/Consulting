import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Container } from './ui/Container';
import { ButtonLink } from './ui/Button';
import { StandardChip } from './ui/StandardChip';

const heroStandards = ['ISO 31000', 'SAE ARP4761', 'IEC 62133', 'JARUS SORA'];

export function Hero() {
  return (
    <div id="top" className="relative overflow-hidden border-b border-line">
      {/* engineering grid + glow backdrop */}
      <div className="bg-grid mask-fade pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[55rem] -translate-x-1/2 rounded-full bg-azure-500/10 blur-3xl" />

      <Container className="relative py-24 sm:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-bright bg-ink-850/70 px-3.5 py-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-azure-400" />
            <span className="text-xs font-medium text-fog-300">
              Independent engineering consultancy · UAS safety &amp; risk
            </span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fog-50 sm:text-6xl">
            Make your drone platform
            <span className="text-azure-400"> demonstrably safe.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog-300">
            Aerisk delivers system safety, battery &amp; energy safety, and risk
            assessments for drone / UAS platforms — aviation-grade engineering
            that is traceable, auditable, and grounded in published standards.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#services">
              Explore services <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              Start a conversation
            </ButtonLink>
          </div>

          <div className="mt-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-fog-500">
              Methodology anchored in
            </p>
            <div className="flex flex-wrap gap-2">
              {heroStandards.map((s) => (
                <StandardChip key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
