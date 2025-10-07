import React from "react";
import { Link } from "react-router";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import heroimage from '/hero.png'

const Home = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="font-bold text-5xl text-center pt-10">We Build <br /><span className="text-[#632EE3]">Productive</span> Apps</h1>
      <p className="text-center text-gray-500 py-5">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className="flex justify-center gap-5 pb-5">
        <Link to="" > <button className="p-3 font-bold bg-gray-200 rounded-sm flex items-center gap-2"><IoLogoGooglePlaystore /> Google Play</button></Link>
        <Link to=""> <button className="p-3 font-bold bg-gray-200 rounded-sm flex items-center gap-2"><FaAppStoreIos /> App Store</button></Link>
      </div>
      <img src={heroimage} alt="Hero image" className="w-[600px] mx-auto" />
    </div>
  );
};

export default Home;
