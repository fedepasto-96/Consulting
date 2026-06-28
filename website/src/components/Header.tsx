import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './ui/Container';
import { Wordmark } from './Wordmark';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-300',
        scrolled
          ? 'border-line bg-ink-900/85 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Aerisk — home">
          <Wordmark className="h-7" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fog-300 transition-colors hover:text-fog-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-lg bg-azure-500 px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-azure-400"
        >
          Get in touch
        </a>
      </Container>
    </header>
  );
}
