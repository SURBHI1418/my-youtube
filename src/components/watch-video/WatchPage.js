import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./comments/CommentContainer";
import LiveChat from "../chat-container/LiveChat";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    // <div className="w-full">
    //   <div className="px-[8%] flex w-full">
    //     <div className="w-full lg:w-2/3 aspect-video">
    //       <iframe
    //         className="w-full h-full rounded-lg lg:h-[85%]"
    //         src={"https://www.youtube.com/embed/" + searchParams.get("v")}
    //         title="YouTube video player"
    //         frameBorder="0"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //         referrerpolicy="strict-origin-when-cross-origin"
    //         allowFullScreen
    //       ></iframe>
    //     </div>
    //     <div className="">
    //       <LiveChat />
    //     </div>
    //   </div>
    //   <CommentContainer />
    // </div>
    <div className="w-full">
      <div className="px-[8%] flex flex-col lg:flex-row w-full h-[calc(80vh-80px)] gap-4 ">
        <div className="w-full lg:w-2/3 h-full">
          <iframe
            className="w-full h-full rounded-lg"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Live Chat */}
        <div className="w-full lg:w-1/3 lg:h-full h-1/2">
          <LiveChat />
        </div>
      </div>

      {/* Comments Section */}
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
