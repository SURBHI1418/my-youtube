import React from "react";
import ButtonList from "./button-list/ButtonList";
import VideoPlayer from "./video-player/VideoPlayer";

const VideoContainer = () => {
  return (
    <div className="col-span-11">
    
      <ButtonList />
      <VideoPlayer />
    </div>
  );
};

export default VideoContainer;
