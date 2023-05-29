import React from "react";
import Tata from "../assets/companies/tata.svg";
import Sail from "../assets/companies/sail.svg";
import Jindal from "../assets/companies/jindal.svg";
import Hindalco from "../assets/companies/hindalco.svg";
import Nestle from "../assets/companies/nestle.svg";
import Uniliver from "../assets/companies/uniliver.svg";
import Plastic from "../assets/companies/plastic.svg";
import itc from "../assets/companies/itc.svg";
import Maruti from "../assets/companies/maruti.svg";
import Ford from "../assets/companies/ford.svg";
import "../Styles/CompaniesSlider.css";
import Marquee from "react-fast-marquee";

const CompaniesSlider = () => {
  return (
    <div>
      <div className="items-center flex flex-wrap justify-start mt-16 text-gray-400 heading">
        <div>
          Grabup Aims to work with{" "}
          <span className="hover-underline">Startups, {"  "} </span>
          {""}
          <span className="hover-underline">Industries, </span>{" "}
          <span className="hover-underline">
            {" "}
            Government Agencies{" "}
          </span>{" "}
          & <span className="hover-underline"> Manufacturers </span>
        </div>
      </div>
      <div className="companySlider mt-10">
        <Marquee>
          <img src={Tata} height={200} width={200} />
          <img src={Sail} height={200} width={200}/>
          <img src={Jindal} height={200} width={200}/>
          <img src={Hindalco} height={200} width={200}/>
          <img src={Nestle} height={200} width={200}/>
          <img src={Uniliver} height={200} width={200}/>
          <img src={Plastic} height={200} width={200}/>
          <img src={itc} height={200} width={200}/>
          <img src={Maruti} height={200} width={200}/>
          <img src={Ford} height={200} width={200}/>
        </Marquee>
      </div>
    </div>
  );
};

export default CompaniesSlider;
