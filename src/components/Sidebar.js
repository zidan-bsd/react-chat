import { RiContactsLine } from "react-icons/ri";
import { BsArrowsCollapseVertical } from "react-icons/bs";

import dataUser from "../datas/User";
import person1 from "../assets/person/person-1.png";

const Sidebar = (props) => {
  return (
    <div className="w-80 bg-Secondary flex-shrink-0 relative h-screen overflow-scroll">
      <div className=" flex justify-between w-full pt-4 px-4 ">
        <div className="flex items-center">
          <img className=" w-16 h-16 rounded-full" src={person1} alt="" />
          <div className=" ml-2">
            <p className="font-bold">Zidan</p>
            <p className=" text-sm font-light">Active now</p>
          </div>
        </div>
        <div
          onClick={props.dataSidebarToParent}
          className=" flex items-center "
        >
          <BsArrowsCollapseVertical className=" fill-Primary scale-150 bg-Accent p-2 w-8 h-8 mr-2 rounded-md cursor-pointer hover:bg-Hover hover:fill-Accent" />
        </div>
      </div>
      <div className=" h-1px my-4 w-full bg-FontLight"></div>
      <div className="px-2 flex items-center mb-2">
        <input
          type="text"
          placeholder="Search"
          className=" mr-2 w-full pl-2 h-8 rounded-md border border-solid border-borderAccent bg-Hover focus:outline-0"
        />
        <RiContactsLine className=" cursor-pointer mr-2 scale-150 hover:fill-Accent" />
      </div>
      <div className=" flex flex-col">
        {dataUser.map((item, index) => (
          <div
            key={index}
            className="flex relative px-3 cursor-pointer hover:bg-Hover py-4"
          >
            <img className="w-12 rounded-full mr-2" src={item.img} alt="" />
            <div>
              <p className=" font-bold">{item.name}</p>
              <p className="font-light">{item.msg}</p>
            </div>
            <p className=" absolute top-0 font-light right-4">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
