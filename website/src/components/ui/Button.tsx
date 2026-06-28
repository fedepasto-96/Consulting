import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-azure-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900';

const variants: Record<Variant, string> = {
  primary: 'bg-azure-500 text-ink-950 hover:bg-azure-400',
  ghost: 'border border-line-bright text-fog-100 hover:border-azure-400 hover:text-azure-300',
};

export function ButtonLink({
  href,
  variant = 'primary',
  className,
  children,
  ...props
}: { href: string; variant?: Variant } & ComponentPropsWithoutRef<'a'>) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
