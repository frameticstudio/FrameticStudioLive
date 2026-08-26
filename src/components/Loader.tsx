import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FrameticLoaderProps {
  onComplete?: () => void;
  duration?: number;
  logoSrc?: string;
}

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 2,
  duration: Math.random() * 2 + 2,
}));

const FrameticLoader = ({
  onComplete,
  duration = 3200,
  logoSrc = "/logo.jpeg",
}: FrameticLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const percentage = Math.min(elapsed / duration, 1);

      // Smooth cinematic loading curve
      const eased =
        1 - Math.pow(1 - percentage, 3);

      setProgress(Math.round(eased * 100));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setFinished(true);

          setTimeout(() => {
            onComplete?.();
          }, 650);
        }, 250);
      }
    };

    requestAnimationFrame(animate);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.65,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#030303]
          "
        >

          {/* ================================================= */}
          {/* BACKGROUND                                       */}
          {/* ================================================= */}

          <div className="pointer-events-none absolute inset-0">

            {/* Pink glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.12, 0.2, 0.12],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[15%]
                top-[25%]
                h-[400px]
                w-[400px]
                rounded-full
                bg-[#E50914]
                blur-[180px]
              "
            />

            {/* Orange glow */}
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.08, 0.16, 0.08],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[10%]
                right-[15%]
                h-[350px]
                w-[350px]
                rounded-full
                bg-orange-500
                blur-[160px]
              "
            />

            {/* Grid */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.035]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(255,255,255,0.8) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,0.8) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "70px 70px",
              }}
            />

            {/* Vignette */}
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,transparent_20%,#030303_85%)]
              "
            />

          </div>


          {/* ================================================= */}
          {/* SPEED LINES                                      */}
          {/* ================================================= */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {Array.from({ length: 10 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{
                  x: "-120%",
                  opacity: 0,
                }}
                animate={{
                  x: "120%",
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 1.8 + index * 0.12,
                  delay: index * 0.18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  h-px
                  w-[35vw]
                  bg-gradient-to-r
                  from-transparent
                  via-[#E50914]
                  to-transparent
                "
                style={{
                  top: `${20 + index * 6}%`,
                }}
              />
            ))}

          </div>


          {/* ================================================= */}
          {/* PARTICLES                                        */}
          {/* ================================================= */}

          <div className="pointer-events-none absolute inset-0">

            {PARTICLES.map((particle) => (
              <motion.span
                key={particle.id}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  y: [-10, -45],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  rounded-full
                  bg-[#E50914]
                "
                style={{
                  left: particle.x,
                  top: particle.y,
                  width: particle.size,
                  height: particle.size,
                  boxShadow: "0 0 12px rgba(229,9,20,0.8)",
                }}
              />
            ))}

          </div>


          {/* ================================================= */}
          {/* MAIN CONTENT                                     */}
          {/* ================================================= */}

          <div className="
            relative
            z-10
            flex
            w-full
            max-w-3xl
            flex-col
            items-center
            px-6
          ">

            {/* ================================================= */}
            {/* LOGO                                              */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.72,
                y: 20,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                flex
                items-center
                justify-center
              "
            >

              {/* Logo glow */}
              <motion.div
                animate={{
                  opacity: [0.25, 0.55, 0.25],
                  scale: [0.9, 1.08, 0.9],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  h-52
                  w-52
                  rounded-full
                  bg-[#E50914]
                  blur-[90px]
                  sm:h-72
                  sm:w-72
                "
              />

              {/* Logo */}
              <motion.img
                src={logoSrc}
                alt="FrameticStudio"
                className="
                  relative
                  z-10
                  h-auto
                  w-[250px]
                  object-contain
                  sm:w-[330px]
                  md:w-[390px]
                  rounded-2xl
                "
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(229,9,20,0.15))",
                    "drop-shadow(0 0 28px rgba(229,9,20,0.35))",
                    "drop-shadow(0 0 10px rgba(229,9,20,0.15))",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

            </motion.div>


            {/* ================================================= */}
            {/* BRAND TEXT                                        */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-2
                text-center
              "
            >

              {/* <div
                className="
                  technical-font
                  text-[8px]
                  uppercase
                  tracking-[0.45em]
                  text-white/35
                  sm:text-[10px]
                  sm:tracking-[0.55em]
                "
              >
                EDITS THAT PERFORM.
              </div> */}

            </motion.div>


            {/* ================================================= */}
            {/* LOADING LABEL                                     */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.6,
              }}
              className="
                mt-12
                w-full
                max-w-md
              "
            >

              <div className="mb-3 flex items-center justify-between">

                <span
                  className="
                    technical-font
                    text-[9px]
                    uppercase
                    tracking-[0.35em]
                    text-white/40
                  "
                >
                  Loading Experience
                </span>

                <motion.span
                  key={progress}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="
                    technical-font
                    text-[10px]
                    font-bold
                    text-[#E50914]
                  "
                >
                  {String(progress).padStart(2, "0")}%
                </motion.span>

              </div>


              {/* Progress track */}
              <div
                className="
                  relative
                  h-[3px]
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-white/[0.08]
                "
              >

                {/* Progress */}
                <motion.div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-[#E50914]
                    via-pink-500
                    to-orange-400
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />

                {/* Moving glow */}
                <motion.div
                  className="
                    absolute
                    top-1/2
                    h-3
                    w-3
                    -translate-y-1/2
                    rounded-full
                    bg-orange-400
                    shadow-[0_0_18px_6px_rgba(249,115,22,0.45)]
                  "
                  style={{
                    left: `calc(${progress}% - 6px)`,
                  }}
                />

              </div>


              {/* Bottom status */}
              <div className="mt-3 flex justify-between">

                <span
                  className="
                    technical-font
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                    text-white/20
                  "
                >
                  Frame by frame
                </span>

                <span
                  className="
                    technical-font
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                    text-white/20
                  "
                >
                  FrameticStudio
                </span>

              </div>

            </motion.div>


            {/* ================================================= */}
            {/* DECORATIVE CORNERS                                */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="
                absolute
                -bottom-12
                left-6
                hidden
                h-8
                w-8
                border-b
                border-l
                border-[#E50914]/40
                sm:block
              "
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="
                absolute
                -bottom-12
                right-6
                hidden
                h-8
                w-8
                border-b
                border-r
                border-orange-500/40
                sm:block
              "
            />

          </div>


          {/* ================================================= */}
          {/* FOOTER                                            */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="
              absolute
              bottom-5
              left-0
              right-0
              text-center
            "
          >
            <span
              className="
                technical-font
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/15
              "
            >
              Crafted for attention.
            </span>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FrameticLoader;