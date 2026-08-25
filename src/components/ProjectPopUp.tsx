import { useProject } from './ProjectContext.tsx';
import { VideoDetailModal } from './VideoDetailModal';

const ProjectPopUp = () => {
  const {
    isVideoPlayable,
    setIsVideoPlayable,
    selectedVideo,
  } = useProject();

  if (!isVideoPlayable || !selectedVideo) {
    return null;
  }
  console.log("POPUP isVideoPlayable:", isVideoPlayable);

  return (
    <VideoDetailModal
      video={selectedVideo}
      onClose={() => setIsVideoPlayable(false)}
    />
  );
};

export default ProjectPopUp;