import React from "react";
import { CircleUserRound } from "lucide-react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start shadow-sm p-2">
      <CircleUserRound className="mt-1" />
      <div className="px-2 flex flex-wrap break-words">
        <span className="font-bold mr-1">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
