import React from "react";
import { ArrowRight, Play, Target, Users, Zap, ShieldCheck, Crown } from "lucide-react";
import imgo from "../assets/images/vfx2.jpeg";

const SERVICES = ["Short Form", "Long Form", "Motion & VFX", "Brand Content"];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="group flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1">
    <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">{value}</span>
    <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.14em] text-zinc-500 sm:text-[10px]">
      {label}
    </span>
  </div>
);

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseRed {
          0%,100% { box-shadow: 0 0 0 0 rgba(229,9,20,.45); }
          50% { box-shadow: 0 0 0 7px rgba(229,9,20,0); }
        }
        .animate-fade-in {
          animation: fadeSlideIn .8s cubic-bezier(.22,1,.36,1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay:.1s }
        .delay-200 { animation-delay:.2s }
        .delay-300 { animation-delay:.3s }
        .delay-400 { animation-delay:.4s }
        .delay-500 { animation-delay:.5s }
        .delay-600 { animation-delay:.6s }
        .pulse-red { animation:pulseRed 2.2s ease-in-out infinite; }
      `}</style>

      {/* Cinematic background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgo})` }}
      />

      {/* Black/red cinematic treatment */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.94)_0%,rgba(0,0,0,.78)_42%,rgba(0,0,0,.38)_70%,rgba(0,0,0,.68)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_28%_38%,rgba(229,9,20,.16),transparent_32%),radial-gradient(circle_at_76%_30%,rgba(229,9,20,.12),transparent_30%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.18)_0%,transparent_45%,rgba(0,0,0,.88)_100%)]"
      />

      {/* Agency navigation */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#home" className="group inline-flex items-center gap-3" aria-label="Frametic Studio home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-black backdrop-blur-xl">
            F<span className="text-red-500">.</span>
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
            Frametic<span className="text-red-500">Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-xs font-medium text-zinc-400 md:flex">
          <a className="transition-colors hover:text-white" href="#work">Work</a>
          <a className="transition-colors hover:text-white" href="#services">Services</a>
          <a className="transition-colors hover:text-white" href="#process">Process</a>
          <a className="transition-colors hover:text-white" href="#about">About</a>
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-[#E50914] px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(229,9,20,.18)] transition-all hover:bg-red-600 hover:shadow-[0_0_35px_rgba(229,9,20,.3)]"
        >
          Let's Talk
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-16 lg:pt-24">
        <div className="grid min-h-[calc(100vh-90px)] grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Main value proposition */}
          <div className="lg:col-span-7">
            <div className="animate-fade-in delay-100 mb-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-3.5 py-2 backdrop-blur-xl">
                <span className="pulse-red h-2 w-2 rounded-full bg-red-500" />
                <span className="font text-[9px] font-bold uppercase tracking-[.2em] text-zinc-300 sm:text-[10px]">
                  Video Editing · Motion · Brand Content
                </span>
              </div>
            </div>

            <h1 className="animate-fade-in delay-200 max-w-4xl text-5xl font-black leading-[.91] tracking-[-.045em] sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[6.5rem]">
              <span className="heading-font text-white">Visuals That</span>
              <br />
              <span className="heading-font text-white">
                Make Brands <span className="text-[#E50914]">Impossible</span>
              </span>
              <br />
              <span className="heading-font text-white">
                to <span className="text-[#E50914]">Ignore.</span>
              </span>
            </h1>

            <p className="animate-fade-in delay-300 mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              We turn raw footage into high-impact visual content that captures
              attention, builds trust, and gives brands a reason to be remembered.
            </p>

            <div className="animate-fade-in delay-400 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-all hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[0_15px_40px_rgba(255,255,255,.12)]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                <Play className="h-4 w-4 fill-current" />
                View Our Work
              </a>
            </div>

            <div className="animate-fade-in delay-500 mt-12 border-t border-white/10 pt-5">
              <p className="mb-4 font-mono text-[9px] uppercase tracking-[.22em] text-zinc-600">
                What we create
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {SERVICES.map((service) => (
                  <span key={service} className="text-xs font-semibold text-zinc-400 transition-colors hover:text-white">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Proof + service cards */}
          <div className="lg:col-span-5">
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-black/35 p-6 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-600/15 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-black tracking-tight text-white">150+</p>
                      <p className="text-xs text-zinc-500">Projects Delivered</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-red-400">
                    Studio
                  </span>
                </div>

                <div className="mb-7">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Client Satisfaction</span>
                    <span className="font-bold text-white">98%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-red-700 to-[#E50914]" />
                  </div>
                </div>

                <div className="mb-7 h-px w-full bg-white/10" />

                <div className="grid grid-cols-3 gap-3">
                  <StatItem value="48H" label="Turnaround" />
                  <StatItem value="15+" label="Brands" />
                  <StatItem value="100%" label="Focus" />
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Available
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                    <Crown className="h-3 w-3 text-red-400" />
                    Premium
                  </div>
                </div>
              </div>
            </div>

            <div
              id="services"
              className="animate-fade-in delay-600 relative mt-5 overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/30 p-6 backdrop-blur-xl"
            >
              <p className="mb-5 font-mono text-[9px] font-bold uppercase tracking-[.22em] text-zinc-500">
                Built for brands that need
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Scroll-Stopping Reels",
                  "YouTube & Long Form",
                  "Motion & VFX",
                  "Campaign Content",
                ].map((service) => (
                  <div
                    key={service}
                    className="rounded-xl border border-white/10 bg-white/[.035] px-3 py-3 text-xs font-semibold text-zinc-300 transition-colors hover:border-red-500/30 hover:bg-red-500/5 hover:text-white"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <p className="animate-fade-in delay-600 mt-5 flex items-center gap-2 text-xs leading-5 text-zinc-600">
              <Users className="h-3.5 w-3.5 text-red-500" />
              A focused creative partner for creators, businesses, agencies, and marketing teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
