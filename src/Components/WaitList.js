import React from "react";
import "../Styles/Waitlist.css";
import logo from "../assets/logo.svg";

const WaitList = () => {
  return (
    <div>
      <div class="container">
        <div class="wrapper">
          <div class="form bg-black">
            <div class="left-col">
              <h2>Congrats For Becoming Among First 500 User's of a Upcoming $1 Billion Company</h2>
              <div className="bull">
                <p className=" pb-3 font-bold">Merci</p>
                <p className=" pb-3 font-bold">Gracias</p>
                <p className=" pb-3 font-bold">Danke</p>
                <p className=" pb-3 font-bold">Grazie</p>
              </div>
            </div>
            <img src={logo} class="img1" alt="" />
            <div class="right-col bg-black">
              <h2>Oh yes, you will definetely get it</h2>
              <form>
                <div class="result"></div>
                <div class="form-group">
                  <input id="name" type="text" placeholder="enter your name" className="p-2"/>
                </div>

                <div class="form-group p-3">
                  <input
                    id="email"
                    type="email"
                    placeholder="enter your email"
                    className="p-2"
                  />
                </div>
                <button id="submit" type="submit">
                  Add to waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitList;
