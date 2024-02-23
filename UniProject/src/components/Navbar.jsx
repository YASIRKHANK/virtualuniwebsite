


import React from "react";
import img1 from "../images/logo.png";
import img2 from "../images/gop.png";
import backgroundImage from "../images/bg.jpg";

const Navbar = () => {
  return (
    <div
      className="flex bg-cover relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "150px"
      }}
    >
      <div>
        <img src={img1} className="ml-20 mr-10 mt-2" />
      </div>
      <div className="flex-col">
        <p className="text-4xl text-white">Virtual University of Pakistan</p>
        <p className="text-white text-2xl mt-1">Federal Government University</p>
      </div>
      <img src={img2} className="w-14 h-10 ml-4 mt-3" />

      <div className=" left-0 top-0 ml-52 mt-4 flex-col  items-center">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          className="rounded-md px-2 py-1 mr-2 mb-5"
        />

        {/* Select Language Dropdown */}
        <div className="relative ml-10">
          <select
            className="rounded-md px-2 py-1 bg-transparent border border-white text-black"
          >
            <option value="en">English</option>
            <option value="es">Urdu</option>
            <option value="es">Pashto</option>
            <option value="es">Arabic</option>
            <option value="es">French</option>



          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
