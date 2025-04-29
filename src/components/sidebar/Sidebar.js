import React from "react";
import {
  House,
  Youtube,
  History,
  ListVideo,
  GraduationCap,
  Clock4,
  ThumbsUp,
  Flame,
  Music4,
  Trophy,
  Clapperboard,
  Gamepad2,
  Settings,
  CircleHelp,
  MessageSquareWarning,
  Video,
  PencilLine,
  CookingPot,
  Code,
} from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early Return Pattern
  if (!isMenuOpen) return null;
  return (
    <div className="p-8 shadow-lg col-span-1 ">
      <div className="ul-li-pointor">
        <h1 className="accordion-sidebar ul-li-design ">
          {" "}
          <House />
          <Link to="/">

          Home
          </Link>
        </h1>
        <ul className="border-b-2 ">
          <li className="ul-li-design">
            <Video />
            Shorts
          </li>
          <li className="ul-li-design">
            <Youtube /> Subscription
          </li>
        </ul>

        <h1 className="accordion-sidebar"> You</h1>

        <ul className=" border-b-2">
          <li className="ul-li-design">
            <History />
            History
          </li>
          <li className="ul-li-design">
            <ListVideo />
            Playlists
          </li>
          <li className="ul-li-design">
            <Youtube />
            Your Video
          </li>
          <li className="ul-li-design">
            <GraduationCap />
            Your Courses
          </li>
          <li className="ul-li-design">
            <Clock4 />
            Watch Later
          </li>
          <li className="ul-li-design">
            <ThumbsUp />
            Liked Video
          </li>
        </ul>

        <h1 className="accordion-sidebar">Subscription</h1>

        <ul className=" border-b-2">
          <li className="ul-li-design">
            <PencilLine />
            Reading
          </li>
          <li className="ul-li-design">
            <Code />
            Coding
          </li>
          <li className="ul-li-design">
            <CookingPot />
            Cooking
          </li>
        </ul>

        <h1 className="accordion-sidebar">Explore</h1>

        <ul className=" border-b-2">
          <li className="ul-li-design">
            <Flame />
            Trending
          </li>
          <li className="ul-li-design">
            <Music4 />
            Music
          </li>
          <li className="ul-li-design">
            <Trophy />
            Sports
          </li>
          <li className="ul-li-design">
            <Gamepad2 />
            Gaming
          </li>
          <li className="ul-li-design">
            <Clapperboard />
            Films
          </li>
          <li className="ul-li-design">
            <GraduationCap />
            Courses
          </li>
        </ul>

        <ul className="py-5">
          <li className="ul-li-design">
            <Settings />
            Setting
          </li>
          <li className="ul-li-design">
            <CircleHelp />
            Help
          </li>
          {/* <li className="flex items-center gap-2">
          
            <MessageSquareWarning  />
            Send feedback
          </li> */}
          <li className="ul-li-design">
            <MessageSquareWarning />
            Send feedback
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
