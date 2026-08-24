import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import { INSTAGRAM_URL, WHATSAPP_CONTACTS } from "./contactDetails";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050505] px-5 py-10 text-white sm:px-8 md:px-10 lg:py-12">

      {/* ================= BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#E50914]/[0.045] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-red-950/20 blur-[120px]"
      />

      {/* Subtle grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= MAIN FOOTER ================= */}

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          {/* BRAND */}

          <div>
            <a
              href="#"
              aria-label="Home"
              className="heading-font group inline-flex items-center text-2xl tracking-[-0.03em] text-white"
            >
              FrameticStudio
              <span className="ml-1 text-[#E50914] transition-all duration-300 group-hover:text-red-500">
                .
              </span>
            </a>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-px w-5 bg-[#E50914]" />

              <p className="technical-font text-[8px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                Cinematic Editing · Graphic Brand Design · Bhopal, MP
              </p>
            </div>
          </div>

          {/* NAVIGATION */}

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {["projects", "Pricing", "Contact"].map(
              (item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group technical-font flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-500 transition-colors hover:text-white"
                >
                  <span className="text-[7px] text-zinc-700 transition-colors group-hover:text-[#E50914]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item}
                </a>
              )
            )}
          </nav>

          {/* SOCIAL / CONTACT */}

          <div className="flex gap-2.5">

            {/* <Social
              href="mailto:frameticstudio.media@gmail.com"
              label="Email"
            >
              <Mail size={16} />
            </Social>

            <Social
              href="#contact"
              label="Contact"
            >
              <MessageSquare size={16} />
            </Social> */}
            <Social
              href={`https://wa.me/${WHATSAPP_CONTACTS[1].phone}`}
              label="WhatsApp"
            >
              <IconBrandWhatsapp size={16} />
            </Social>
            <Social
            href={INSTAGRAM_URL}
            label="Instagram"
            >
              <IconBrandInstagram size={16} />
            </Social>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}

        <div className="my-8 flex items-center gap-4">

          <span className="h-px flex-1 bg-white/[0.07]" />

          <span className="technical-font text-[7px] font-bold uppercase tracking-[0.25em] text-zinc-700">
            FRAMETIC / STUDIO
          </span>

          <span className="h-px flex-1 bg-white/[0.07]" />

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <span className="technical-font text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-700">
            © {new Date().getFullYear()} FRAMETICSTUDIO. All rights reserved.
          </span>

          <span className="group inline-flex items-center gap-2 technical-font text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-700">
            Crafted with React

            <ArrowUpRight
              size={11}
              className="text-[#E50914] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>

        </div>

      </div>

      {/* ================= FONT SYSTEM ================= */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Elsie:wght@400;900&family=Quicksand:wght@300..700&family=Roboto+Condensed:wght@100..900&display=swap');

        .heading-font {
          font-family: "Elsie", serif;
          font-weight: 400;
        }

        .technical-font {
          font-family: "Roboto Condensed", sans-serif;
        }
      `}</style>

    </footer>
  );
}

/* =================================================
   SOCIAL BUTTON
================================================= */

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="
        group
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        text-zinc-500
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#E50914]/35
        hover:bg-[#E50914]/10
        hover:text-[#E50914]
        hover:shadow-[0_10px_30px_rgba(229,9,20,0.12)]
      "
    >
      {children}
    </a>
  );
}