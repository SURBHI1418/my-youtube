import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";

import { generateRandomName } from "../../utils/helper";
import { makeRandomMessage } from "../../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    // <div className="lg:h-[510px]  ml-2 p-2 lg:w-[150%] border border-black rounded-lg flex flex-col   ">
    //   <div className="h-[50px] w-full bg-white p-2">Top Chat</div>
    //   <div className="bg-slate-100 w-full flex-1 overflow-y-auto flex flex-col-reverse">
    <div className="h-full p-2 border border-black rounded-lg flex flex-col">
      <div className="h-[50px] bg-white p-2">Top Chat</div>
      <div className="bg-slate-100 flex-1 overflow-y-auto flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full border border-black "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Surbhi Kumari",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[75%] px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="font-bold mx-2 px-2 bg-red-500 ">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
