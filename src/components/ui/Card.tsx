import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Play,
} from "lucide-react";

interface PlaceCardProps {
  displayPic?: string;
  videos: string[];
  tags: string[];
  title: string;
  duration: string;
  platform: string;
  description: string;
  isFeatured?: boolean;
  className?: string;
  onViewDetails: () => void;
}

export const PlaceCard = ({
  displayPic,
  videos,
  tags,
  title,
  duration,
  platform,
  description,
  isFeatured = false,
  className = "",
  onViewDetails,
}: PlaceCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const changeVideo = (newDirection: number) => {
    setDirection(newDirection);

    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;

      if (nextIndex < 0) {
        return videos.length - 1;
      }

      if (nextIndex >= videos.length) {
        return 0;
      }

      return nextIndex;
    });
  };

  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),

    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },

    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group
        showcase-card
        relative
        w-full
        overflow-hidden
        rounded-[1.35rem]
        border
        border-white/[0.09]
        bg-[#0A0A0A]
        text-white
        shadow-[0_18px_50px_rgba(0,0,0,0.25)]
        transition-all
        duration-500
        hover:border-[#E50914]/30
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.5)]
        ${className}
      `}
    >

      {/* =========================================
          RED EDGE GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-30
          h-[2px]
          w-0
          -translate-x-1/2
          bg-[#E50914]
          shadow-[0_0_18px_rgba(229,9,20,0.8)]
          transition-all
          duration-500
          group-hover:w-[70%]
        "
      />

      {/* =========================================
          THUMBNAIL / VIDEO
      ========================================== */}

      <div
        className="
          showcase-thumbnail
          relative
          aspect-[9/13]
          overflow-hidden
          bg-black
        "
      >

        {/* =====================================
            THUMBNAIL
        ====================================== */}

        {displayPic ? (
          <motion.img
            src={displayPic}
            alt={title}
            initial={{ scale: 1 }}
            animate={{
              scale: isHovered ? 1.055 : 1,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              showcase-thumbnail__media
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />
        ) : (
          <motion.video
            key={currentIndex}
            src={videos[currentIndex]}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            muted
            playsInline
            preload="metadata"
            className="
              showcase-thumbnail__media
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />
        )}

        {/* =====================================
            CINEMATIC OVERLAY
        ====================================== */}

        <div
          className="
            showcase-thumbnail__shade
            pointer-events-none
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,transparent_28%,transparent_55%,rgba(0,0,0,0.9)_100%)]
          "
        />

        {/* Red hover atmosphere */}

        <div
          className={`
            showcase-thumbnail__atmosphere
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_70%,rgba(229,9,20,0.16),transparent_45%)]
            transition-opacity
            duration-500
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* =====================================
            TOP META
        ====================================== */}

        <div
          className="showcase-thumbnail__meta"
          className="
            absolute
            left-4
            right-4
            top-4
            z-20
            flex
            items-start
            justify-between
            gap-3
          "
        >

          {/* Tags */}

          <div className="flex flex-wrap gap-1.5">

            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-white/15
                  bg-black/45
                  px-2.5
                  py-1.5
                  font-mono
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-white/80
                  backdrop-blur-xl
                "
              >
                {tag}
              </span>
            ))}

          </div>

          {/* Featured */}

          {isFeatured && (
            <span
              className="
                shrink-0
                rounded-full
                border
                border-[#E50914]/30
                bg-[#E50914]/90
                px-2.5
                py-1.5
                font-mono
                text-[8px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-white
                shadow-[0_0_20px_rgba(229,9,20,0.25)]
              "
            >
              Featured
            </span>
          )}

        </div>

        {/* =====================================
            PROJECT NUMBER
        ====================================== */}

        <div className="absolute bottom-4 left-4 z-20">

          <span
            className="
              font-mono
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/45
            "
          >
            Project / {String(currentIndex + 1).padStart(2, "0")}
          </span>

        </div>

        {/* =====================================
            DURATION
        ====================================== */}

        <div className="absolute bottom-4 right-4 z-20">

          <span
            className="
              rounded-full
              border
              border-white/10
              bg-black/45
              px-2.5
              py-1
              font-mono
              text-[8px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-white/65
              backdrop-blur-xl
            "
          >
            {duration}
          </span>

        </div>

        {/* =====================================
            CAROUSEL CONTROLS
        ====================================== */}

        {videos.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                changeVideo(-1);
              }}
              aria-label="Previous video"
              className="
                absolute
                left-3
                top-1/2
                z-30
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-black/40
                text-white
                opacity-0
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#E50914]/50
                hover:bg-[#E50914]
                group-hover:opacity-100
              "
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                changeVideo(1);
              }}
              aria-label="Next video"
              className="
                absolute
                right-3
                top-1/2
                z-30
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-black/40
                text-white
                opacity-0
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#E50914]/50
                hover:bg-[#E50914]
                group-hover:opacity-100
              "
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* =====================================
            PLAY BUTTON
        ====================================== */}

        <button
          type="button"
          onClick={onViewDetails}
          aria-label={`View ${title}`}
          className="
            absolute
            inset-0
            z-20
            flex
            items-center
            justify-center
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        >
          <span
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/35
              text-white
              shadow-[0_0_40px_rgba(0,0,0,0.4)]
              backdrop-blur-xl
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:border-[#E50914]/70
              group-hover:bg-[#E50914]
              group-hover:shadow-[0_0_40px_rgba(229,9,20,0.35)]
            "
          >
            <Play className="ml-1 h-6 w-6 fill-current" />
          </span>
        </button>

      </div>

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="showcase-card__content relative p-5 sm:p-6">

        {/* Platform */}

        <div className="mb-4 flex items-center justify-between gap-3">

          <span
            className="
              font-mono
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#E50914]
            "
          >
            {platform}
          </span>

          <span className="h-px flex-1 bg-white/[0.08]" />

        </div>

        {/* Title */}

        <h3
          className="
            heading-font
            text-2xl
            leading-none
            tracking-[-0.025em]
            text-white
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            body-font
            mt-3
            line-clamp-2
            text-xs
            font-medium
            leading-5
            text-zinc-500
          "
        >
          {description}
        </p>

        {/* Bottom action */}

        <div className="mt-6 flex items-center justify-between">

          <button
            type="button"
            onClick={onViewDetails}
            className="
              group/view
              inline-flex
              items-center
              gap-2
              font-mono
              text-[9px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-white/65
              transition-colors
              hover:text-white
            "
          >
            View Project

            <ArrowUpRight
              className="
                h-3.5
                w-3.5
                text-[#E50914]
                transition-transform
                duration-300
                group-hover/view:-translate-y-0.5
                group-hover/view:translate-x-0.5
              "
            />
          </button>

          {/* Carousel indicators */}

          {videos.length > 1 && (
            <div className="flex items-center gap-1.5">

              {videos.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();

                    setDirection(
                      index > currentIndex ? 1 : -1
                    );

                    setCurrentIndex(index);
                  }}
                  aria-label={`Go to video ${index + 1}`}
                  className={`
                    h-1
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentIndex === index
                        ? "w-5 bg-[#E50914]"
                        : "w-1 bg-white/20 hover:bg-white/50"
                    }
                  `}
                />
              ))}

            </div>
          )}

        </div>

      </div>
    </motion.article>
  );
};