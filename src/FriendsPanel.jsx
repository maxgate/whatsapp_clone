import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { friends } from "./friends/friends";
// import { useFriends } from "./context/FriendsContext";
// import FriendsList from "./FriendsList";
import { useContext } from "react";
import { FriendsContext } from "./App";

// functions to filter friends

const FriendsPanel = () => {
  const { handleFriendsClick } = useContext(FriendsContext);
  const { handleChatClick } = useContext(FriendsContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredfriends, setfilteredfriends] = useState([]);

  useEffect(() => {
    const filterNames = () => {
      return friends.filter(
        (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        handleChatClick
      );
    };
    const filteredData = filterNames(searchTerm);
    setfilteredfriends(filteredData);

    console.log(filteredfriends);
  }, [searchTerm]);

  return (
    <div className="bg-gray-950 text-white text-sm  border-r border-gray-800 h-screen col-span-1 overflow-auto w-full ">
      <div className="fixed w-1/3  top-0 left-0   bg-black ">
        <div className=" flex py-2.5 px-6 bg-gray-900 ">
          <img
            src="../profile.png"
            alt=" profile picture"
            className="rounded-full h-10"
            // onClick={() => dispatch({ type: "profile" })}
            onClick={handleFriendsClick}
          />

          <div className="px-20 py-2 flex gap-7">
            <svg
              viewBox="0 0 24 24"
              height="26"
              width="26"
              preserveAspectRatio="xMidYMid meet"
              className=""
              fill="none"
            >
              <title>business-advertise-outline</title>

              <path
                d="M18.9999 11C18.4476 11 18 11.4477 18 12C18 12.5523 18.4476 13 18.9999 13C19.6495 13 20.342 13 21.0001 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21.0001 11C20.342 11 19.6495 11 18.9999 11Z"
                fill="currentColor"
              ></path>
              <path
                d="M16.6011 16.8072C16.2704 17.2516 16.3632 17.8787 16.8073 18.2099C17.326 18.5966 17.8786 19.0107 18.4032 19.4036C18.8437 19.7336 19.4676 19.6446 19.7972 19.2037C20.129 18.7599 20.0392 18.1303 19.5958 17.7979C19.0715 17.4049 18.5194 16.9903 18.0014 16.6014C17.5596 16.2697 16.931 16.364 16.6011 16.8072Z"
                fill="currentColor"
              ></path>
              <path
                d="M19.6005 6.20285C20.0429 5.87049 20.1305 5.24205 19.7992 4.79887C19.4685 4.35657 18.8426 4.2672 18.4007 4.59844C17.8751 4.99242 17.3215 5.40811 16.8021 5.79802C16.3595 6.13031 16.2704 6.75915 16.6018 7.20242C16.9318 7.6438 17.5567 7.73263 17.998 7.4026C18.5185 7.01339 19.0735 6.59866 19.6005 6.20285Z"
                fill="currentColor"
              ></path>
              <path
                d="M4 9C2.9 9 2 9.9 2 11V13C2 14.1 2.9 15 4 15H5V19C5 19.5523 5.44772 20 6 20C6.55228 20 7 19.5523 7 19V15H8L13 18V6L8 9H4ZM9.03 10.71L11 9.53V14.47L9.03 13.29L8.55 13H8H4V11H8H8.55L9.03 10.71Z"
                fill="currentColor"
              ></path>
              <path
                d="M15.5 11.9999C15.5 10.6699 14.92 9.4699 14 8.6499V15.3399C14.92 14.5299 15.5 13.3299 15.5 11.9999Z"
                fill="currentColor"
              ></path>
              {/* </g> */}
              <defs>
                <clipPath id="clip0_49_15701">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>

            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              className=""
              fill="none"
            >
              <title>community-outline</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.37092 18.6728C6.22765 18.5403 6.10431 18.3762 6.00888 18.1973C5.88011 17.9559 5.80217 17.6876 5.79472 17.4335C5.77992 16.9291 5.75694 15.9341 5.81691 15.4918C5.84367 15.2944 5.89021 15.111 5.95079 14.9421C6.02312 14.7405 6.11792 14.5597 6.22835 14.3977C6.44698 14.077 6.72688 13.8296 7.01486 13.6386C7.04895 13.616 7.08314 13.5941 7.11736 13.5731C7.57933 13.2888 8.09602 13.1117 8.52831 12.9865C8.90306 12.878 9.34961 12.7693 9.85702 12.6823C10.485 12.5746 11.2062 12.5001 12 12.5001C12.7937 12.5001 13.5149 12.5746 14.1429 12.6823C14.6503 12.7693 15.0969 12.878 15.4716 12.9865C15.9039 13.1117 16.4206 13.2888 16.8826 13.5731C16.9168 13.5941 16.951 13.616 16.9851 13.6386C17.2731 13.8296 17.553 14.077 17.7716 14.3977C17.882 14.5597 17.9768 14.7405 18.0492 14.9421C18.1097 15.111 18.1563 15.2944 18.183 15.4918C18.243 15.9341 18.22 16.9291 18.2052 17.4335C18.1978 17.6876 18.1198 17.9559 17.9911 18.1973C17.8956 18.3762 17.7723 18.5403 17.629 18.6729C17.4138 18.872 17.1536 19 16.8756 19H7.12434C6.84632 19 6.58614 18.872 6.37092 18.6728ZM19.9606 15.4041C20.0099 15.9938 20.0031 16.2628 19.992 17C19.9887 17.22 19.985 17.3926 19.9822 17.4856C19.9692 17.9298 19.8643 18.6252 19.6869 19H22.6608C23.3769 19 23.9744 17.1535 23.9908 16.4244C24 16.0153 24.0117 16.2932 23.9736 15.9559C23.8921 15.2339 23.4788 14.7098 23.0245 14.3596C22.5875 14.0227 22.0691 13.8088 21.6087 13.6766C21.6029 13.675 21.5972 13.6733 21.5915 13.6717C21.5881 13.6707 21.5847 13.6698 21.5813 13.6688C21.5228 13.6524 21.4627 13.6362 21.401 13.6205C20.8883 13.49 20.2632 13.389 19.5555 13.389C19.5378 13.389 19.52 13.3891 19.5023 13.3892C19.4137 13.3898 19.3264 13.392 19.2405 13.3957C19.355 13.5637 19.4612 13.7454 19.5555 13.942C19.5647 13.9611 19.5738 13.9805 19.5828 13.9999C19.6332 14.1094 19.68 14.2234 19.7226 14.342C19.8237 14.6239 19.9007 14.9282 19.9447 15.253C19.9506 15.2963 19.9559 15.347 19.9606 15.4041ZM17.9339 11.4492C18.2894 11.7225 18.7156 11.9081 19.1802 11.9737C19.3028 11.991 19.4281 12 19.5555 12C20.1263 12 20.6553 11.8201 21.089 11.5141C21.7744 11.0305 22.2222 10.2319 22.2222 9.33C22.2222 7.85724 21.0283 6.67 19.5555 6.67C18.7591 6.67 18.0441 7.01722 17.5555 7.56905C17.1406 8.03762 16.8889 8.65371 16.8889 9.33C16.8889 9.57007 16.9206 9.80282 16.9801 10.0243C17.1343 10.5986 17.4753 11.0968 17.9339 11.4492ZM14.8977 9.61901C14.9641 9.52593 15.0262 9.42949 15.0835 9.33C15.3838 8.80927 15.5555 8.20499 15.5555 7.56C15.5555 7.36964 15.5406 7.18272 15.5117 7.00038C15.2434 5.30182 13.7733 4 12 4C10.2267 4 8.75657 5.30182 8.4882 7.00038C8.45939 7.18272 8.44443 7.36964 8.44443 7.56C8.44443 8.20499 8.61617 8.80927 8.91642 9.33C8.97378 9.42949 9.03584 9.52593 9.10229 9.61901C9.38894 10.0206 9.75728 10.3599 10.1831 10.6129C10.7148 10.9287 11.3362 11.11 12 11.11C12.6638 11.11 13.2851 10.9287 13.8168 10.6129C14.2427 10.3599 14.611 10.0206 14.8977 9.61901ZM7.01988 10.0243C7.07937 9.80282 7.1111 9.57007 7.1111 9.33C7.1111 8.65371 6.85934 8.03762 6.44443 7.56905C5.95581 7.01722 5.2409 6.67 4.44444 6.67C2.97168 6.67 1.77777 7.85724 1.77777 9.33C1.77777 10.2319 2.22555 11.0305 2.91093 11.5141C3.34469 11.8201 3.87362 12 4.44444 12C4.5718 12 4.6971 11.991 4.8197 11.9737C5.28435 11.9081 5.71054 11.7225 6.06606 11.4492C6.52463 11.0967 6.86561 10.5985 7.01988 10.0243ZM2.599 13.6205C2.53726 13.6362 2.47715 13.6524 2.41872 13.6688C2.41531 13.6698 2.41189 13.6707 2.40848 13.6717C2.40276 13.6733 2.39702 13.675 2.39128 13.6766C1.9309 13.8088 1.41245 14.0227 0.975466 14.3596C0.521192 14.7098 0.107939 15.2339 0.0263682 15.9559C-0.0117388 16.2932 2.95136e-05 17.0153 0.00922726 17.4244C0.0256195 18.1535 0.623061 19 1.33916 19H4.31303C4.13562 18.6252 4.03074 17.9298 4.01771 17.4856C4.01498 17.3926 4.01127 17.22 4.00795 17C3.99682 16.2628 3.99008 15.9938 4.03932 15.4041C4.04409 15.347 4.04938 15.2963 4.05525 15.253C4.09928 14.9282 4.17628 14.6239 4.27738 14.342C4.31992 14.2234 4.36671 14.1094 4.41718 13.9999C4.42615 13.9805 4.43524 13.9612 4.44444 13.942C4.53872 13.7454 4.64492 13.5636 4.7595 13.3957C4.67357 13.392 4.58626 13.3898 4.49762 13.3892C4.47995 13.3891 4.46224 13.389 4.44446 13.389C3.73676 13.389 3.11171 13.49 2.599 13.6205ZM12 14.5001C10.7893 14.5001 9.78078 14.706 9.08457 14.9076C8.70827 15.0166 8.39668 15.1342 8.16548 15.2764C7.94245 15.4137 7.86482 15.5296 7.83338 15.6173C7.81839 15.6591 7.80612 15.7064 7.79878 15.7605C7.79943 15.7557 7.7992 15.7596 7.7984 15.7735C7.79628 15.8102 7.79017 15.9159 7.78551 16.1142C7.77998 16.3491 7.77773 16.6382 7.77778 16.9391C7.77784 17.3256 7.78168 16.7121 7.78618 17H16.2138C16.2183 16.7121 16.2221 17.3256 16.2222 16.9391C16.2222 16.6383 16.22 16.3491 16.2144 16.1142C16.2098 15.9159 16.2037 15.8101 16.2016 15.7735C16.2007 15.7596 16.2005 15.7557 16.2012 15.7605C16.1938 15.7064 16.1816 15.6591 16.1666 15.6173C16.1351 15.5296 16.0575 15.4137 15.8345 15.2764C15.6033 15.1342 15.2917 15.0166 14.9154 14.9076C14.2192 14.706 13.2107 14.5001 12 14.5001ZM12 6C11.1441 6 10.4444 6.69763 10.4444 7.56C10.4444 8.41504 11.1368 9.11 12 9.11C12.8632 9.11 13.5555 8.41504 13.5555 7.56C13.5555 6.69763 12.8558 6 12 6Z"
                fill="currentColor"
              ></path>
            </svg>

            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              className=""
              fill="none"
            >
              <title>status-outline</title>
              <path
                d="M13.5627 3.13663C13.6586 2.59273 14.1793 2.22466 14.7109 2.37438C15.7904 2.67842 16.8134 3.16256 17.7359 3.80858C18.9322 4.64624 19.9304 5.73574 20.6605 7.0005C21.3906 8.26526 21.8348 9.67457 21.9619 11.1294C22.06 12.2513 21.9676 13.3794 21.691 14.4662C21.5548 15.0014 20.9756 15.2682 20.4567 15.0793C19.9377 14.8903 19.6769 14.317 19.7996 13.7785C19.9842 12.9693 20.0421 12.1343 19.9695 11.3035C19.8678 10.1396 19.5124 9.01218 18.9284 8.00038C18.3443 6.98857 17.5457 6.11697 16.5887 5.44684C15.9055 4.96844 15.1535 4.601 14.3605 4.3561C13.8328 4.19314 13.4668 3.68052 13.5627 3.13663Z"
                fill="currentColor"
              ></path>
              <path
                d="M18.8943 17.785C19.3174 18.14 19.3758 18.7749 18.9803 19.1604C18.1773 19.9433 17.2465 20.5872 16.2257 21.0631C14.9022 21.6802 13.4595 22 11.9992 21.9999C10.5388 21.9998 9.09621 21.6798 7.77275 21.0625C6.75208 20.5865 5.82137 19.9424 5.01843 19.1595C4.62302 18.7739 4.68155 18.139 5.10467 17.784C5.52779 17.4291 6.15471 17.4898 6.55964 17.8654C7.16816 18.4298 7.86233 18.8974 8.61817 19.25C9.67695 19.7438 10.831 19.9998 11.9993 19.9999C13.1676 20 14.3217 19.7442 15.3806 19.2505C16.1365 18.898 16.8307 18.4304 17.4393 17.8661C17.8443 17.4906 18.4712 17.43 18.8943 17.785Z"
                fill="currentColor"
              ></path>
              <path
                d="M3.54265 15.0781C3.02367 15.267 2.44458 15.0001 2.30844 14.4649C2.03202 13.3781 1.93978 12.2502 2.03794 11.1283C2.16521 9.67361 2.60953 8.26444 3.33966 6.99984C4.06979 5.73523 5.06802 4.64587 6.2642 3.80832C7.18668 3.1624 8.20962 2.67833 9.28902 2.37434C9.82063 2.22462 10.3413 2.59271 10.4372 3.1366C10.5331 3.6805 10.1671 4.19311 9.63938 4.35607C8.84645 4.60094 8.09446 4.96831 7.41133 5.44663C6.45439 6.11667 5.65581 6.98816 5.0717 7.99985C4.4876 9.01153 4.13214 10.1389 4.03032 11.3026C3.95764 12.1334 4.01547 12.9683 4.19986 13.7775C4.32257 14.3159 4.06162 14.8892 3.54265 15.0781Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9999 16C14.2091 16 15.9999 14.2092 15.9999 12C15.9999 9.79088 14.2091 8.00002 11.9999 8.00002C9.7908 8.00002 7.99994 9.79088 7.99994 12C7.99994 14.2092 9.7908 16 11.9999 16ZM11.9999 18C15.3136 18 17.9999 15.3137 17.9999 12C17.9999 8.68631 15.3136 6.00002 11.9999 6.00002C8.68623 6.00002 5.99994 8.68631 5.99994 12C5.99994 15.3137 8.68623 18 11.9999 18Z"
                fill="currentColor"
              ></path>
            </svg>

            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              className=""
              fill="none"
            >
              <title>newsletter-outline</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8301 8.63404C16.3081 8.35745 16.9198 8.52076 17.1964 8.9988C17.7077 9.88244 18 10.9086 18 12C18 13.0914 17.7077 14.1176 17.1964 15.0012C16.9198 15.4792 16.3081 15.6425 15.8301 15.366C15.352 15.0894 15.1887 14.4776 15.4653 13.9996C15.8052 13.4122 16 12.7304 16 12C16 11.2696 15.8052 10.5878 15.4653 10.0004C15.1887 9.52237 15.352 8.91063 15.8301 8.63404ZM8.16995 8.63404C8.64798 8.91063 8.81129 9.52237 8.5347 10.0004C8.19484 10.5878 8 11.2696 8 12C8 12.7304 8.19484 13.4122 8.5347 13.9996C8.81129 14.4776 8.64798 15.0894 8.16995 15.366C7.69191 15.6425 7.08017 15.4792 6.80358 15.0012C6.29231 14.1176 6 13.0914 6 12C6 10.9086 6.29231 9.88244 6.80358 8.9988C7.08017 8.52076 7.69191 8.35745 8.16995 8.63404Z"
                fill="currentColor"
              ></path>
              <path
                d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.33243 16.4826L5.09622 17.2728C4.86428 18.0487 4.62086 18.8707 4.41748 19.5825C5.12931 19.3791 5.95126 19.1357 6.72722 18.9038L7.51743 18.6676L8.24444 19.057C9.36447 19.6571 10.6412 20 12 20C16.4154 20 20 16.4154 20 12C20 7.58457 16.4154 4 12 4C7.58457 4 4 7.58457 4 12C4 13.3588 4.34295 14.6355 4.94296 15.7556L5.33243 16.4826ZM3.18 16.7C2.63 18.54 2 20.69 2 21C2 21.55 2.45 22 3 22C3.31 22 5.46 21.37 7.3 20.82C8.7 21.57 10.3 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 13.7 2.43 15.3 3.18 16.7Z"
                fill="currentColor"
              ></path>
            </svg>

            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              className=""
              fill="none"
            >
              <title>new-chat-outline</title>
              <path
                d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z"
                fill="currentColor"
              ></path>
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

        <div className="py-2">
          <form className="flex items-center mx-6">
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  block w-full ps-10 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-none"
                placeholder="Search "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                height="20"
                width="20"
                preserveAspectRatio="xMidYMid meet"
                className=" ml-4 "
                fill="none"
              >
                <title>filter</title>
                <path
                  d="M11 18C10.7167 18 10.4792 17.9042 10.2875 17.7125C10.0958 17.5208 10 17.2833 10 17C10 16.7167 10.0958 16.4792 10.2875 16.2875C10.4792 16.0958 10.7167 16 11 16H13C13.2833 16 13.5208 16.0958 13.7125 16.2875C13.9042 16.4792 14 16.7167 14 17C14 17.2833 13.9042 17.5208 13.7125 17.7125C13.5208 17.9042 13.2833 18 13 18H11ZM7 13C6.71667 13 6.47917 12.9042 6.2875 12.7125C6.09583 12.5208 6 12.2833 6 12C6 11.7167 6.09583 11.4792 6.2875 11.2875C6.47917 11.0958 6.71667 11 7 11H17C17.2833 11 17.5208 11.0958 17.7125 11.2875C17.9042 11.4792 18 11.7167 18 12C18 12.2833 17.9042 12.5208 17.7125 12.7125C17.5208 12.9042 17.2833 13 17 13H7ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </form>
        </div>
      </div>

      <div className="pt-24">
        {filteredfriends.length > 0 &&
          filteredfriends.map((searchTerm) => (
            <div
              className="flex border-b border-gray-900 hover:bg-gray-600 rounded-sm px-2 py-3 cursor-pointer"
              key={searchTerm.id}
              onClick={handleChatClick}
            >
              <img
                src={searchTerm.image}
                alt="friends name"
                className="rounded-full h-12"
              />

              <div className="ml-6">
                <h3 className=" text-gray-300 text-2xl font-semibold">
                  {searchTerm.name}
                </h3>

                <h2 className=" text-gray-300 text-md">{searchTerm.message}</h2>
              </div>
            </div>
          ))}
      </div>
      {/* <FriendsList /> */}
    </div>
  );
};

FriendsPanel.propTypes = {
  onhandleClick: propTypes.bool,
};

export default FriendsPanel;
