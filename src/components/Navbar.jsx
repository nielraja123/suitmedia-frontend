/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Navbar = () => {
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const handleAboutHover = () => {
    setIsAboutHovered(true);
  };

  const handleAboutLeave = () => {
    setIsAboutHovered(false);
  };

  return (
    <nav className="w-full flex py-2 justify-between items-center bg-white">
      <div className="text-gray-800 px-[200px] font-extrabold">Company</div>
      <div className="relative px-[200px]">
        <ul className="flex flex-row gap-10">
          <li
            onMouseEnter={handleAboutHover}
            onMouseLeave={handleAboutLeave}
            className="relative">
            <a className=" text-gray-500 p-4 hover:bg-gray-100" href="/">
              ABOUT
            </a>
            {isAboutHovered && (
              <ul className="submenu text-gray-500 absolute left-[-1px] mt-2 bg-white shadow w-[200px] z-50">
                <li>
                  <a
                    className="block px-4 py-2 whitespace-nowrap hover:text-white hover:bg-gray-800"
                    href="/">
                    HISTORY
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 whitespace-nowrap hover:text-white hover:bg-gray-800"
                    href="/">
                    VISION MISSION
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/" className=" text-gray-500 p-2.5 hover:bg-gray-100">
              OUR WORK
            </a>
          </li>
          <li>
            <a href="/" className=" text-gray-500 p-2.5 hover:bg-gray-100">
              OUR TEAM
            </a>
          </li>
          <li>
            <a href="/" className=" text-gray-500 p-2.5 hover:bg-gray-100">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
