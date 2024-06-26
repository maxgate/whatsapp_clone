import { GoArrowLeft } from "react-icons/go";
import { RiPencilFill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


// import coverpix from "./assets/maxgate.png";
const Profile = () => {
  return (
    <div className="bg-gray-900 text-white text-sm  border-r border-gray-800 h-screen col-span-1 overflow-auto">
      <div className="text-gray-200 font-semibold  text-xl pt-16 flex">
        <span className="pt-2 mx-8">
          <GoArrowLeft className="cursor-pointer text-2xl text-white font-bold" />
        </span>
        Profile
      </div>
      <div className=" bg-gray-950 h-48 mt-4 ">
        <div className="bg-cover-picture h-60 w-full cursor-pointer">
          <div className=" pt-32  flex">
            <img
              src="src/assets/profile.png"
              alt="cover pix"
              className=" rounded-full h-36 mx-auto cursor-pointer "
            />
            <span className="rounded-full bg-gray-800 w-14 h-14 text-center mr-6 my-8  ">
              <RiPencilFill className="text-green-700 text-2xl text-center mx-auto my-4 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="flex">
          <FaAddressCard className="text-gray-400 text-lg mx-8 my-1" />
          <h2 className="text-xl text-gray-300">Maxgate Technologies</h2>
        </div>
        <div className="">
          <h6 className="mx-20 text-gray-400 mt-4 text-xs w-60 ">
            This name will be visible to yoiur whatsApp customers and be edited
            from the app on your mobile device
          </h6>
        </div>

        <div className="flex mt-6">
          <MdOutlinePayments className="text-gray-400 text-4xl mx-8 my-" />
          <h2 className="text-md text-gray-300">
            Display of ultimate professionalism.
            <br /> We specialize in offering solutions to the teaming global
            problems.
          </h2>
          <RiPencilFill className="text-gray-400 text-3xl mt-4 mr-4 cursor-pointer" />
        </div>

        <div className="flex mt-8">
          <FaTag className="text-gray-400 text-lg mx-8 my-1" />
          <h2 className="text-xl text-gray-300">Internet Cafe</h2>
          <RiPencilFill className="text-gray-400 mt-2 ml-52 text-xl   cursor-pointer" />
        </div>

        <div className="flex mt-8">
          <IoMdMail className="text-gray-400 text-lg mx-8 my-1" />
          <h2 className="text-xl text-gray-300">kelechivincy@gmail.com</h2>
          <RiPencilFill className="text-gray-400 mt-2 ml-28 text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
