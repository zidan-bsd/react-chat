import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline, IoSend } from "react-icons/io5";
import { CgAttachment } from "react-icons/cg";
import { BsEmojiSmile } from "react-icons/bs";

import Profile from "../assets/person/person-2.png";

import img1 from "../assets/post/post-a2.png";
import img2 from "../assets/post/post-a3.png";

const Chat = (props) => {
  return (
    <div
      className="w-full relative h-screen overflow-scroll"
      style={{
        // minHeight: "599px"
        height: "100vh",
      }}
    >
      {/* Header */}
      <div className="w-full flex justify-between p-3 items-center">
        <div
          className="flex cursor-pointer"
          onClick={props.dataProfileToParent}
        >
          <img className="w-14 rounded-full" src={Profile} alt="" />
          <div className=" ml-2">
            <p className=" font-bold">Lidya Usamah</p>
            <p className=" font-light">Active now</p>
          </div>
        </div>
        <div className="flex">
          <IoIosSearch className="mx-3 hover:fill-Accent hover:stroke-Accent cursor-pointer scale-150" />
          <IoSettingsOutline className="mx-3 hover:fill-Accent hover:stroke-Accent cursor-pointer scale-150" />
        </div>
      </div>
      {/* Chat */}
      <div className="w-full px-6 flex flex-col">
        <div className=" self-start">
          <p className="hover:bg-Hover cursor-pointer font-bold bg-Secondary py-4 px-12 rounded-md">
            I saw a good place on the internet
          </p>
          <div className="flex">
            <img
              className=" rounded-xl w-20 h-20 object-cover"
              src={img1}
              alt=""
            />
            <img
              className=" rounded-xl w-20 h-20 object-cover"
              src={img2}
              alt=""
            />
          </div>
          <p className=" font-light text-sm">5:23</p>
        </div>
        <div className=" self-end">
          <p className="hover:bg-Hover cursor-pointer font-bold bg-Secondary py-4 px-12 rounded-md">
            that's a nice view
          </p>
          <p className="text-right font-light text-sm">5:26</p>
        </div>
        <div className=" self-start">
          <p className="hover:bg-Hover cursor-pointer font-bold bg-Secondary py-4 px-12 rounded-md">
            So, when do we meet?
          </p>
          <p className=" font-light text-sm">5:30</p>
        </div>
      </div>
      {/* Action */}
      <div className="flex bg-Secondary h-16 justify-between px-4 bottom-0 absolute left-0 right-0">
        <div className="flex flex-shrink-0 justify-center items-center w-16">
          <CgAttachment className=" scale-150 hover:stroke-Accent cursor-pointer" />
        </div>
        <div className="flex items-center w-full px-4">
          <input
            placeholder="Input text"
            type="text"
            className=" h-8 w-full mr-5 rounded-md pl-3"
          />
          <BsEmojiSmile className=" scale-150 hover:fill-Accent cursor-pointer" />
        </div>
        <div className="flex-shrink-0 flex justify-center items-center">
          <p className=" hover:bg-Accent cursor-pointer rounded-md bg-Errorr w-32 h-10 flex justify-center items-center font-bold text-Primary">
            send
            <IoSend className=" fill-Primary ml-4 scale-150" />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Chat;
