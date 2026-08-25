import { ArrowUpRight, Sparkles } from "lucide-react";

import {
  useProject,
} from "./ProjectContext.tsx";

import PlaceCardDemo from "./ui/ExportCard";
import ProjectPopUp from "./ProjectPopUp";

const ProjectContent = () => {
  const {
    isVideoPlayable,
    // setIsVideoPlayable,
    selectedVideo,
  } = useProject();

  return (
    <section
      id="projects"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050505]
        px-5
        py-24
        text-white
        sm:px-8
        lg:px-10
        lg:py-32
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#E50914]/[0.07]
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#E50914]/[0.05]
          blur-[160px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================
            HEADER
        ====================================== */}

        <div
          className="
            mb-14
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-8 bg-[#E50914]" />

              <span
                className="
                  technical-font
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#E50914]
                "
              >
                Selected Work
              </span>

            </div>

            <h2
              className="
                heading-font
                text-5xl
                leading-[0.92]
                tracking-[-0.03em]
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              Work That
              <br />

              <span className="text-[#E50914]">
                Gets Watched.
              </span>
            </h2>

            <p
              className="
                body-font
                mt-7
                max-w-2xl
                text-sm
                font-medium
                leading-7
                text-zinc-500
                sm:text-base
              "
            >
              A selection of edits, reels, campaigns, and
              visual stories created to capture attention
              and keep audiences watching.
            </p>
          </div>

          {/* Right meta */}

          <div
            className="
              flex
              flex-col
              items-start
              gap-4
              lg:items-end
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2.5
                backdrop-blur-xl
              "
            >
              <span className="relative flex h-2 w-2">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-red-500
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#E50914]
                  "
                />

              </span>

              <span
                className="
                  technical-font
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-zinc-400
                "
              >
                20+ Reels Active
              </span>
            </div>

            <div className="flex items-center gap-3 text-zinc-600">

              <Sparkles className="h-4 w-4 text-[#E50914]" />

              <span
                className="
                  technical-font
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                "
              >
                Edit · Refine · Deliver
              </span>

            </div>
          </div>
        </div>

        {/* =========================================
            PROJECT GRID
        ========================================== */}

        <div className="relative">

          <div
            className="
              mb-8
              flex
              items-center
              justify-between
              border-t
              border-white/10
              pt-5
            "
          >
            <span
              className="
                technical-font
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-zinc-600
              "
            >
              01 — Selected Projects
            </span>

            <span
              className="
                technical-font
                hidden
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-zinc-600
                sm:block
              "
            >
              Scroll to explore
            </span>
          </div>

          {/* 
            DO NOT ADD ANOTHER GRID HERE.

            ExportCard handles the grid.
          */}

          <PlaceCardDemo />

        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <div
          className="
            mt-16
            flex
            flex-col
            items-start
            justify-between
            gap-6
            border-t
            border-white/10
            pt-8
            sm:flex-row
            sm:items-center
          "
        >
          <div>

            <p
              className="
                technical-font
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-zinc-600
              "
            >
              Have a project in mind?
            </p>

            <p
              className="
                body-font
                mt-2
                text-sm
                font-semibold
                text-zinc-300
              "
            >
              Let's turn your footage into something worth watching.
            </p>

          </div>

          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#E50914]
              px-6
              py-3.5
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-white
              transition-all
              hover:-translate-y-0.5
              hover:bg-red-600
              hover:shadow-[0_12px_35px_rgba(229,9,20,0.25)]
            "
          >
            Start a Project

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

        </div>
      </div>

      {/* =========================================
          POPUP
      ========================================== */}

      {isVideoPlayable && selectedVideo && (
        <ProjectPopUp
        // video={selectedVideo}
        // onClose={() => setIsVideoPlayable(false)}
        />
      )}

      {/* =========================================
          FONTS
      ========================================== */}

      <style>{`
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

        @import url('https://fonts.googleapis.com/css2?family=Elsie:wght@400;900&family=Quicksand:wght@300..700&family=Roboto+Condensed:wght@100..900&display=swap');

        @media (prefers-reduced-motion: reduce) {
          .project-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

/* =====================================================
   PROVIDER
===================================================== */

const Projectsection = () => {
  return (
      <ProjectContent />
    // <ProjectProvider>
    // </ProjectProvider>
  );
};

export default Projectsection;