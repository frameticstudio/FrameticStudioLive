import { useProject } from "../ProjectContext.tsx";
// import sole from '../../assets/images/sole.png'
import thesya from '../../assets/images/sya.png'
import bihari from '../../assets/images/bihari.png'
import stationary from '../../assets/images/stationary.png'
import TECHEDITS from '../../assets/images/i1.png'
import sab from '../../assets/images/sab.png'
import mplton from '../../assets/images/meepelton.png'
import jwel from '../../assets/images/jwell.png'
import interior from '../../assets/images/interieor.png'
import haldi from '../../assets/images/haldi.png'
import fun from '../../assets/images/fun.png'
import seoni from '../../assets/images/seoni.png'
import convocation from '../../assets/images/convo.png'
import german from '../../assets/images/german.png'
import canada from '../../assets/images/canada.png'
import tenmin from '../../assets/images/i2.png'
import rss from '../../assets/images/rss.png'
import frutt from '../../assets/images/frutt.png'
/* =====================================================
   DATA
===================================================== */

const demoPlaceData = [
  {
    id: 1,
    displayPic: thesya,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398988/TALKINGAHEAD_MANUFRACTURER_54SEC_1080P_30FPS_H.264_AAC_48HZ_REC_tauw7t.mp4",
    tags: ["Short Form", "Reel"],
    orientation: "portrait",
    isFeatured: true,
  },

  {
    id: 2,
    displayPic: bihari,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398985/TALKING_AHEAD_DOCUMENTARY_38SEC_1080P_30FPS_H.264_AAC_48HZ_REC_m5pv2i.mp4",
    tags: ["Short Form", "YouTube"],
    orientation: "portrait",
    isFeatured: false,
  },

  {
    id: 3,
    displayPic: rss,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/a_270/v1787398982/RSS_REEL_CINEMATIC_1.2SEC_1080P_30FPS_H.264_AAC_48HZ_REC_yfxlm7.mp4",
    tags: ["Cinematic", "Reel"],
    orientation: "landscape",
    isFeatured: false,
  },

  {
    id: 4,
    displayPic: stationary,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398983/STATIONARYREEL_ADS_PROMOTION_30SEC_1080P_30FPS_H.264_AAC_48HZ_REC_od27hl.mp4",
    tags: ["Advertisement", "Product"],
    orientation: "portrait",
    isFeatured: false,
  },

  {
    id: 5,
    displayPic: TECHEDITS,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398984/TALKINGAHEAD_TECHEDITS_37SEC_1080P_30FPS_H.264_AAC_48HZ_REC_i4l5ep.mp4",
    tags: ["Talking Head", "Short Form"],
    orientation: "portrait",
    isFeatured: false,
  },

  {
    id: 6,
    displayPic: tenmin,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398983/TALKINGAHEAD_DOCUMENTARY_41SEC_1080P_30FPS_H.264_AAC_48HZ_REC_cwydhs.mp4",
    tags: ["Documentary", "Short Form"],
    orientation: "portrait",
    isFeatured: false,
  },

  {
    id: 7,
    displayPic: mplton,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398981/MEEPLETON_REEL_GAMEVERSE__FUNEDITS_34SEC_1080P_30FPS_H.264_AAC_48HZ_REC_sjmjee.mp4",
    tags: ["Fun Edit", "Reel"],
    orientation: "portrait",
    isFeatured: false,
  },

  {
    id: 8,
    displayPic: sab,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398981/SHOWREEL_15SEC_1080P_30FPS_H.264_AAC_48HZ_REC_fgjqni.mp4",
    tags: ["Showreel", "Cinematic"],
    orientation: "landscape",
    isFeatured: false,
  },

  {
    id: 9,
    displayPic: jwel,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398979/JWELLERY_ADS__MANUFRACTURER_19SEC_1080P_30FPS_H.264_AAC_48HZ_REC_egsjmh.mp4",
    tags: ["Advertisement", "Jewellery"],
    orientation: "portrait",
    isFeatured: false,
  },

  {
    id: 10,
    displayPic: interior,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398977/INTERIORDESIGN_SHOWREEL_30SEC_1080P_30FPS_H.264_AAC_48HZ_REC.709_phf9e8.mp4",
    tags: ["Interior Design", "Showreel"],
    orientation: "portrait",
    isFeatured: false,
  },

  {
    id: 11,
    displayPic: haldi,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/a_270/v1787398975/HALDIEDITS_CINEMATIC_27SEC_1080P_30FPS_H.264_AAC_48HZ_REC_nrszb2.mp4",
    tags: ["Cinematic", "Edit"],
    orientation: "landscape",
    isFeatured: false,
  },

  {
    id: 13,
    displayPic: fun,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398974/FUNCTION_EDITS__FUNREEL_36SEC_1080P_30FPS_H.264_AAC_48HZ_REC_axinrg.mp4",
    tags: ["Fun Edit", "Reel"],
    orientation: "portrait",
    isFeatured: false,
  },

  {
    id: 14,
    displayPic: seoni,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398971/DEMO_REALSTATEREEL_13SEC_1080P_30FPS_H.264_AAC_48HZ_REC_nb51ov.mp4",
    tags: ["Real Estate", "Reel"],
    orientation: "portrait",
    isFeatured: false,
  },

  {
    id: 15,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398970/CAREDITS_CINEMATICEDITS_22SEC_1080P_30FPS_H.264_AAC_48HZ_REC_ldahw4.mp4",
    tags: ["Cinematic", "Edit"],
    orientation: "landscape",
    isFeatured: false,
  },

  {
    id: 16,
    displayPic: german,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398969/CLIPPER_YOUTUBESHORT_34SEC_1080P_30FPS_H.264_AAC_48HZ_REC_rnx8zm.mp4",
    tags: ["YouTube Short", "Short Form"],
    orientation: "portrait",
    isFeatured: false,
  },

  {
    id: 17,
    displayPic: convocation,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398969/CONVOVATIONREEL_CINEMATIC_45SEC_1080P_30FPS_H.264_AAC_48HZ_REC_uoapet.mp4",
    tags: ["Cinematic", "Reel"],
    orientation: "landscape",
    isFeatured: false,
  },

  {
    id: 18,
    displayPic: frutt,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398970/Frameticxaman_demo_ads_fruut_13SEC_1080P_30FPS_H.264_AAC_48HZ_REC.709_p19dpt.mp4",
    tags: ["Advertisement", "Product"],
    orientation: "portrait",
    isFeatured: false,
  },

  {
    id: 19,
    displayPic: canada,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398967/_ARMY_REEL__YOUTUBESHORT_33SEC_1080P_30FPS_H.264_AAC_48HZ_REC_dtyjba.mp4",
    tags: ["YouTube Short", "Reel"],
    orientation: "portrait",
    isFeatured: false,
  },
];


