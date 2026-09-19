interface YouTubeVideoProps {
  url: string;
  title?: string;
  className?: string;
}

const getYouTubeVideoId = (url: string) => {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1).split("/")[0] || null;
    }

    if (parsedUrl.hostname.endsWith("youtube.com")) {
      if (parsedUrl.pathname === "/watch") {
        return parsedUrl.searchParams.get("v");
      }

      const pathParts = parsedUrl.pathname.split("/").filter(Boolean);

      if (pathParts[0] === "shorts" || pathParts[0] === "embed") {
        return pathParts[1] || null;
      }
    }
  } catch {
    return null;
  }

  return null;
};

export const YouTubeVideo = ({
  url,
  title = "YouTube video",
  className = "aspect-video w-full",
}: YouTubeVideoProps) => {
  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    return (
      <p className="flex min-h-32 items-center justify-center bg-black p-4 text-center text-sm text-white/70">
        Invalid YouTube link.
      </p>
    );
  }

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={`border-0 ${className}`}
    />
  );
};
