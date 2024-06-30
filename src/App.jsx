// import { useFriends } from "./context/FriendsContext";
// import { FriendsProvider } from "./context/FriendsContext";
import ChatPanel from "./ChatPanel";
import FriendsPanel from "./FriendsPanel";
import Profile from "./Profile";
// import Loader from "./Loader";
import { useState } from "react";

function App() {
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
    <>
      {/* { <Loader />} */}

      <div className=" grid grid-cols-3 ">
        <div>
          {profile && <Profile handleClick={handleFriendsPanel} />}
          {friendsPanel && <FriendsPanel handleClick={handleProfile} />}
        </div>
        {<ChatPanel />}
      </div>
    </>
  );
}

export default App;
