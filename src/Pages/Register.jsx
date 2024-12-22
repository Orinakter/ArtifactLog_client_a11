import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail, MdPhotoLibrary } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" flex  items-center justify-center mt-12">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden">
        <div className="w-1/2 p-10">
          <h2 className="text-2xl text-blue-500 text-center font-bold mb-4">
            Welcome to ArtifactLog
          </h2>
          <img
            src="https://i.ibb.co.com/JcsWsPD/tablet-login-concept-illustration-114360-7963.jpg"
            alt=""
            className=""
          />
        </div>

        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-3 text-blue-500 text-center">
            Log In your Account
          </h2>
          <form className="card-body">
            <div className="form-control">
              <label className="flex justify-start items-center gap-2 mb-2 ">
                <span className="text-xl text-blue-500">
                  <FaUserLarge />
                </span>
                <span className="text-blue-500">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="flex justify-start items-center gap-2 mb-2 mt-2">
                <span className="text-xl text-blue-500">
                  <MdPhotoLibrary />
                </span>
                <span className="text-blue-500">Photo-URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter your photo-url"
                name="photoUrl"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="flex justify-start items-center gap-2 mb-2 mt-2">
                <span className="text-xl text-blue-500 ">
                  <MdOutlineMail />
                </span>
                <span className="text-blue-500">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="flex justify-start items-center gap-2 mb-2 mt-2">
                <span className="text-xl text-blue-500">
                  <RiLockPasswordFill />
                </span>
                <span className="text-blue-500">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-3">
              <button className="btn w-full bg-gradient-to-r from-blue-500 to-black text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300">
                Register
              </button>
            </div>
          </form>
          <div className="text-center">
            <button className="btn shadow-xl text-black font-semibold gap-3 p-2 text-lg">
              <FcGoogle className="text-2xl" />
              Login With Google
            </button>
          </div>

          <p className="text-center text-sm mt-4">
            Don't have an Account?
            <Link to="/login">
              <span className="text-blue-500 hover:underline">Login Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
