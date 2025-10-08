import React from "react";
import { Link, useLoaderData } from "react-router";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import heroimage from '/hero.png'
import AppCard from "../../Components/AppCard/AppCard";

const Home = () => {
    const AppsData = useLoaderData();
    const firstEight = AppsData.slice(0, 8);
    //console.log(firstEight);
  return (
    <div className="bg-gray-100 pb-10">
      <h1 className="font-bold text-5xl text-center pt-10">We Build <br /><span className="text-[#632EE3]">Productive</span> Apps</h1>
      <p className="text-center text-gray-500 py-5">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className="flex justify-center gap-5 pb-5">
        <Link to="https://play.google.com/store/apps?hl=en" > <button className=" btn p-3 font-bold bg-gray-200 rounded-sm flex items-center gap-2"><IoLogoGooglePlaystore /> Google Play</button></Link>
        <Link to="https://www.apple.com/app-store/"> <button className=" btn p-3 font-bold bg-gray-200 rounded-sm flex items-center gap-2"><FaAppStoreIos /> App Store</button></Link>
      </div>
      <img src={heroimage} alt="Hero image" className="w-[600px] mx-auto" />

      <div className="text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-10">
        <h1 className="text-4xl text-center">Trusted by Millions, Built for You</h1>
        <div className="flex justify-center items-center gap-10 pt-5">
        <div  className="text-center">
          <p>Total Downloads</p>
          <h1 className="text-5xl font-bold">29.6M</h1>
          <p>21% more than last month</p>

        </div>
        <div className="text-center">
          <p>Total Reviews</p>
          <h1 className="text-5xl font-bold">906K</h1>
          <p>46% more than last month</p>

        </div>
        <div className="text-center">
          <p>Active Apps</p>
          <h1 className="text-5xl font-bold">132+</h1>
          <p>31 more will Launch</p>

        </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl text-center font-bold">Trending Apps</h1>
        <p className="text-center mt-3">Explore All Trending Apps on the Market developed by us</p>
        <div className="grid grid-cols-4 gap-5 px-20 py-10">
          {
            firstEight.map((data)=><AppCard key= {data.id} data={data}></AppCard>)
          }

        </div>
      </div>
      <Link to="/apps" className="flex justify-center"><button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Show All</button></Link>
    </div>
  );
};

export default Home;
