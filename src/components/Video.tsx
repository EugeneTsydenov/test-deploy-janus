import * as React from "react";

const Video = ({
  stream = null,
  muted = false,
  autoPlay = true,
  className = '',
}: {
  stream: MediaStream | null;
  muted?: boolean;
  autoPlay?: boolean;
  className?: string;
}) => {
  const ref = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    if (ref.current && stream) {
      ref.current.srcObject = stream;
    }
  }, [stream]);

  return <video ref={ref} muted={muted} autoPlay={autoPlay} playsInline className={`w-full h-full object-cover ${className}`}/>;
};

export default Video;
