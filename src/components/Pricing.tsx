import * as React from "react";
import {
  Check,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    label: "For creators",
    description:
      "For creators who need sharp, consistent short-form content.",
    price: "₹4,999",
    suffix: "/ project",
    features: [
      "Up to 4 short-form videos",
      "Professional cuts & pacing",
      "Captions & basic motion",
      "Color correction",
      "1 revision round",
      "3–4 day turnaround",
    ],
  },
  {
    name: "Studio",
    label: "Most Popular",
    description:
      "A complete editing system for brands and creators publishing consistently.",
    price: "₹14,999",
    suffix: "/ month",
    features: [
      "12 short-form videos",
      "Advanced motion graphics",
      "Custom captions & styling",
      "Color grading",
      "Sound design & mixing",
      "2 revision rounds",
      "Priority turnaround",
      "Dedicated creative workflow",
    ],
    featured: true,
  },
  {
    name: "Custom",
    label: "For brands",
    description:
      "For larger campaigns, long-form content, and ongoing creative production.",
    price: "Let's Talk",
    suffix: "",
    features: [
      "Custom video volume",
      "Long-form editing",
      "Brand-focused visual system",
      "Advanced motion graphics",
      "Campaign content",
      "Dedicated workflow",
      "Flexible revisions",
      "Priority production",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-10"
    >
      {/* =================================================
          CINEMATIC BACKGROUND
      ================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-1/4 h-[550px] w-[550px] rounded-full bg-[#E50914]/[0.055] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-[#E50914]/[0.07] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-red-950/20 blur-[170px]"
      />

      {/* Cinematic grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.5)_100%)]"
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#E50914]" />

              <span className="technical-font text-[9px] font-bold uppercase tracking-[0.28em] text-[#E50914]">
                Investment
              </span>
            </div>

            <h2 className="heading-font text-5xl leading-[0.88] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              Choose Your
              <br />
              <span className="text-[#E50914]">
                Level.
              </span>
            </h2>

            <p className="body-font mt-7 max-w-2xl text-sm font-medium leading-7 text-zinc-500 sm:text-base">
              Flexible editing packages built around your content volume,
              creative direction, and publishing goals.
            </p>

          </div>

          {/* Right meta */}

          <div className="hidden text-right md:block">

            <span className="technical-font text-[9px] uppercase tracking-[0.22em] text-zinc-700">
              04 / Pricing
            </span>

            <div className="mt-3 flex items-center justify-end gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E50914]" />

              <span className="technical-font text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                Creative Production
              </span>
            </div>

          </div>

        </div>

        {/* =================================================
            PRICING GRID
        ================================================= */}

        <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">

          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
            />
          ))}

        </div>

        {/* =================================================
            CUSTOM NOTE
        ================================================= */}

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:p-7">

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E50914]/20 bg-[#E50914]/[0.07] text-[#E50914]">
              <MessageCircle size={17} />
            </div>

            <div>
              <p className="technical-font text-[8px] font-bold uppercase tracking-[0.2em] text-[#E50914]">
                Need something different?
              </p>

              <p className="body-font mt-1 text-xs font-medium text-zinc-500">
                Every project can be tailored around your workflow.
              </p>
            </div>

          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.17em] text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E50914]/40 hover:bg-[#E50914]/10 hover:text-white"
          >
            Discuss Your Project

            <ArrowUpRight
              size={14}
              className="text-[#E50914] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

        </div>

      </div>

      {/* =================================================
          FONT SYSTEM
      ================================================= */}

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
      `}</style>
    </section>
  );
}

/* =================================================
   PRICING CARD
================================================= */

function PricingCard({
  plan,
  index,
}: {
  plan: {
    name: string;
    label: string;
    description: string;
    price: string;
    suffix: string;
    features: string[];
    featured?: boolean;
  };
  index: number;
}) {
  return (
    <div
      className={`
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[1.5rem]
        border
        transition-all
        duration-500

        ${
          plan.featured
            ? `
              border-[#E50914]/35
              bg-[#0B0B0B]
              shadow-[0_25px_90px_rgba(229,9,20,0.10)]
              lg:-translate-y-3
            `
            : `
              border-white/[0.08]
              bg-white/[0.025]
              hover:-translate-y-2
              hover:border-white/[0.15]
              hover:bg-white/[0.035]
            `
        }
      `}
    >

      {/* Featured glow */}

      {plan.featured && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E50914]/[0.12] blur-[90px]"
          />

          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E50914] to-transparent" />
        </>
      )}

      {/* =================================================
          TOP
      ================================================= */}

      <div className="relative p-6 sm:p-7">

        <div className="flex items-start justify-between gap-4">

          <div>

            <span
              className={`
                technical-font
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                ${
                  plan.featured
                    ? "text-[#E50914]"
                    : "text-zinc-600"
                }
              `}
            >
              {plan.label}
            </span>

            <h3 className="heading-font mt-3 text-3xl leading-none text-white sm:text-4xl">
              {plan.name}
            </h3>

          </div>

          <span className="technical-font text-[8px] font-bold tracking-[0.2em] text-zinc-700">
            {String(index + 1).padStart(2, "0")}
          </span>

        </div>

        <p className="body-font mt-5 min-h-[48px] text-xs font-medium leading-5 text-zinc-500">
          {plan.description}
        </p>

        {/* Price */}

        <div className="mt-7 flex items-end gap-2">

          <span
            className={`
              heading-font
              leading-none
              ${
                plan.price === "Let's Talk"
                  ? "text-3xl"
                  : "text-4xl sm:text-5xl"
              }
              text-white
            `}
          >
            {plan.price}
          </span>

          {plan.suffix && (
            <span className="technical-font mb-1 text-[8px] font-bold uppercase tracking-[0.15em] text-zinc-600">
              {plan.suffix}
            </span>
          )}

        </div>

      </div>

      {/* Divider */}

      <div className="mx-6 h-px bg-white/[0.07] sm:mx-7" />

      {/* =================================================
          FEATURES
      ================================================= */}

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">

        <p className="technical-font mb-5 text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-700">
          What's Included
        </p>

        <ul className="space-y-3.5">

          {plan.features.map((feature) => (
            <li
              key={feature}
              className="body-font flex items-start gap-3 text-xs font-medium text-zinc-400"
            >
              <span
                className={`
                  mt-0.5
                  flex
                  h-4
                  w-4
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  ${
                    plan.featured
                      ? "bg-[#E50914]/10 text-[#E50914]"
                      : "bg-white/[0.05] text-zinc-500"
                  }
                `}
              >
                <Check size={10} strokeWidth={2.5} />
              </span>

              {feature}
            </li>
          ))}

        </ul>

        {/* CTA */}

        <a
          href="#contact"
          className={`
            group/button
            mt-8
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            px-5
            py-3.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]
            transition-all
            duration-300

            ${
              plan.featured
                ? `
                  bg-[#E50914]
                  text-white
                  shadow-[0_12px_35px_rgba(229,9,20,0.2)]
                  hover:-translate-y-0.5
                  hover:bg-red-600
                  hover:shadow-[0_18px_45px_rgba(229,9,20,0.3)]
                `
                : `
                  border
                  border-white/10
                  bg-white/[0.035]
                  text-zinc-400
                  hover:-translate-y-0.5
                  hover:border-[#E50914]/30
                  hover:bg-[#E50914]/10
                  hover:text-white
                `
            }
          `}
        >
          {plan.featured ? "Start With Studio" : "Discuss Project"}

          <ArrowUpRight
            size={14}
            className="text-[#E50914] transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
          />
        </a>

      </div>

      {/* Featured badge */}

      {plan.featured && (
        <div className="absolute right-5 top-5">

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E50914]/25 bg-[#E50914]/10 px-2.5 py-1.5">
            <Sparkles
              size={10}
              className="text-[#E50914]"
            />

            <span className="technical-font text-[7px] font-bold uppercase tracking-[0.16em] text-[#E50914]">
              Recommended
            </span>
          </span>

        </div>
      )}

    </div>
  );
}