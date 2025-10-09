import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { getItemFromLS, removeDataFromLS } from "../../LocalStorage/LocalStorage";
import { useLoaderData } from "react-router";
import InstalledApp from "../../Components/InstalledApp/InstalledApp";
import { toast } from "react-toastify";



const Installation = () => {

  const [installed, setInstalled] =useState([])

  const loadedAppsData = useLoaderData();


  useEffect(()=>{
  const StoredData = getItemFromLS();
   const allInstalledApps = loadedAppsData.filter((data) =>
    StoredData.includes(data.id))
    setInstalled([...allInstalledApps]);

},[])


 const handleUninstall =(id,title)=>{
   const remainingData = installed.filter((data)=>data.id!== parseInt(id));
   setInstalled([...remainingData]);
   removeDataFromLS(id);
   toast(`${title} App is being Uninstall`)
 }
 const handleSortHighToLow=()=>{
    const sortHighToLow = installed.sort((a,b)=>b.downloads-a.downloads);
    setInstalled([...sortHighToLow]);
 }
 const handleSortLowToHigh =()=>{
  const sortLowToHigh = installed.sort((a,b)=>a.downloads-b.downloads);
    setInstalled([...sortLowToHigh]);

 }

  return (
    <div className="bg-gray-100">
      <h1 className="text-4xl font-bold text-center pt-5">
        Your Installed Apps
      </h1>
      <p className="text-center py-3">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="px-20 flex justify-between items-center">
        <p className="text-2xl font-bold">{installed.length} Apps Found</p>
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={handleSortHighToLow}>High-Low</a>
            </li>
            <li>
              <a onClick={handleSortLowToHigh}>Low-High</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-20 mt-5 pb-5 " >
      {
        installed.map((data)=><InstalledApp key={data.id}
        handleUninstall={handleUninstall} data={data}></InstalledApp>)
      }
      </div>
    </div>
  );
};

export default Installation;
