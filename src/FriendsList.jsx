import { friends } from "./friends/friends";
// import profilepix from "./assets/profile.png";
const FriendsList = () => {
  return (
    <div className="pt-24">
      {/* <div className="flex  border-b border-gray-900 hover:bg-gray-600 rounded-sm px-2 py-3">
        <img
          src={profilepix}
          alt="friends name"
          className="rounded-full h-12"
        />
        <div className="flex flex-col  ">
          <h3 className="text-center text-gray-400 text-xl font-semibold">Max vincent</h3>
          <h2 className="ml-12  text-gray-400 ">hope you are doing well</h2>
        </div>
      </div> */}

      {friends.map((friend) => (
        <div
          className="flex border-b border-gray-900 hover:bg-gray-600 rounded-sm px-2 py-3"
          key={friend.id}
        >
          <img
            src={friend.image}
            alt="friends name"
            className="rounded-full h-12"
          />

          <div className="ml-6">
            <h3 className=" text-gray-300 text-2xl font-semibold">
              {friend.name}
            </h3>

            <h2 className=" text-gray-300 text-md">{friend.message}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
