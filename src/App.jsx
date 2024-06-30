// import { useFriends } from "./context/FriendsContext";
// import { FriendsProvider } from "./context/FriendsContext";
import ChatPanel from "./ChatPanel";
import FriendsPanel from "./FriendsPanel";
import Profile from "./Profile";
// import Loader from "./Loader";
import { createContext, useState } from "react";

export const FriendsContext = createContext();

export default function App() {
  // const { status } = useFriends();
  const [profile, setProfile] = useState(false);
  const [friendsPanel, setFriendsPanel] = useState(true);

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
      }}
    >
      {/* { <Loader />} */}

      <div className=" grid grid-cols-3 ">
        <div>
          {profile && <Profile />}
          {friendsPanel && <FriendsPanel />}
        </div>
        {<ChatPanel />}
      </div>
    </FriendsContext.Provider>
  );
}
