import { Container } from './ui/Container';
import { Wordmark } from './Wordmark';

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Wordmark className="h-6" />
          <p className="mt-3 max-w-sm text-sm text-fog-400">
            Engineering risk &amp; safety consulting for drones / UAS.
          </p>
        </div>
        <div className="text-sm text-fog-500 sm:text-right">
          <a
            href="mailto:contact@aerisk.aero"
            className="text-fog-300 hover:text-azure-300"
          >
            contact@aerisk.aero
          </a>
          <p className="mt-2">
            © {new Date().getFullYear()} Aerisk · Confidential &amp; proprietary
          </p>
        </div>
      </Container>
    </footer>
  );
}
