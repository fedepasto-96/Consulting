import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';

// Placeholder contact address — update once the domain mailbox exists.
const CONTACT_EMAIL = 'contact@aerisk.aero';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // For v1 this composes a mailto. A Cloudflare Pages Function can replace it later.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || 'website'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const field =
    'w-full rounded-lg border border-line bg-ink-900 px-4 py-2.5 text-sm text-fog-100 placeholder:text-fog-500 focus:border-azure-500 focus:outline-none';

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Tell us what you're trying to make safe"
            intro="Share the platform, system, or operation and the outcome you need. We'll come back with how we'd scope it."
          />
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-flex items-center gap-2.5 text-sm font-medium text-azure-300 hover:text-azure-400"
          >
            <Mail className="h-4 w-4" />
            {CONTACT_EMAIL}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-line bg-ink-850/60 p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-fog-400">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-fog-400">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-medium text-fog-400">
              What can we help with?
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${field} resize-none`}
              placeholder="Briefly describe the platform / system / operation and the outcome you need."
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-azure-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-azure-400 sm:w-auto"
          >
            Send enquiry <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}
