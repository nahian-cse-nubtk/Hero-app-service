import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import downloadImg from "/icon-downloads.png";
import ratingImg from "/icon-ratings.png";
import demoApp from "/demo.webp";

const Installation = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="text-4xl font-bold text-center pt-5">
        Your Installed Apps
      </h1>
      <p className="text-center py-3">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="px-20 flex justify-between items-center">
        <p className="text-2xl font-bold">1 Apps Found</p>
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Size</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-20 mt-5 pb-5 " >
        <div className="flex justify-between items-center bg-white p-3 rounded-md mb-5">
        <div className="flex gap-3 items-center  ">
          <div>
            <img className ="w-[80px] h-[80px]" src={demoApp} alt="installed app" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Forest: Focus for Productivity
            </h1>
            <div className="flex items-center gap-4 pt-1 ">
              <div>
                <p className=" text-green-400 flex gap-2   rounded-sm items-center">
                  <img className="w-4 h-4" src={downloadImg} alt="Download icon" /> 2.5M
                </p>
              </div>
              <div >
                <p className=" text-orange-400 flex gap-2  rounded-sm items-center">
                  <img className="w-4 h-4" src={ratingImg} alt="ratings" /> <span>5</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>

        <button className="btn bg-[#00D390] text-white ">Uninstall</button>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
