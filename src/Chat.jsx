import { useState } from "react";
import { friends } from "./friends/friends";

function Chat() {
const [activeFriend, setActiveFriend]= useState('');
  
  return (
    <div className="bg-gray-800 text-white text-sm box-border  lg:w-full md:w-full h-lvh col-span-2 md:block sm:hidden">
      <div className="bg-gray-950 text-white text-lg lg:w-full md:w-full h-14 px-6 pt-3">
        <div
          className="flex border-b border-gray-900 hover:bg-gray-600 rounded-sm px-2 " 
          key={friends.id}
        >
          <img
            src={friends.image}
            alt="friends name"
            className="rounded-full h-12"
          />
        Chats
        </div>
      </div>
    </div>
  );
}

export default Chat;
