// import { useFriends } from "./context/FriendsContext";
// import { FriendsProvider } from "./context/FriendsContext";
import Chat from "./Chat";
import ChatPanel from "./ChatPanel";
import FriendsPanel from "./FriendsPanel";
import Profile from "./Profile";
// import Loader from "./Loader";
import { createContext, useState } from "react";

export const FriendsContext = createContext();

export default function App() {
  const [chat, setChat] = useState(false);
  const [ChatingPanel, setChatPanel] = useState(true);
  const [profile, setProfile] = useState(false);
  const [friendsPanel, setFriendsPanel] = useState(true);

  function handleChat() {
    setChat(true);
    setChatPanel(false);
    setChat(true);

    console.log("let us chat");
  }
  function handleProfile() {
    setProfile((show) => !show);
    setFriendsPanel(!friendsPanel);
  }

  function handleFriendsPanel() {
    setFriendsPanel((show) => !show);
    setProfile(!profile);
  }

  return (
    <FriendsContext.Provider
      value={{
        handleProfileClick: handleProfile,
        handleFriendsClick: handleFriendsPanel,
        handleChatClick: handleChat,
        chat,
        profile,
        friendsPanel,
        setChat,
      }}
    >
      {/* {<Loader />} */}
      <div className=" grid grid-cols-3 ">
        <div>
          {profile && <Profile />}
          {friendsPanel && <FriendsPanel />}
        </div>

        {ChatingPanel && <ChatPanel />}
        {chat && <Chat />}
      </div>
    </FriendsContext.Provider>
  );
}
