import ChatPanel from "./ChatPanel";
// import FriendsPanel from "./FriendsPanel";
import Profile from "./Profile";

const App = () => {
  return (
    <div className=" grid grid-cols-3 ">
      {/* <FriendsPanel /> */}
      <Profile/>
      <ChatPanel />
    </div>
  );
};

export default App;
