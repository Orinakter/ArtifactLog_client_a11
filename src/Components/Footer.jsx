import React from 'react';
import { FaFacebook, FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosContact } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-10 ">
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
   
    <div>
      <h2 className="text-xl font-bold text-white mb-4">Historical Artifacts Tracker</h2>
      <p className="text-sm ">
        Discover and preserve history with our user-friendly tracker. Explore, add, and learn about historical artifacts from around the world.
      </p>
    </div>

    
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="/" className="hover:text-blue-500">Home</a></li>
        <li><a href="/all-artifacts" className="hover:text-blue-500">All Artifacts</a></li>
        <li><a href="/add-artifact" className="hover:text-blue-500">Add Artifact</a></li>
        <li><a href="/login" className="hover:text-blue-500">Login</a></li>
      </ul>
    </div>

   
    <div>
      <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
      <ul className="space-y-2">
        <li className="flex items-center gap-3">
        <MdEmail />
          <a className="hover:text-blue-500">info@artifactstracker.com</a>
        </li>
        <li class="flex items-center gap-3">
        <IoIosContact />
         <a className="hover:text-blue-500">+1 555 123-4567</a> 
        </li>
        <li className="flex items-center gap-3">
        <FaLocationDot />
          <a className="hover:text-blue-500">123 Artifact St, History City</a>
        </li>
      </ul>
    </div>

    <div className="">
      <h2 className='text-lg font-bold mb-2'>Follow Us</h2>
      <div className="flex space-x-4 text-xl">

      <p><FaFacebook/></p>
            
            <p>
              <FaTwitter />
            </p>
            <p>
              <FaInstagram />
            </p>

      </div>
    </div>
  </div>

  
  <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
    <p>Copyright 2024 Historical Artifacts Tracker. All rights reserved.</p>
    <p>
      Developed by <a className="text-blue-500 hover:underline">Orin Akther</a>.
    </p>
  </div>
</footer>
    );
};

export default Footer;