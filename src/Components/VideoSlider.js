import React from "react";
import "../Styles/VideoSlider.css";
import Slider from "./Slider";

const VideoSlider = () => {
  return (
    <div className=" flex-wrap" id="vision">
      <hr class="dashed-2 mt-20" />
      <div>
        <h1 className="main-head">Why We Built Grabup ?</h1>
        <p className="top-para">
          Prime Minister Narendra Modi has expressed his desire to make India a
          global hub for recycling. He has said that India has the potential to
          become a major player in the recycling market, and that this would
          create jobs and boost the economy.
        </p>
        <div className="main-list">
          <ul className="list-points">
            <li>
              Invest in infrastructure. India needs to invest in infrastructure
              to support the recycling industry. This includes building
              recycling facilities, training workers, and developing recycling
              technologies.
            </li>
            <li>
              Create policies that support the recycling industry. India needs
              to create policies that support the recycling industry. This
              includes providing tax breaks for recycling companies, setting up
              recycling targets, and enforcing environmental regulations.
            </li>
            <li>
              Promote recycling awareness. India needs to promote recycling
              awareness among the public. This includes educating people about
              the benefits of recycling and how to recycle properly.
            </li>
          </ul>
        </div>
        <p className="top-para">
          If India takes these steps, it can become a global hub for recycling.
          This would be a win-win for the environment and the economy.
        </p>
      </div>
      <Slider/>
    </div>
  );
};

export default VideoSlider;
