import React from "react";

import {
  ArrowRight,
  Target,
  Crown, 
} from "lucide-react";
import imgo from "../assets/images/vfx2.jpeg"
import AE from "../assets/images/After-Effects-Logo.webp"
import DR from "../assets/images/davinci-resolve-logo.webp"
import PP from "../assets/images/adobe-premiere-pro-logo.webp"
// import { color } from "motion";
// import { linearGradient } from "motion/react-client";
// --- MOCK BRANDS ---
// Replaced PNGs with Lucide icons to simulate tech logos
const EDITINGSOFTWARE = [
  // { name: "Capcut", icon: Hexagon },
  { name: "Adobe Premier Pro", icon: PP },
  { name: "After Effect", icon: AE },
  { name: "Davinci", icon: DR },
  // { name: "Ruby", icon: Gem },
  // { name: "Chipset", icon: Cpu },
];

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">{label}</span>
  </div>
);

// --- MAIN COMPONENT ---
export default function HeroSection() {
  return (
    <div className="relative w-full bg-zinc-950 text-white overflow-hidden  ">
      {/* 
        SCOPED ANIMATIONS 
      */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite; /* Slower for readability */
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background Image with Gradient Mask */}

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

      <div
        className="absolute inset-0 z-0 bg bg-center opacity-40  "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-25 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start ">

          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">

            <div className="animate-fade-in delay-100 overflow-hidden max-w-xs ">
              <div className="inline-flex max-w-full items-center rounded-full border border-white/15 bg-black/40 shadow-[0_0_30px_rgba(229,9,20,0.08)] backdrop-blur-xl">

                <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap py-2 h-7">

                  {[
                    "Motion Graphics",
                    "Cinematic Editing",
                    "Brand Films",
                    "VFX",
                    "Color Grading",
                    "Sound Design",
                    "Short Form",
                    "Long Form",
                  ].map((service) => (
                    <React.Fragment key={service}>
                      <span className="px-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-xs">
                        {service}
                      </span>

                      <span className="text-[#E50914]">
                        ◆
                      </span>
                    </React.Fragment>
                  ))}

                  {[
                    "Motion Graphics",
                    "Cinematic Editing",
                    "Brand Films",
                    "VFX",
                    "Color Grading",
                    "Sound Design",
                    "Short Form",
                    "Long Form",
                  ].map((service) => (
                    <React.Fragment key={`loop-${service}`}>
                      <span className="px-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-xs">
                        {service}
                      </span>

                      <span className="text-[#E50914]">
                        ◆
                      </span>
                    </React.Fragment>
                  ))}

                </div>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="animate-fade-in delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9] "
              style={{
                maskImage:
                  "linear-gradient(180deg, black 0%, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 90%, transparent 100%)",
                // marginTop:"-20px"
              }}
            >
              <span
                className="heading-font"
                style={{ color: "#FFFFFF" }}
              >
                FrameticStudio
              </span>
              <br />
              <span className="heading-font" style={{ color: "#FFFFFF" }}>
                Elevating{" "}
                <span
                  style={{
                    color: "#E50914",
                    textShadow: "0 0 25px rgba(229, 9, 20, 0.18)",
                  }}
                >
                  Brands.
                </span>
              <br />
              <span
                className="heading-font"
                style={{ color: "#FFFFFF" }}
              >
                Editing <span style={{
                    color: "#E50914",
                    textShadow: "0 0 25px rgba(229, 9, 20, 0.18)",
                  }}>Videos.</span>
              </span>
              <br />

              
                {/* <br />

                Telling{" "}
                <span
                  style={{
                    color: "#E50914",
                    textShadow: "0 0 25px rgba(229, 9, 20, 0.18)",
                  }}
                >
                  Stories. */}
                {/* </span> */}
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in delay-300 max-w-xl text-lg text-zinc-400 leading-relaxed">
              We turn raw footage into powerful visual stories that capture attention, build trust, and drive real results for creators, businesses, and agencies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

            <a href="#projects">
              <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4" >
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]">
                View Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            </a>
            {/* <a href="#projects">
              <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4" >
              <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20">
                <Play className="w-4 h-4 fill-current" />
                Watch Showreel
              </button>
            </div>
            </a> */}
          </div>
            </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-6 lg:pt-9">

            {/* Stats Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-[2px] shadow-2xl">
              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">150+</div>
                    <div className="text-sm text-zinc-400">Projects Delivered</div>
                  </div>
                </div>

                {/* Progress Bar Section */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Client Satisfaction</span>
                    <span className=" font-medium"
                    >98%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white">
                    <div className="h-full w-[98%] rounded-full"
                      style={
                        {
                          background: "linear-gradient(to right,#E50914,#E50914)"
                        }}


                    />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                {/* Mini Stats Grid */}
                <div className="flex flex-cols-3 gap-4 text-center justify-around">
                  <StatItem value="1+" label="Years" />
                  {/* <div className="w-px h-full bg-red mx-auto" /> */}
                  <StatItem value="24/7" label="Support" />
                  {/* <div className="w-px h-full bg-white/10 mx-auto" /> */}
                  <StatItem value="100%" label="Quality" />
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    ACTIVE
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <Crown className="w-3 h-3 text-yellow-500" />
                    PREMIUM
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-8 backdrop-blur-xl">
              <h3 className="mb-6 px-8 text-sm font-medium text-zinc-400">Software We use </h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {/* Triple list for seamless loop */}
                  {[...EDITINGSOFTWARE, ...EDITINGSOFTWARE, ...EDITINGSOFTWARE].map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                    >
                      {/* Brand Icon */}
                      <img className="h-6 w-8 " src={client.icon} />
                      {/* <client.icon  /> */}
                      {/* Brand Name */}
                      <span className="text-lg font-bold text-white tracking-tight">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}