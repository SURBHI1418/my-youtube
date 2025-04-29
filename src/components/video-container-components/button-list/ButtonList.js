import React from "react";
import Button from "./Button";
import { useState } from "react";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Music",
    "Web Series",
    "Live",
    "Cooking",
    "News",
    "Cricket",
    "Gaming",
    "Swimming",
    "Love Story",
    "Bollywood Music",
    "Love Songs",
    "Mantras",
    "Gaming Show",
  ];
  const [showMore, setShowMore] = useState(false);

  const visibleButtons = buttonNames.slice(0, 9);
  const extraButtons = buttonNames.slice(5);

  return (
    <div className>
      <div className={`flex gap-2 flex-wrap`}>
        {visibleButtons.map((name, index) => (
          <button key={index} className="buttonlist">
            {name}
          </button>
        ))}

        {showMore &&
          extraButtons.map((name, index) => (
            <button key={index + 5} className="buttonlist">
              {name}
            </button>
          ))}
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-black text-white hover:bg-white hover:text-black font-bold px-4 py-2 rounded-full w-10 h-10 flex items-center justify-center mt-3 "
        >
          {showMore ? "<" : ">"}
        </button>
      </div>
    </div>
  );
};

export default ButtonList;
