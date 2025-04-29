import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  if (!info || !info.snippet) return null; // First safe check

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;



  return (
    <div className="m-2 ">
      <img
        className="rounded-lg hover:rounded-none "
        src={thumbnails.medium.url}
        alt="youtube-thumbnails"
      />

      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
