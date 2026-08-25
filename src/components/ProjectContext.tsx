import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export interface VideoDetails {
  title: string;
  videoUrl: string;
  orientation:string;
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

interface ProjectContextType {
  isVideoPlayable: boolean;

  setIsVideoPlayable: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  selectedVideo: VideoDetails | null;

  setSelectedVideo: React.Dispatch<
    React.SetStateAction<VideoDetails | null>
  >;
}

const ProjectContext =
  createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isVideoPlayable, setIsVideoPlayable] =
    useState<boolean>(false);

  const [selectedVideo, setSelectedVideo] =
    useState<VideoDetails | null>(null);

  return (
    <ProjectContext.Provider
      value={{
        isVideoPlayable,
        setIsVideoPlayable,
        selectedVideo,
        setSelectedVideo,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);

  if (context === undefined) {
    throw new Error(
      "useProject must be used inside ProjectProvider"
    );
  }

  return context;
};