import { RxCross2 } from "react-icons/rx";
import { IoCall } from "react-icons/io5";
import { BiSolidMessage } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { CiFileOn } from "react-icons/ci";

import ProfileImg from "../assets/person/person-2.png";

const Profile = (props) => {
  return (
    <div
      className="bg-Secondary w-80 flex-shrink-0 px-6 relative h-screen overflow-scroll"
      style={{
        height: "100vh !important",
      }}
    >
      {/* Close Btn */}
      <RxCross2
        onClick={props.dataProfileToParent}
        className="absolute scale-150 top-4 left-3 cursor-pointer"
      />
      {/* Header */}
      <div className="flex flex-col">
        <div className="p-8 flex flex-col justify-center items-center">
          <img className="w-20 rounded-full" src={ProfileImg} alt="" />
          <p className="font-bold">Lidya Usamah</p>
          <p className="font-thin text-sm">@Lidya889</p>
        </div>
        <div className="flex justify-around px-2">
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <IoCall className=" bg-Hover w-10 h-10 rounded-full p-2 fill-Accent" />
            <p className=" font-semibold text-xs mt-1 text-center">Call</p>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <BiSolidMessage className=" bg-Hover w-10 h-10 rounded-full p-2 fill-Accent" />
            <p className=" font-semibold text-xs mt-1 text-center">Message</p>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <FaVideo className=" bg-Hover w-10 h-10 rounded-full p-2 fill-Accent" />
            <p className=" font-semibold text-xs mt-1 text-center">Vidio</p>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <HiDotsHorizontal className=" bg-Hover w-10 h-10 rounded-full p-2 fill-Accent" />
            <p className=" font-semibold text-xs mt-1 text-center">More</p>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className=" h-1px my-4 w-full bg-FontLight"></div>
      {/* Information */}
      <div>
        <div className="my-2">
          <p className=" font-semibold">Phone</p>
          <p className=" font-thin">+t (X00) T53-89-Y03</p>
        </div>
        <div className="my-2">
          <p className=" font-semibold">Gender</p>
          <p className=" font-thin">Female</p>
        </div>
        <div className="my-2">
          <p className=" font-semibold">Date of birth</p>
          <p className=" font-thin">17 march 1999</p>
        </div>
      </div>
      {/* Divider */}
      <div className=" h-1px my-4 w-full bg-FontLight"></div>
      {/* Media */}
      <div className="">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl">Shared files</p>
          <p className=" text-Errorr font-medium">View all</p>
        </div>
        <div className="flex justify-between items-center mt-2 cursor-pointer">
          <div className="flex">
            <div className="mr-2 rounded-xl bg-Hover w-12 justify-center items-center flex">
              <CiFileOn className=" scale-150" />
            </div>
            <div>
              <p className="font-bold">Camera 1</p>
              <p className="font-light">17 jan, 2024, 5:23</p>
            </div>
          </div>
          <div>
            <p className="font-bold">1.9 Mb</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 cursor-pointer">
          <div className="flex">
            <div className="mr-2 rounded-xl bg-Hover w-12 justify-center items-center flex">
              <CiFileOn className=" scale-150" />
            </div>
            <div>
              <p className="font-bold">Camera 2</p>
              <p className="font-light">17 jan, 2024, 5:23</p>
            </div>
          </div>
          <div>
            <p className="font-bold">1.4 Mb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