/* =====================================================
   URL HELPERS
===================================================== */

const getVideoName = (url: string) => {
  const fileName = url.split("/").pop() || "";

  return fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/_[a-zA-Z0-9]{6,}$/, "");
};


const formatTitle = (url: string) => {
  const name = getVideoName(url);

  return name
    .replace(/__+/g, " ")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\b\d+(\.\d+)?SEC\b/gi, "")
    .replace(/\b\d+P\b/gi, "")
    .replace(/\b\d+FPS\b/gi, "")
    .replace(/\bH\.264\b/gi, "")
    .replace(/\bAAC\b/gi, "")
    .replace(/\b\d+HZ\b/gi, "")
    .replace(/\bREC(\.709)?\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};


const extractDuration = (url: string) => {
  const match = url.match(/(\d+(?:\.\d+)?)SEC/i);

  return match ? `${match[1]} sec` : undefined;
};


const extractResolution = (url: string) => {
  const match = url.match(/(\d{3,4})P/i);

  if (!match) return undefined;

  return match[1] === "1080"
    ? "1080 × 1920"
    : `${match[1]}P`;
};


const extractFrameRate = (url: string) => {
  const match = url.match(/(\d+)FPS/i);

  return match ? `${match[1]} FPS` : undefined;
};


const extractColorGrade = (url: string) => {
  if (/REC\.709/i.test(url)) {
    return "Rec.709";
  }

  if (/CINEMATIC/i.test(url)) {
    return "Cinematic";
  }

  return undefined;
};


