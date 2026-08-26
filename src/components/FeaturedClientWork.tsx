import { ArrowUpRight, Play} from "lucide-react";

interface FeaturedClientWorkProps {
  videoUrl?: string;
  poster?: string;
  onViewProject?: () => void;
}

const FeaturedClientWork = ({
  videoUrl,
  poster,
  onViewProject,
}: FeaturedClientWorkProps) => {
  return (
    <section className="mb-16">
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#09090d]
        "
      >
        {/* Ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-1/2
            h-80
            w-80
            -translate-y-1/2
            rounded-full
            bg-[#E50914]/[0.08]
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-96
            w-96
            rounded-full
            bg-purple-500/[0.06]
            blur-[130px]
          "
        />

        {/* Grid texture */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.7) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.7) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="
            relative
            grid
            lg:grid-cols-[1.25fr_0.75fr]
          "
        >

          {/* ========================================= */}
          {/* LEFT : VISUAL / VIDEO                     */}
          {/* ========================================= */}

          <div
            className="
              relative
              min-h-[280px]
              overflow-hidden
              border-b
              border-white/10
              bg-[#050505]

              sm:min-h-[360px]

              lg:min-h-[500px]
              lg:border-b-0
              lg:border-r
            "
          >

            {/* Video */}
            {videoUrl ? (
              <video
                src={videoUrl}
                poster={poster}
                muted
                loop
                autoPlay
                playsInline
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  opacity-80
                  transition
                  duration-700
                  group-hover:scale-[1.02]
                  group-hover:opacity-100
                "
              />
            ) : (
              /* Fallback visual */
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.16),transparent_60%)]
                "
              >
                <div className="text-center">

                  <div
                    className="
                      mb-5
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      backdrop-blur-xl
                    "
                  >
                    <Play className="ml-1 h-5 w-5 text-[#E50914]" />
                  </div>

                  <p
                    className="
                      technical-font
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-zinc-600
                    "
                  >
                    Product Launch Film
                  </p>

                </div>
              </div>
            )}

            {/* Dark cinematic overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/20
                to-transparent
              "
            />

            {/* Top label */}
            <div className="absolute left-5 top-5 sm:left-7 sm:top-7">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
                  px-3
                  py-2
                  backdrop-blur-xl
                "
              >

                <span className="relative flex h-1.5 w-1.5">

                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-[#E50914]
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#E50914]
                    "
                  />

                </span>

                <span
                  className="
                    technical-font
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-zinc-300
                  "
                >
                  Recent Work
                </span>

              </span>

            </div>

            {/* Bottom visual label */}
            <div className="absolute bottom-6 left-5 sm:bottom-7 sm:left-7">

              <p
                className="
                  technical-font
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-white/40
                "
              >
                AI · SaaS · Product Launch
              </p>

            </div>

          </div>


          {/* ========================================= */}
          {/* RIGHT : PROJECT INFO                      */}
          {/* ========================================= */}

          <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10">

            <div>

              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-8 bg-[#E50914]" />

                <span
                  className="
                    technical-font
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#E50914]
                  "
                >
                  Featured Client Work
                </span>

              </div>


              {/* Client */}
              <p
                className="
                  technical-font
                  mb-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-zinc-600
                "
              >
                RAREFRIEND AI
              </p>


              {/* Title */}
              <h3
                className="
                  heading-font
                  max-w-xl
                  text-4xl
                  leading-[0.95]
                  tracking-[-0.03em]
                  text-white

                  sm:text-5xl
                "
              >
                Product Hunt
                <br />

                <span className="text-[#E50914]">
                  Launch Film.
                </span>
              </h3>


              {/* Description */}
              <p
                className="
                  body-font
                  mt-6
                  max-w-lg
                  text-sm
                  font-medium
                  leading-7
                  text-zinc-500
                "
              >
                Launch content created for an AI startup,
                built to introduce the product, communicate
                its value, and create attention around its
                Product Hunt launch.
              </p>


              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2">

                {[
                  "AI",
                  "SaaS",
                  "Startup",
                  "Product Launch",
                  "Product Hunt",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-3
                      py-1.5
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-zinc-500
                    "
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>


            {/* ========================================= */}
            {/* BOTTOM INFO                               */}
            {/* ========================================= */}

            <div className="mt-10">

              <div
                className="
                  mb-6
                  h-px
                  w-full
                  bg-white/10
                "
              />

              <div
                className="
                  flex
                  flex-col
                  gap-5

                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >

                {/* Project type */}
                <div>

                  <p
                    className="
                      technical-font
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-zinc-700
                    "
                  >
                    Project Type
                  </p>

                  <p
                    className="
                      body-font
                      mt-1
                      text-xs
                      font-semibold
                      text-zinc-300
                    "
                  >
                    Product Launch Content
                  </p>

                </div>


                {/* CTA */}
                <button
                  type="button"
                  onClick={onViewProject}
                  className="
                    group/button
                    inline-flex
                    items-center
                    gap-2
                    self-start
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    backdrop-blur-xl
                    transition-all
                    hover:border-[#E50914]/40
                    hover:bg-[#E50914]
                    sm:self-auto
                  "
                >

                  View Project

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      group-hover/button:-translate-y-0.5
                      group-hover/button:translate-x-0.5
                    "
                  />

                </button>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedClientWork;