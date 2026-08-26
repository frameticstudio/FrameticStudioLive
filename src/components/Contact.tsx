import * as React from "react";
import { Mail, MessageSquare, Send, Copy, Check, ArrowUpRight } from "lucide-react";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_CONTACTS,
} from "./contactDetails";

export default function Contact() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-10"
    >
      {/* Cinematic background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/4 h-[520px] w-[520px] rounded-full bg-[#E50914]/[0.07] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-10 h-[500px] w-[500px] rounded-full bg-[#E50914]/[0.055] blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[650px] -translate-x-1/2 rounded-full bg-red-950/20 blur-[170px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">

          {/* =========================================
              LEFT — CONTACT INFO
          ========================================== */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#E50914]" />

              <span className="technical-font text-[10px] font-bold uppercase tracking-[0.25em] text-[#E50914]">
                Get In Touch
              </span>
            </div>

            <h2 className="heading-font max-w-2xl text-5xl leading-[0.88] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Let's Cut to
              <br />
              the{" "}
              <span className="text-[#E50914]">Chase.</span>
            </h2>

            <p className="body-font mt-7 max-w-lg text-sm font-medium leading-7 text-zinc-500 sm:text-base">
              Ready to make something unforgettable? Tell us what you're
              building, what you need, and where you want the content to go.
            </p>

            {/* Contact links */}
            <div className="mt-10 space-y-3">
              <ContactLink
                icon={<Mail size={18} />}
                label="Direct Email"
                value={EMAIL}
                onClick={copyEmail}
                action={copied ? <Check size={16} /> : <Copy size={16} />}
              />

              <div className="grid gap-3 sm:grid-cols-2">
                {WHATSAPP_CONTACTS.map((contact) => (
                  <ContactLink
                    key={contact.phone}
                    icon={<MessageSquare size={18} />}
                    label={contact.label}
                    value={contact.value}
                    href={`https://wa.me/${contact.phone}`}
                  />
                ))}

                <ContactLink
                  icon={<ArrowUpRight size={17} />}
                  label="Instagram"
                  value={INSTAGRAM_HANDLE}
                  href={INSTAGRAM_URL}
                />
              </div>
            </div>

            {/* Availability */}
            <div className="mt-10 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E50914]" />
              </span>

              <span className="technical-font text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Currently accepting selected projects
              </span>
            </div>

            <p className="technical-font mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-700">
              Response time · 12–24 hours
            </p>
          </div>

          {/* =========================================
              RIGHT — INQUIRY FORM
          ========================================== */}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const message = [
                "Hello FrameticStudio, I would like to discuss a project.",
                `Name: ${formData.get("name") ?? ""}`,
                `Email: ${formData.get("email") ?? ""}`,
                `Service: ${formData.get("service") ?? ""}`,
                `Budget: ${formData.get("budget") || "Not specified"}`,
                `Project details: ${formData.get("details") ?? ""}`,
              ].join("\n");

              window.open(
                `https://wa.me/${WHATSAPP_CONTACTS[0].phone}?text=${encodeURIComponent(message)}`,
                "_blank",
                "noopener,noreferrer",
              );
            }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-black/40 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8 lg:p-9"
          >
            {/* Red glow inside form */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#E50914]/[0.08] blur-[100px]"
            />

            <div className="relative z-10">
              <div className="mb-8 flex items-start justify-between gap-5">
                <div>
                  <p className="technical-font text-[9px] font-bold uppercase tracking-[0.22em] text-[#E50914]">
                    Project Inquiry
                  </p>

                  <h3 className="heading-font mt-3 text-3xl leading-none text-white sm:text-4xl">
                    Tell us about it.
                  </h3>
                </div>

                <span className="technical-font rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-600">
                  06 / Contact
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Name *">
                  <input
                    required
                    name="name"
                    placeholder="Your name"
                    className="field"
                  />
                </Field>

                <Field label="Your Email *">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="client@company.com"
                    className="field"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Select Service Area">
                  <select name="service" className="field">
                    <option>Short Form Reel</option>
                    <option>YouTube Video</option>
                    <option>Video Compilation</option>
                    <option>Motion Graphics</option>
                    <option>Brand Design</option>
                    <option>Other</option>
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Approximate Budget (Optional)">
                  <input
                    name="budget"
                    placeholder="e.g. ₹5,000 – ₹15,000"
                    className="field"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Project Details *">
                  <textarea
                    required
                    name="details"
                    rows={5}
                    placeholder="Tell us about your content, timeline, references, and editing needs..."
                    className="field resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="group mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#E50914] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_35px_rgba(229,9,20,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-[0_18px_45px_rgba(229,9,20,0.3)]"
              >
                <Send size={15} />

                Send Project Inquiry

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>

              <p className="body-font mt-4 text-center text-[10px] leading-5 text-zinc-700">
                Your project details stay confidential.
              </p>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Elsie:wght@400;900&family=Quicksand:wght@300..700&family=Roboto+Condensed:wght@100..900&display=swap');

        .heading-font {
          font-family: "Elsie", serif;
          font-weight: 400;
        }

        .body-font {
          font-family: "Quicksand", sans-serif;
        }

        .technical-font {
          font-family: "Roboto Condensed", sans-serif;
        }

        .field {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 0.85rem;
          background: rgba(255, 255, 255, 0.035);
          padding: 0.82rem 1rem;
          font-family: "Quicksand", sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: #ffffff;
          outline: none;
          transition:
            border-color 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .field::placeholder {
          color: rgb(82 82 91);
        }

        .field:hover {
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.045);
        }

        .field:focus {
          border-color: rgba(229, 9, 20, 0.65);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.08);
        }

        select.field {
          color-scheme: dark;
        }

        select.field option {
          background: #0a0a0a;
          color: #ffffff;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="technical-font mb-2 block text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-600">
        {label}
      </span>

      {children}
    </label>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
  onClick,
  action,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  onClick?: () => void;
  action?: React.ReactNode;
}) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#E50914] transition-colors group-hover:border-[#E50914]/25 group-hover:bg-[#E50914]/10">
        {icon}
      </span>

      <span className="min-w-0">
        <span className="technical-font block text-[8px] uppercase tracking-[0.18em] text-zinc-600">
          {label}
        </span>

        <span className="body-font mt-1 block truncate text-sm font-bold text-zinc-300 transition-colors group-hover:text-white">
          {value}
        </span>
      </span>

      {action && (
        <span className="ml-auto text-zinc-600 transition-colors group-hover:text-white">
          {action}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E50914]/25 hover:bg-white/[0.045] hover:shadow-[0_12px_35px_rgba(0,0,0,0.3)]"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E50914]/25 hover:bg-white/[0.045] hover:shadow-[0_12px_35px_rgba(0,0,0,0.3)]"
    >
      {content}
    </button>
  );
}
