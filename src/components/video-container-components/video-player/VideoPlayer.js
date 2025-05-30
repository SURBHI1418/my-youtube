import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../../../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap  ">
      {videos.map((video) => (
        <Link
          to={"/watch?v=" + video.id}
          className="p-2 m-2 w-[100%] shadow-lg  hover:bg-gray-300 md:w-[30%] lg:w-[20%]"
        >
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoPlayer;
