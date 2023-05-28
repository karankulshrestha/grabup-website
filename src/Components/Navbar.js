import React from "react";
import ReactLogo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="items-center">
      <div className="flex mx-auto items-center justify-around flex-wrap">
        <div className="text-green-400 text-xl font-semibold mr-20 cursor-pointer">
          <img src={ReactLogo} alt="React Logo" width={120} height={40} />
        </div>
        <div>
          <ul className="font-sans flex space-x-10 justify-evenly">
            <li>
              <a href="/product" className="text-white hover:text-gray-500">
                Product
              </a>
            </li>
            <li>
              <a href="/customers" className="text-white hover:text-gray-500">
                Customers
              </a>
            </li>
            <li>
              <a href="/vision" className="text-white hover:text-gray-500">
                Vision
              </a>
            </li>
            <li>
              <a href="/company" className="text-white hover:text-gray-500">
                Company
              </a>
            </li>
            <li>
              <a href="/market-size" className="text-white hover:text-gray-500">
                Market Size
              </a>
            </li>
          </ul>
        </div>
        <div className="space-x-10">
          <span>
            <a href="/downloads" className="text-white hover:text-gray-500">
              Timeline
            </a>
          </span>
          <span>
            <a href="/downloads" className="text-white hover:text-gray-500">
              Our App
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
