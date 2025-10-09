import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";
import NotFound from "../../Components/NotFound/NotFound";

const Apps = () => {
    const AllData = useLoaderData();
    const [AppsData, setAppsdata] = useState([...AllData])
    // console.log(AppsData)
     const [loading, setLoading] = useState(false);
    const handleSearch =(e)=>{
      e.preventDefault();
      const searchValue = e.target.value.toLowerCase()
      setLoading(true);
      setTimeout(()=>{
      if(searchValue){
      const filteredValue = AppsData.filter((data)=>data.title.toLowerCase().includes(searchValue));
      setAppsdata([...filteredValue])
      }
      else{
        setAppsdata([...AllData])
      }
      setLoading(false);
    }, 500);
    }

  return (
    <div className="bg-gray-100 pb-10">
      <h1 className="text-5xl text-center font-bold pt-10">Our All Applications</h1>
      <p className="text-center pt-3">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between px-3 md:px-20 py-5">
        <div><p className=" text-[15px] md:text-3xl font-bold">({AppsData.length}) Apps Found</p></div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input onChange={handleSearch} type="search" required placeholder="Search Apps" name="search"/>
          </label>
        </div>
      </div>
       {loading && (
        <div className="flex justify-center my-4">
          <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className={`grid ${AppsData.length?'grid-cols-1 md:grid-cols-4':'grid-cols-1'} gap-5 px-3 md:px-20`}>
        {
            AppsData.length? AppsData.map((data)=><AppCard data={data}></AppCard>):<NotFound></NotFound>
        }

      </div>
    </div>
  );
};

export default Apps;
