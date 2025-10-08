import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";

const Apps = () => {
    const AppsData = useLoaderData();

  return (
    <div className="bg-gray-100 pb-10">
      <h1 className="text-5xl text-center font-bold pt-10">Our All Applications</h1>
      <p className="text-center pt-3">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between px-20 py-5">
        <div><p className="text-3xl font-bold">({AppsData.length}) Apps Found</p></div>
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
            <input type="search" required placeholder="Search Apps" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 px-20">
        {
            AppsData.map((data)=><AppCard data={data}></AppCard>)
        }

      </div>
    </div>
  );
};

export default Apps;
