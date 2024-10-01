import { useState } from "react";
import { friends } from "./friends/friends";

function Chat() {
  const [activeFriend, setActiveFriend] = useState("");

  return (
    <div className="flex  bg-gray-950 text-white  box-border  lg:w-full md:w-full h-lvh col-span-2 md:block sm:hidden">
      <div className="bg-gray-800 text-white  lg:w-full md:w-full h-16  pt-2">
        <div
          className="flex  border-gray-900  rounded-sm   font-semibold "
          key={friends.id}
        >
          <div className="px-4 flex pb-2">
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
          </div>

          <div className=" flex  gap-12 pt-2 absolute right-10 ">
            <svg
              className="w-6 h-6 text-white dark:text-gray-200"
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

        <div className="absolute bottom-0 bg-gray-800 w-2/3  box-border h-14 pt-2 px-8 mx-auto flex gap-5">
          <svg
            viewBox="0 0 22  22"
            height="28"
            width="28"
            preserveAspectRatio="xMidYMid meet"
            className="mt-3 text-gray-300"
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 24 24"
          >
            <title>smiley</title>
            <path
              fill="currentColor"
              d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"
            ></path>
          </svg>

          <svg
            viewBox="0 0 24 24"
            width="34"
            preserveAspectRatio="xMidYMid meet"
            className=" text-gray-300 font-bold "
          >
            <title>plus</title>
            <path
              fill="currentColor"
              d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"
            ></path>
          </svg>
          <input
            type="text"
            className=" h-11  bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  block w-full ps-10 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-none"
            placeholder="Type a message"
          />

          <svg
            viewBox="0 0 28 28"
            height="30"
            width="28"
            preserveAspectRatio="xMidYMid meet"
            className="mt-2 text-gray-300"
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 24 24"
          >
            <title>ptt</title>
            <path
              fill="currentColor"
              d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Chat;
