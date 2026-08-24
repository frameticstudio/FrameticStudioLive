import React from "react";
import {
  X,
  Volume2,
  Captions,
  Maximize,
  Briefcase,
  Clock3,
  UserRound,
  Monitor,
  Cpu,
  Palette,
  AudioLines,
  Wrench,
  CheckCircle2,
} from "lucide-react";

interface VideoDetails {
  title: string;
  videoUrl: string;

  category?: string;
  description?: string;

  client?: string;
  duration?: string;
  role?: string;
  resolution?: string;
  frameRate?: string;
  colorGrade?: string;
  audio?: string;

  creativeChallenge?: string;
  professionalSolution?: string;
}

interface VideoDetailModalProps {
  video: VideoDetails;
  onClose: () => void;
}

export const VideoDetailModal = ({
  video,
  onClose,
}: VideoDetailModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative flex h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#08080d] shadow-2xl">

        {/* ================= LEFT : VIDEO ================= */}
        <div className="relative flex w-[58%] items-center justify-center bg-[#0b0712]">

          {/* Purple ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(93,45,130,0.18),transparent_65%)]" />

          <div className="relative h-[92%] max-h-[850px] aspect-[9/16] overflow-hidden rounded-xl bg-black shadow-2xl">

            <video
              src={video.videoUrl}
              controls
              // autoPlay
              playsInline
              className="h-full w-full object-cover"
            />

            {/* Optional video controls overlay */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 flex justify-between p-4">
              <div className="flex gap-2">
                <div className="rounded-md bg-black/50 p-2 text-white backdrop-blur-sm">
                  <Volume2 className="h-4 w-4" />
                </div>

                <div className="rounded-md bg-black/50 p-2 text-white backdrop-blur-sm">
                  <Captions className="h-4 w-4" />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="absolute bottom-4 right-4 rounded-full bg-black/50 p-3 text-white backdrop-blur-md transition hover:bg-black/70"
            >
              <Maximize className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ================= RIGHT : DETAILS ================= */}
        <div className="relative w-[42%] overflow-y-auto border-l border-white/10">

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-9">

            {/* Header */}
            <div className="mb-7 border-b border-white/10 pb-7">

              <div className="mb-3 flex gap-2">
                <span className="rounded-md bg-purple-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  Normal Edit
                </span>

                <span className="px-1 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/30">
                  Video Format
                </span>
              </div>

              <h2 className="pr-10 text-3xl font-bold tracking-tight text-white">
                {video.title}
              </h2>
            </div>

            {/* Editorial Story */}
            <DetailSection title="Editorial Story / Profile">
              <p className="text-sm leading-6 text-white/40">
                {video.description ||
                  "Professional clean video edit showcasing smooth B-roll sequences and seamless storytelling cuts."}
              </p>
            </DetailSection>

            {/* Technical Profile */}
            <DetailSection title="Technical Production Profile">

              <div className="grid grid-cols-2 gap-x-8 gap-y-6">

                <InfoItem
                  icon={<Briefcase />}
                  label="Client / Creator"
                  value={video.client || "Client Name"}
                />

                <InfoItem
                  icon={<Clock3 />}
                  label="Timeline Duration"
                  value={video.duration || "0:45"}
                />

                <InfoItem
                  icon={<UserRound />}
                  label="Assigned Role"
                  value={video.role || "Lead Editor"}
                />

                <InfoItem
                  icon={<Monitor />}
                  label="Resolution Profiling"
                  value={video.resolution || "1080x1920"}
                />

                <InfoItem
                  icon={<Cpu />}
                  label="Frame Rate"
                  value={video.frameRate || "30 FPS"}
                />

                <InfoItem
                  icon={<Palette />}
                  label="Color Grade LUT"
                  value={video.colorGrade || "Rec.709 Standard"}
                />

                <InfoItem
                  icon={<AudioLines />}
                  label="Audio Engineering Specs"
                  value={video.audio || "Stereo audio mix"}
                  fullWidth
                />

              </div>
            </DetailSection>

            {/* Behind Timeline */}
            <DetailSection title="Behind the Timeline">

              {/* Challenge */}
              <div className="mb-4 rounded-xl border border-orange-500/20 bg-orange-500/[0.03] p-4">

                <div className="mb-2 flex items-center gap-2 text-orange-400">
                  <Wrench className="h-4 w-4" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
                    Creative Challenge
                  </span>
                </div>

                <p className="text-sm leading-6 text-white/70">
                  {video.creativeChallenge ||
                    "Maintaining visual continuity across different scenes and audio levels."}
                </p>

              </div>

              {/* Solution */}
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-4">

                <div className="mb-2 flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
                    Professional Solution
                  </span>
                </div>

                <p className="text-sm leading-6 text-white/70">
                  {video.professionalSolution ||
                    "Consistent color treatment, clean transitions, precise cuts, and balanced audio were used to create a seamless viewing experience."}
                </p>

              </div>

            </DetailSection>

          </div>
        </div>
      </div>
    </div>
  );
};


/* ========================================================= */
/* REUSABLE SUB COMPONENTS                                  */
/* ========================================================= */

interface DetailSectionProps {
  title: string;
  children: React.ReactNode;
}

const DetailSection = ({
  title,
  children,
}: DetailSectionProps) => {
  return (
    <section className="mb-7 border-b border-white/10 pb-7 last:border-0">
      <h3 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
        {title}
      </h3>

      {children}
    </section>
  );
};


interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  fullWidth?: boolean;
}

const InfoItem = ({
  icon,
  label,
  value,
  fullWidth = false,
}: InfoItemProps) => {
  return (
    <div className={fullWidth ? "col-span-2" : ""}>

      <div className="mb-1 flex items-center gap-2 text-white/30">
        <span className=" [&>svg]:h-4 [&>svg]:w-4">
          {icon}
        </span>

        <span className="text-[9px] uppercase tracking-[0.15em]">
          {label}
        </span>
      </div>

      <p className="pl-6 text-sm font-medium text-white/75">
        {value}
      </p>

    </div>
  );
};