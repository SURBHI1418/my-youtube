import React from "react";
import Sidebar from "../sidebar/Sidebar";
import VideoContainer from "../video-container-components/VideoContainer";
import WatchPage from "../watch-video/WatchPage";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="grid grid-flow-col ">
      <Sidebar />
      {/* <VideoContainer />
      <WatchPage/> */}
      <Outlet/>
    </div>
  );
};

export default Body;
