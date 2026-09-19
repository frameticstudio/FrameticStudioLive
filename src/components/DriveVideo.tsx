interface DriveVideoProps {
  url: string;
  title?: string;
  className?: string;
}

const getGoogleDriveFileId = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const filePathMatch = parsedUrl.pathname.match(/\/file\/d\/([^/]+)/);

    return (
      filePathMatch?.[1] ||
      parsedUrl.searchParams.get("id") ||
      null
    );
  } catch {
    return null;
  }
};

export const DriveVideo = ({
  url,
  title = "Google Drive video",
  className = "aspect-video w-full",
}: DriveVideoProps) => {
  const fileId = getGoogleDriveFileId(url);

  if (!fileId) {
    return (
      <p className="flex min-h-32 items-center justify-center bg-black p-4 text-center text-sm text-white/70">
        Invalid Google Drive link.
      </p>
    );
  }

  return (
    <iframe
      src={`https://drive.google.com/file/d/${fileId}/preview`}
      title={title}
      allow="autoplay"
      allowFullScreen
      className={`border-0 ${className}`}
    />
  );
};
