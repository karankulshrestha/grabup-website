import React from "react";
import ReactLogo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="items-center">
      <div className="flex mx-auto items-center justify-around flex-wrap">
        <div className="text-green-400 text-xl font-semibold mr-20 cursor-pointer">
          <img src={ReactLogo} alt="React Logo" width={120} height={40} />
        </div>
        <div className="md:flex md:space-x-40 flex-wrap md:justify-center">
          <ul className="font-sans md:flex md:space-x-8 md:flex-wrap">
            <li>
              <a
                href="/product"
                className="text-white hover:text-gray-500 hover-underline-animation cursor-pointer"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/customers"
                className="text-white hover:text-gray-500 hover-underline-animation cursor-pointer"
              >
                Customers
              </a>
            </li>
            <li>
              <a
                href="/vision"
                className="text-white hover:text-gray-500 hover-underline-animation cursor-pointer"
              >
                Vision
              </a>
            </li>
            <li>
              <a
                href="/company"
                className="text-white hover:text-gray-500 hover-underline-animation cursor-pointer"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="/downloads"
                className="text-white hover:text-gray-500 hover-underline-animation cursor-pointer"
              >
                Timeline
              </a>
            </li>
          </ul>
          <div className="space-x-10">
            <span>
              <a
                href="/downloads"
                className="text-white hover:text-gray-500 hover-underline-animation cursor-pointer"
              >
                Our App
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
