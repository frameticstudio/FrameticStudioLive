import { PlaceCard } from "./Card.tsx";
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
    displayPic:thesya,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398988/TALKINGAHEAD_MANUFRACTURER_54SEC_1080P_30FPS_H.264_AAC_48HZ_REC_tauw7t.mp4",
    tags: ["Short Form", "Reel"],
    isFeatured: true,
  },

  {
    id: 2,
    displayPic:bihari,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398985/TALKING_AHEAD_DOCUMENTARY_38SEC_1080P_30FPS_H.264_AAC_48HZ_REC_m5pv2i.mp4",
    tags: ["Short Form", "YouTube"],
    isFeatured: false,
  },

  {
    id: 3,
    displayPic:rss,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398982/RSS_REEL_CINEMATIC_1.2SEC_1080P_30FPS_H.264_AAC_48HZ_REC_yfxlm7.mp4",
    tags: ["Cinematic", "Reel"],
    isFeatured: false,
  },

  {
    id: 4,
    displayPic:stationary,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398983/STATIONARYREEL_ADS_PROMOTION_30SEC_1080P_30FPS_H.264_AAC_48HZ_REC_od27hl.mp4",
    tags: ["Advertisement", "Product"],
    isFeatured: false,
  },

  {
    id: 5,
    displayPic:TECHEDITS,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398984/TALKINGAHEAD_TECHEDITS_37SEC_1080P_30FPS_H.264_AAC_48HZ_REC_i4l5ep.mp4",
    tags: ["Talking Head", "Short Form"],
    isFeatured: false,
  },

  {
    id: 6,
    displayPic:tenmin,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398983/TALKINGAHEAD_DOCUMENTARY_41SEC_1080P_30FPS_H.264_AAC_48HZ_REC_cwydhs.mp4",
    tags: ["Documentary", "Short Form"],
    isFeatured: false,
  },

  {
    id: 7,
    displayPic:mplton,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398981/MEEPLETON_REEL_GAMEVERSE__FUNEDITS_34SEC_1080P_30FPS_H.264_AAC_48HZ_REC_sjmjee.mp4",
    tags: ["Fun Edit", "Reel"],
    isFeatured: false,
  },

  {
    id: 8,
    displayPic:sab,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398981/SHOWREEL_15SEC_1080P_30FPS_H.264_AAC_48HZ_REC_fgjqni.mp4",
    tags: ["Showreel", "Cinematic"],
    isFeatured: false,
  },

  {
    id: 9,
    displayPic:jwel,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398979/JWELLERY_ADS__MANUFRACTURER_19SEC_1080P_30FPS_H.264_AAC_48HZ_REC_egsjmh.mp4",
    tags: ["Advertisement", "Jewellery"],
    isFeatured: false,
  },

  {
    id: 10,
    displayPic:interior,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398977/INTERIORDESIGN_SHOWREEL_30SEC_1080P_30FPS_H.264_AAC_48HZ_REC.709_phf9e8.mp4",
    tags: ["Interior Design", "Showreel"],
    isFeatured: false,
  },

  {
    id: 11,
       displayPic:haldi, 
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398975/HALDIEDITS_CINEMATIC_27SEC_1080P_30FPS_H.264_AAC_48HZ_REC_nrszb2.mp4",
    tags: ["Cinematic", "Edit"],
    isFeatured: false,
  },

  // {
  //   id: 12,
  //   videoUrl:
  //     "https://res.cloudinary.com/drnie4sny/video/upload/v1787398974/FUNEDITS_TRENDEDITS_12SEC_1080P_30FPS_H.264_AAC_48HZ_REC_awmglj.mp4",
  //   tags: ["Trend", "Fun Edit"],
  //   isFeatured: false,
  // },

  {
    id: 13,
    displayPic:fun,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398974/FUNCTION_EDITS__FUNREEL_36SEC_1080P_30FPS_H.264_AAC_48HZ_REC_axinrg.mp4",
    tags: ["Fun Edit", "Reel"],
    isFeatured: false,
  },

  {
    id: 14,
    displayPic:seoni,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398971/DEMO_REALSTATEREEL_13SEC_1080P_30FPS_H.264_AAC_48HZ_REC_nb51ov.mp4",
    tags: ["Real Estate", "Reel"],
    isFeatured: false,
  },

  {
    id: 15,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398970/CAREDITS_CINEMATICEDITS_22SEC_1080P_30FPS_H.264_AAC_48HZ_REC_ldahw4.mp4",
    tags: ["Cinematic", "Edit"],
    isFeatured: false,
  },

  {
    id: 16,
    displayPic:german,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398969/CLIPPER_YOUTUBESHORT_34SEC_1080P_30FPS_H.264_AAC_48HZ_REC_rnx8zm.mp4",
    tags: ["YouTube Short", "Short Form"],
    isFeatured: false,
  },

  {
    id: 17,
    displayPic:convocation,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398969/CONVOVATIONREEL_CINEMATIC_45SEC_1080P_30FPS_H.264_AAC_48HZ_REC_uoapet.mp4",
    tags: ["Cinematic", "Reel"],
    isFeatured: false,
  },

  {
    id: 18,
    displayPic:frutt,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398970/Frameticxaman_demo_ads_fruut_13SEC_1080P_30FPS_H.264_AAC_48HZ_REC.709_p19dpt.mp4",
    tags: ["Advertisement", "Product"],
    isFeatured: false,
  },

  {
    id: 19,
    displayPic:canada,
    videoUrl:
      "https://res.cloudinary.com/drnie4sny/video/upload/v1787398967/_ARMY_REEL__YOUTUBESHORT_33SEC_1080P_30FPS_H.264_AAC_48HZ_REC_dtyjba.mp4",
    tags: ["YouTube Short", "Reel"],
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
   COMPONENT
===================================================== */

const PlaceCardDemo = () => {
  const {
    setIsVideoPlayable,
    setSelectedVideo,
  } = useProject();

  const handleViewDetails = (
    project: (typeof demoPlaceData)[number]
  ) => {
    const url = project.videoUrl;

    setSelectedVideo({
      title: formatTitle(url),

      videoUrl: url,

      category: extractCategory(url),

      description: `Professional ${extractCategory(
        url
      ).toLowerCase()} edit created with focused pacing,
      visual storytelling, transitions, and engaging motion.`,

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

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {demoPlaceData.map((project) => (
        <div
          key={project.id}
          className="
            project-card
            group
            relative
            flex
            min-h-[500px]
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.035]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-[#E50914]/40
            hover:bg-white/[0.055]
            hover:shadow-[0_25px_70px_rgba(0,0,0,0.55)]
          "
        >
          {/* Project number */}

          {/* <div
            className="
              absolute
              left-4
              top-4
              z-30
              rounded-full
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
                text-zinc-400
                group-hover:text-[#E50914]
              "
            >
              {String(index + 1).padStart(3, "0")}
            </span>
          </div> */}

          {/* Red glow */}

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

          {/* Card */}

          <div className="relative z-10 flex h-full flex-1 flex-col">
            <PlaceCard
            displayPic={project.displayPic}
              videos={[project.videoUrl]}
              tags={project.tags}
              title={formatTitle(project.videoUrl)}
              duration={
                extractDuration(project.videoUrl) ||
                "N/A"
              }
              platform={
                extractCategory(project.videoUrl)
              }
              description={`Professional ${extractCategory(
                project.videoUrl
              ).toLowerCase()} edit.`}
              isFeatured={project.isFeatured}
              onViewDetails={() =>
                handleViewDetails(project)
              }
            />
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
      ))}
    </div>
  );
};

export default PlaceCardDemo;