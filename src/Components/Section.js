import * as React from "react";
import "../Styles/Section.css";
import { Canvas } from "@react-three/fiber";
import Blob from "../Components/Blob/Blob";

const Section = () => {
  return (
    <div className="flex flex-row mt-14 ml-16">
      <div>
        <div className="top">Empowering</div>
        <div>
          <div className="slidingVertical">
            <span>Industries</span>
            <span>Government</span>
            <span>Manufacturing</span>
            <span>Recycling</span>
            <span>HouseHolds</span>
          </div>
        </div>
        <div className="bottom flex-wrap flex items-start text-start">
          With Our Data And <br /> Platform
        </div>
        <div className="subline text-start max-w-2xl flex-wrap">
          We can help every single Household Sell Scrap at their Doorstep for
          the Best Price, and we can help Industries get the required scrap for
          the Lowest Price by using our data.{" "}
        </div>
        <div className="items-center flex justify-start ml-12 mt-6 button">
        <span>Book a Demo</span>
        </div>
      </div>
      <div className="flex flex-row ml-50 flex-wrap -mt-40" style={{ width: "50vw", height: "100vh" }}>
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <Blob />
      </Canvas>
      </div>
    </div>
  );
};

export default Section;