const extractCategory = (url: string) => {
  const upper = url.toUpperCase();

  if (upper.includes("YOUTUBESHORT")) {
    return "YouTube Short";
  }

  if (upper.includes("SHOWREEL")) {
    return "Showreel";
  }

  if (
    upper.includes("ADVERTISEMENT") ||
    upper.includes("ADS")
  ) {
    return "Advertisement";
  }

  if (upper.includes("REEL")) {
    return "Instagram Reel";
  }

  return "Short Form";
};


/* =====================================================
   ORIENTATION
===================================================== */

const extractOrientation = (
  url: string
): "portrait" | "landscape" => {
  const lower = url.toLowerCase();

  if (
    lower.includes("/a_90/") ||
    lower.includes("/a_270/")
  ) {
    return "landscape";
  }

  return "portrait";
};


/* =====================================================
   LANDSCAPE CARD
===================================================== */

interface LandscapeCardProps {
  project: (typeof demoPlaceData)[number];
  onViewDetails: () => void;
}


const LandscapeCard = ({
  project,
  onViewDetails,
}: LandscapeCardProps) => {
  return (
    <div
      className="
        project-card
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.035]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#E50914]/40
        hover:bg-white/[0.055]
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.55)]
      "
    >

      {/* Red ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          z-0
          h-40
          w-40
          rounded-full
          bg-[#E50914]/0
          blur-[80px]
          transition-all
          duration-700
          group-hover:bg-[#E50914]/[0.12]
        "
      />

      <div className="relative z-10">

        {/* =============================================
            LANDSCAPE DISPLAY
        ============================================== */}

        <button
          type="button"
          onClick={onViewDetails}
          className="
            relative
            block
            aspect-video
            w-full
            overflow-hidden
            bg-black
            text-left
          "
        >

          {project.displayPic ? (
            <img
              src={project.displayPic}
              alt={formatTitle(project.videoUrl)}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.03]
              "
            />
          ) : (
            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                bg-[#0a0a0d]
              "
            >
              <span className="text-sm text-white/20">
                Cinematic Preview
              </span>
            </div>
          )}

          {/* Gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-transparent
              to-black/10
            "
          />

          {/* Cinematic */}
          <div
            className="
              absolute
              left-4
              top-4
              rounded-md
              border
              border-white/10
              bg-black/60
              px-3
              py-1.5
              backdrop-blur-xl
            "
          >
            <span
              className="
                technical-font
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
              "
            >
              Cinematic
            </span>
          </div>

          {/* 16:9 */}
          <div
            className="
              absolute
              right-4
              top-4
              rounded-md
              border
              border-white/10
              bg-black/60
              px-2.5
              py-1.5
              backdrop-blur-xl
            "
          >
            <span
              className="
                technical-font
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white/70
              "
            >
              16:9
            </span>
          </div>

          {/* Duration */}
          <div
            className="
              absolute
              bottom-4
              right-4
              rounded-md
              border
              border-white/10
              bg-black/70
              px-2.5
              py-1.5
              backdrop-blur-xl
            "
          >
            <span
              className="
                technical-font
                text-[8px]
                font-bold
                tracking-[0.1em]
                text-white
              "
            >
              {extractDuration(project.videoUrl) || "N/A"}
            </span>
          </div>

        </button>


        {/* =============================================
            LANDSCAPE INFO
        ============================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-5
            p-5
          "
        >

          <div className="min-w-0 flex-1">

            <div className="mb-2 flex flex-wrap gap-2">

              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="
                    technical-font
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#E50914]
                  "
                >
                  {tag}
                </span>
              ))}

            </div>

            <h3
              className="
                truncate
                text-lg
                font-semibold
                tracking-tight
                text-white
              "
            >
              {formatTitle(project.videoUrl)}
            </h3>

            <p
              className="
                technical-font
                mt-1
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-zinc-600
              "
            >
              Landscape · Cinematic Edit
            </p>

          </div>


          <button
            type="button"
            onClick={onViewDetails}
            className="
              shrink-0
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-zinc-300
              transition-all
              duration-300
              hover:border-[#E50914]/50
              hover:bg-[#E50914]
              hover:text-white
            "
          >
            View →
          </button>

        </div>

      </div>


      {/* Bottom red line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-20
          h-[2px]
          w-0
          bg-[#E50914]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

    </div>
  );
};


/* =====================================================
   PORTRAIT CARD
===================================================== */

interface PortraitCardProps {
  project: (typeof demoPlaceData)[number];
  onViewDetails: () => void;
}


const PortraitCard = ({
  project,
  onViewDetails,
}: PortraitCardProps) => {
  return (
    <div
      className="
        project-card
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.035]
        transition-all
        duration-500
        hover:-translate-y-1.5
        hover:border-[#E50914]/40
        hover:bg-white/[0.055]
        hover:shadow-[0_20px_55px_rgba(0,0,0,0.5)]
      "
    >

      {/* =============================================
          PORTRAIT DISPLAY
      ============================================== */}

      <button
        type="button"
        onClick={onViewDetails}
        className="
          relative
          block
          aspect-[9/16]
          w-full
          overflow-hidden
          bg-black
          text-left
        "
      >

        {project.displayPic ? (
          <img
            src={project.displayPic}
            alt={formatTitle(project.videoUrl)}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.035]
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              bg-[#0a0a0d]
            "
          >
            <span className="text-xs text-white/20">
              Portrait Preview
            </span>
          </div>
        )}

        {/* Bottom gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[30%]
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
        />

        {/* 9:16 */}
        <div
          className="
            absolute
            left-3
            top-3
            rounded-md
            border
            border-white/10
            bg-black/60
            px-2
            py-1
            backdrop-blur-xl
          "
        >
          <span
            className="
              technical-font
              text-[7px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white/70
            "
          >
            9:16
          </span>
        </div>

        {/* Duration */}
        <div
          className="
            absolute
            bottom-3
            right-3
            rounded-md
            border
            border-white/10
            bg-black/70
            px-2
            py-1
            backdrop-blur-xl
          "
        >
          <span
            className="
              technical-font
              text-[7px]
              font-bold
              tracking-[0.1em]
              text-white
            "
          >
            {extractDuration(project.videoUrl) || "N/A"}
          </span>
        </div>

      </button>


      {/* =============================================
          PORTRAIT INFO
      ============================================== */}

      <div className="p-3.5">

        <div className="mb-2 flex items-center justify-between gap-2">

          <span
            className="
              technical-font
              min-w-0
              truncate
              text-[7px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#E50914]
            "
          >
            {project.tags?.[0] || "Short Form"}
          </span>

          <span
            className="
              technical-font
              shrink-0
              text-[7px]
              uppercase
              tracking-[0.12em]
              text-zinc-600
            "
          >
            Portrait
          </span>

        </div>


        <div className="flex items-center justify-between gap-2">

          <h3
            className="
              min-w-0
              truncate
              text-sm
              font-semibold
              tracking-tight
              text-white
            "
          >
            {formatTitle(project.videoUrl)}
          </h3>

          <button
            type="button"
            onClick={onViewDetails}
            aria-label="View project"
            className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-zinc-400
              transition-all
              duration-300
              hover:border-[#E50914]/50
              hover:bg-[#E50914]
              hover:text-white
            "
          >
            →
          </button>

        </div>

      </div>


      {/* Bottom red line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-20
          h-[2px]
          w-0
          bg-[#E50914]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

    </div>
  );
};


/* =====================================================
   MAIN COMPONENT
===================================================== */

const PlaceCardDemo = () => {
  const {
    setIsVideoPlayable,
    setSelectedVideo,
  } = useProject();


  /* =====================================================
     OPEN PROJECT MODAL
  ===================================================== */

  const handleViewDetails = (
    project: (typeof demoPlaceData)[number]
  ) => {
    const url = project.videoUrl;

    setSelectedVideo({
      title: formatTitle(url),

      videoUrl: url,

      category: extractCategory(url),

      orientation: extractOrientation(url),

      description: `Professional ${extractCategory(
        url
      ).toLowerCase()} edit created with focused pacing, visual storytelling, transitions, and engaging motion.`,

      duration: extractDuration(url),

      role: "Video Editor",

      resolution: extractResolution(url),

      frameRate: extractFrameRate(url),

      colorGrade: extractColorGrade(url),

      audio: /AAC/i.test(url)
        ? "AAC Stereo"
        : undefined,

      creativeChallenge:
        "Maintaining strong viewer retention while keeping the content visually engaging.",

      professionalSolution:
        "Used dynamic cuts, pacing, transitions, typography, motion graphics, and sound design to create an engaging viewing experience.",
    });

    setIsVideoPlayable(true);
  };


  /* =====================================================
     SPLIT PROJECTS
  ===================================================== */

  const landscapeProjects = demoPlaceData.filter(
    (project) =>
      extractOrientation(project.videoUrl) === "landscape"
  );

  const portraitProjects = demoPlaceData.filter(
    (project) =>
      extractOrientation(project.videoUrl) === "portrait"
  );


  return (
    <div className="w-full">


      {/* =================================================
          01 — CINEMATIC
      ================================================= */}

      {landscapeProjects.length > 0 && (
        <section className="mb-20">

          {/* Section Header */}
          <div
            className="
              mb-7
              flex
              items-end
              justify-between
              border-t
              border-white/10
              pt-5
            "
          >

            <div>

              <div className="mb-2 flex items-center gap-3">

                <span className="h-px w-6 bg-[#E50914]" />

                <span
                  className="
                    technical-font
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#E50914]
                  "
                >
                  01 — Cinematic
                </span>

              </div>

              <h2
                className="
                  heading-font
                  text-3xl
                  leading-none
                  text-white
                  sm:text-4xl
                "
              >
                Cinematic Stories
              </h2>

            </div>


            <div className="hidden text-right sm:block">

              <span
                className="
                  technical-font
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-zinc-600
                "
              >
                Landscape
              </span>

              <p
                className="
                  technical-font
                  mt-1
                  text-[7px]
                  uppercase
                  tracking-[0.15em]
                  text-zinc-700
                "
              >
                16:9 · Film · Story
              </p>

            </div>

          </div>


          {/* Landscape Cards */}
          <div
            className="
              grid
              grid-cols-1
              gap-5
              lg:grid-cols-2
            "
          >

            {landscapeProjects.map((project) => (
              <LandscapeCard
                key={project.id}
                project={project}
                onViewDetails={() =>
                  handleViewDetails(project)
                }
              />
            ))}

          </div>

        </section>
      )}


      {/* =================================================
          02 — REELS / PORTRAIT
      ================================================= */}

      {portraitProjects.length > 0 && (
        <section>

          {/* Section Header */}
          <div
            className="
              mb-7
              flex
              items-end
              justify-between
              border-t
              border-white/10
              pt-5
            "
          >

            <div>

              <div className="mb-2 flex items-center gap-3">

                <span className="h-px w-6 bg-[#E50914]" />

                <span
                  className="
                    technical-font
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#E50914]
                  "
                >
                  02 — Reels & Short Form
                </span>

              </div>

              <h2
                className="
                  heading-font
                  text-3xl
                  leading-none
                  text-white
                  sm:text-4xl
                "
              >
                Vertical Stories
              </h2>

            </div>


            <div className="hidden text-right sm:block">

              <span
                className="
                  technical-font
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-zinc-600
                "
              >
                Portrait
              </span>

              <p
                className="
                  technical-font
                  mt-1
                  text-[7px]
                  uppercase
                  tracking-[0.15em]
                  text-zinc-700
                "
              >
                9:16 · Reels · Shorts
              </p>

            </div>

          </div>


          {/* Portrait Cards */}
          <div
            className="
              grid
              grid-cols-2
              gap-4
              sm:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-
            "
          >

            {portraitProjects.map((project) => (
              <PortraitCard
                key={project.id}
                project={project}
                onViewDetails={() =>
                  handleViewDetails(project)
                }
              />
            ))}

          </div>

        </section>
      )}

    </div>
  );
};


/* =====================================================
   EXPORT
===================================================== */

export default PlaceCardDemo;