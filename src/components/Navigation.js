import { IoChatbox } from "react-icons/io5";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import { RiHome2Fill, RiLogoutBoxRFill } from "react-icons/ri";

const Navigation = (props) => {
  return (
    <div className=" w-20 bg-Accent relative h-screen flex-shrink-0">
      <div className="flex flex-col items-center justify-between ">
        {/* Top */}
        <div>
          <RiHome2Fill
            className=" my-10 fill-FontLight cursor-pointer hover:fill-Primary"
            style={{ scale: "1.8" }}
          />
          <IoChatbox
            onClick={props.dataNavToParent}
            className=" my-10 fill-Primary cursor-pointer hover:fill-Primary"
            style={{ scale: "1.8" }}
          />
          <IoIosNotifications
            className=" my-10 fill-FontLight cursor-pointer hover:fill-Primary"
            style={{ scale: "1.8" }}
          />
          <FaAddressBook
            className=" my-10 fill-FontLight cursor-pointer hover:fill-Primary"
            style={{ scale: "1.8" }}
          />
          <IoIosSettings
            className=" my-10 fill-FontLight cursor-pointer hover:fill-Primary"
            style={{ scale: "1.8" }}
          />
        </div>
        {/* Bottom */}
        <div className="w-full h-16 flex justify-center items-center absolute bottom-0">
          <RiLogoutBoxRFill
            className=" fill-FontLight hover:fill-Primary cursor-pointer"
            style={{ scale: "1.8" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
