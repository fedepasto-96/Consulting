import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

export function SectionHeader({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow && (
        <div className="mb-3 flex items-center gap-2.5">
          <span className="h-px w-7 bg-azure-500" />
          <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-azure-400">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fog-50 sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-fog-300">{intro}</p>}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn('py-20 sm:py-28', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
