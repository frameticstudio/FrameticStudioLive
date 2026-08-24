import * as React from "react";
import { motion } from "framer-motion";
import {
  Video,
  WandSparkles,
  SlidersHorizontal,
  Mic2,
  Palette,
} from "lucide-react";

const capabilities = [
  {
    icon: Video,
    title: "Adobe Premiere Pro",
    description:
      "Advanced timeline pacing, multi-camera syncing, keyframe ramping, and nested editing workflows.",
  },
  {
    icon: WandSparkles,
    title: "Adobe After Effects",
    description:
      "Complex tracking, glitch effects, visual transitions, kinetic typography, and clean motion graphics.",
  },
  {
    icon: SlidersHorizontal,
    title: "Cinematic Color Grading",
    description:
      "Professional color correction, skin-tone isolation, cinematic contrast, and custom look development.",
  },
  {
    icon: Mic2,
    title: "Sound Design & Mixing",
    description:
      "Layered sound effects, dialogue cleanup, transient control, ambience, and balanced final mixes.",
  },
];

export default function Capabilities() {
  return (
    <section id="skills" className="relative overflow-hidden bg-white px-6 py-24 text-slate-950 md:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(239,68,68,0.07),transparent_32%),radial-gradient(circle_at_82%_75%,rgba(239,68,68,0.05),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4  text-[11px] font-semibold uppercase tracking-[0.38em] text-red-500">
            Technical Arsenal
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Professional <span className="text-red-500">Capabilities</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
            A refined post-production workflow built around strong editing,
            motion, sound, and visual storytelling standards.
          </p>
        </div>

        <div className="mt-14 flex justify-center gap-8 border-b border-slate-200 pb-6  text-xs uppercase tracking-[0.18em]">
          <span className="flex items-center gap-2 font-semibold text-slate-950">
            <Video size={15} className="text-red-500" />
            Video Editing / Compilation
          </span>
          <span className="hidden items-center gap-2 text-slate-400 sm:flex">
            <Palette size={15} />
            Graphic Brand Design
          </span>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_16px_40px_rgba(220,38,38,0.10)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
