import React from "react";
import "../Styles/ColumnText.css";
import Screen1 from "../assets/screen1.svg";
import Screen2 from "../assets/screen2.svg";

const ColumnText = () => {
  return (
    <div id="test1">
      <div className="flex flex-wrap">
        <div className="LeftLine"></div>
        <div className="topW">
          <div className="innerComponent">
            <h1 className="hover-underline-animation">Connect and Hit the Deal</h1>
            <p>
              Our Application enables Scrap Buyers to Locate Scrap based on
              Location so they may Visit and Purchase that Scrap in accordance
              with their Profit and Margin.
            </p>
          </div>
          <div className="innerComponent">
            <h1 className="hover-underline-animation">Find and Sell</h1>
            <p>
              Also, Our Application Assists Scrap Purchasers in Locating Scrap
              Dealers so they may Sell for a Profit.
            </p>
          </div>
          <div className="innerComponent">
            <h1 className="hover-underline-animation">Data and Manufacturers</h1>
            <p>
              Our Data Analytics Dashboard allows us to keep track of every
              Scrap on the ground, allowing us to track the Scrap and negotiate
              with Businesses like Manufacturers and Industries to provide Scrap
              in bulk at Good Price.
            </p>
          </div>
        </div>
        <div className="flex flex-row md:ml-36 flex-wrap mt-28 ml-10">
          <div className="transform: -rotate-12">
            <img src={Screen1} alt="React Logo" height={400} width={250} />
          </div>
          <div className="transform: rotate-12">
            <img src={Screen2} alt="React Logo" height={400} width={250} />
          </div>
        </div>
      </div>
      <div>
        <h1 className="bottom-heading">GRABUP LOOKING TO PARTNER WITH :-) </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="partnerName">Tata Steel</div>
        <div className="partnerName">Jindal Steel</div>
        <div className="partnerName">Nestle</div>
        <div className="partnerName">ITC</div>
        <div className="partnerName">Plastic Energy</div>
        <div className="partnerName">Hindalco</div>
      </div>
    </div>
  );
};

export default ColumnText;
