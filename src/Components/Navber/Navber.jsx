import React from "react";
import "./Navber.css";
import { NavLink, useNavigation } from "react-router";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from "/logo.png";
const Navber = () => {
  const navigation = useNavigation();

  const links = (
    <div className="text-xl space-x-2 flex flex-col md:flex-row">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/apps">Apps</NavLink>
      <NavLink to="/installation">Installation</NavLink>
    </div>
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-[40px] h-[40px] mr-2" />
          </Link>
          <a className="text-[#9F62F2] font-bold btn-ghost text-xl">HERO.IO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="https://github.com/nahian-cse-nubtk/Hero-app-service.git">
            <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
              <FaGithub /> Contribute
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        {navigation.state === "loading" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
            <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="font-bold text-2xl text-white">Loading...</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navber;
