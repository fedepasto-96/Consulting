import { cn } from '@/lib/cn';

/** Aerisk text wordmark with the delta glyph (visual logo deferred, per BRAND.md). */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg viewBox="0 0 64 64" className="h-[1.15em] w-auto" aria-hidden="true">
        <path d="M32 12 L54 52 H43.5 L32 31 L20.5 52 H10 Z" fill="currentColor" className="text-azure-400" />
        <rect x="23" y="41.5" width="18" height="4.4" rx="2.2" fill="currentColor" className="text-ink-900" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight text-fog-50">
        Aerisk
      </span>
    </span>
  );
}
