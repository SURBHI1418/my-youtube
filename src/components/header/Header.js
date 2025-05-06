import React, { useEffect, useRef, useState } from "react";
import { AlignJustify, CircleUserRound, Search } from "lucide-react";
import { togglerMenu } from "../../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import SearchResult from "./SearchResult";
import { cacheResults } from "../../utils/searchSlice";

const Head = () => {
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searhSuggestion, setSearchSuggestion] = useState([]);

  const dispatch = useDispatch();
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowSuggestion(false);
        }
      },
      { threshold: 0.1 }
    );

    if (inputRef.current) {
      observer.observe(inputRef.current);
    }

    return () => {
      if (inputRef.current) {
        observer.unobserve(inputRef.current);
      }
    };
  }, []);

  const serachCache= useSelector(store=> store.search);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (serachCache[searchQuery]) {
        setSearchSuggestion(serachCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    //Make an API call after ever key press
    //But if the difference between 2 API call is  <200 ms
    // Decline the API call
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    console.log("API CALL - "+searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestion(json[1]);

    //update Cache
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }));
  };

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
          placeholder="Search"
          value={searchQuery}
          ref={inputRef}
          onChange={(e) => {
            if (!showSuggestion) {
              setShowSuggestion(true);
            }
            setSearchQuery(e.target.value);
          }}
          onFocus={() => setShowSuggestion(true)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full absolute">
          <Search className=" " />
        </button>
        {showSuggestion && <SearchResult suggestions={searhSuggestion} />}
      </div>
      <div className="col-span-1">
        <CircleUserRound />
      </div>
    </div>
  );
};

export default Head;
