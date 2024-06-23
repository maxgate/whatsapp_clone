import ChatPanel from "./ChatPanel";
import FriendsPanel from "./FriendsPanel";

const App = () => {
  return (
    <div className=" grid grid-cols-3">
      <FriendsPanel />
      <ChatPanel />
    </div>
  );
};

export default App;
