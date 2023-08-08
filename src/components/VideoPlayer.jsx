import React from "react";

const VideoPlayer = () => {
  const videoSrc = process.env.PUBLIC_URL + "/example.mp4";

  return (
    <div>
      <video controls width="540" height="260" className="videoControl">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
