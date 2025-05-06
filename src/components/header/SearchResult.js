import React from "react";
import { Search } from "lucide-react";

const SearchResult = ({ suggestions = [] }) => {
  return (
    <div>
      <div className="fixed bg-white py-2 px-5 lg:w-[29.5rem] md:w-[16.5rem] shadow-lg rounded-xl  border border-gray-100 w-[4.5rem] ">
        <ul>
          {/* <li className=" hover:bg-gray-200 hover:cursor-default">
            <Search className='inline-block mr-2 size-4' />

                iphone */}

          {suggestions?.map((item, index) => (
            <li
              key={index}
              className="hover:bg-gray-200 hover:cursor-default py-2 "
            >
              <Search className="inline-block mr-2 size-4" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResult;
