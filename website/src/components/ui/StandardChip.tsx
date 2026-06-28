import { cn } from '@/lib/cn';

/** Monospaced pill used to surface a standard / regulation name. */
export function StandardChip({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-line-bright/70 bg-ink-850/80 px-2.5 py-1',
        'font-mono text-[11px] font-medium tracking-tight text-fog-300',
        className,
      )}
    >
      {label}
    </span>
  );
}
