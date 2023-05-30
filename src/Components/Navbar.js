import React, { useState } from "react";
import ReactLogo from "../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { green } from "@mui/material/colors";
import { useMediaQuery } from "react-responsive";
import {Link} from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 620px)` });
  return (
    <nav className="items-center">
      <div className="flex mx-auto md:items-center md:justify-around flex-wrap items-start">
        <div className="text-green-400 text-xl font-semibold md:mr-20 cursor-pointer">
          <a href="/"><img src={ReactLogo} alt="React Logo" width={120} height={40} /></a>
        </div>
        {isMobile ? (
          <div
            className=" absolute right-4 top-24 w-10"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <CloseIcon
                style={{ height: "40px", width: "40px", color: green[400] }}
              />
            ) : (
              <MenuIcon
                style={{ height: "40px", width: "40px", color: green[400] }}
              />
            )}
          </div>
        ) : (
          ""
        )}
        <div
          className={`md:flex md:space-x-40 flex-wrap md:justify-center absolute md:static 
        pl-4 text-xl md:bg-transparent bg-black md:w-auto w-full md:pt-0 md:pb-0 pt-4 pb-4 md:z-0 z-10 md:mt-0 mt-24
         transition-all duration-500 ease-in ${
           open ? "top-20" : "top-[-490px]"
         }`}
        >
          <ul className="font-sans md:text-lg md:flex md:space-x-8 md:flex-wrap md:w-auto w-32">
            <li className="my-3">
              <Link
                to="test1" spy={true} smooth={true} offset={50} duration={500}
                className="text-white hover:text-gray-500 hover-underline-animation cursor-pointer"
              >
                Product
              </Link>
            </li>
            <li className="my-3">
              <Link
                to="companies" spy={true} smooth={true} offset={-50} duration={500}
                className="text-white hover:text-gray-500 hover-underline-animation cursor-pointer"
              >
                Customers
              </Link>
            </li>
            <li className="my-3">
              <Link
                to="vision" spy={true} smooth={true} offset={50} duration={500}
                className="text-white hover:text-gray-500 hover-underline-animation cursor-pointer"
              >
                Vision
              </Link>
            </li>
            <li className="my-3">
              <Link
                to="company"
                className="text-white hover:text-gray-500 hover-underline-animation cursor-pointer"
              >
                Company
              </Link>
            </li>
            <li className="my-3">
              <Link
                to="timeline"
                className="text-white hover:text-gray-500 hover-underline-animation cursor-pointer"
              >
                Timeline
              </Link>
            </li>
          </ul>
          <div className="space-x-10 my-3">
            <span>
              <a
                href="/waitlist"
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
