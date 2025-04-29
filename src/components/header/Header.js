import React from "react";
import { AlignJustify, CircleUserRound, Search } from "lucide-react";
import { togglerMenu } from "../../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();

  const togglerMenuHandler = () => {
    dispatch(togglerMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-2 ">
        <AlignJustify className="cursor-pointer" onClick={togglerMenuHandler} />
        <a href="\">
          <img
            className="h-8 w-23 mx-4  cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-9 px-8 ">
        <input
          className="border border-gray-400 w-1/2 p-2 rounded-l-full"
          type="text"
        />

        <button className="border border-gray-400 p-2 rounded-r-full absolute">
          <Search className=" " />
        </button>
      </div>
      <div className="col-span-1">
        <CircleUserRound />
      </div>
    </div>
  );
};

export default Head;
