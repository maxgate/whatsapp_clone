import profilepix from './assets/profile.png'
const FriendsList = () => {
  return <div className="text-center">
    <div className="flex border border-gray-300 hover:bg-gray-600">
        <img src={profilepix} alt="friends name" className="rounded-full h-10" />
        <h3>Max vincent</h3>
    </div>
  </div>;
};

export default FriendsList;
