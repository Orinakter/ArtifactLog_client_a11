import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navList = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/all-artifacts">
        <li>All-Artifacts</li>
      </NavLink>
      <NavLink to="/add-artifacts">
        <li>Add-Artifacts</li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  shadow"
            >
              {navList}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co.com/tsYxSJZ/images.jpg"
              alt=""
              className="w-[50px] h-[50px] rounded-full"
            />
            <h1 className="text-xl font-bold text-blue-500">
              ArtifactLog
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4">{navList}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <button className="btn bg-blue-500 text-white font-bold rounded-xl">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
