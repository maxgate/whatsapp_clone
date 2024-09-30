import { useState } from "react";
import { friends } from "./friends/friends";

function Chat() {
  const [activeFriend, setActiveFriend] = useState("");

  return (
    <div className="bg-gray-800 text-white  box-border  lg:w-full md:w-full h-lvh col-span-2 md:block sm:hidden">
      <div className="bg-gray-950 text-white  lg:w-full md:w-full h-16 px-4 pt-2">
        <div
          className="flex  border-gray-900  rounded-sm   font-semibold "
          key={friends.id}
        >
          <img
            src="/profile.png"
            alt="friends name"
            className="rounded-full h-10"
          />
          <div className="block ">
            <span className="px-4 text-md font-bold">Max Vincent</span>

            <span className="px-4 flex text-[14px] text-gray-400 ">
              last seen today at 11:10{" "}
            </span>
          </div>
          <div className=" flex pl-[550px] gap-12 pt-2 ">
            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <title>Search</title>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>

            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              className=""
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <title>menu</title>
              <path
                fill="currentColor"
                d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
              ></path>
            </svg>
          </div>
        </div>
        <div className=" ">search bar</div>
      </div>
    </div>
  );
}

export default Chat;
