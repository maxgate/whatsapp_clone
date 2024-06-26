import coverpix from "./assets/maxgate.png";
const Profile = () => {
  return (
    <div className="bg-gray-900 text-white text-sm  border-r border-gray-800 h-screen col-span-1 overflow-auto">
      <div className="text-gray-300 mx-12 px-12 text-xl pt-16">profile</div>
      <div className=" bg-gray-950 h-48">
        <img src={coverpix} alt="cover pix" className="h-48 w-full bg-cover place-content-center"/>
      </div>
    </div>
  );
};

export default Profile;
