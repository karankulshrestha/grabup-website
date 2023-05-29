import React from "react";
import "../Styles/TeamSection.css";
import EmailIcon from "@mui/icons-material/Email";
import karan from "../assets/profiles/karan.svg";
import zhao from "../assets/profiles/zhao.svg";
import harish from "../assets/profiles/Harish.svg";

const TeamSection = () => {
  return (
    <div>
    <h1 className="team-head hover-underline-animation">Core Team Members of Grabup</h1>
      <div className="container p-24">
        <div className="grid">
          <div className="card">
            <div className="card_img">
              <img
                src={karan}
                alt=""
              />
            </div>
            <div className="card_body">
              <h2 className="card_title">Karan Kulshrestha</h2>
              <h6 className="designation">Founder & CEO</h6>
              <div className="call_btn">
                <a href="#" className="btn_icon">
                  <span className="circle">
                    <EmailIcon
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <img
                src={zhao}
                alt=""
              />
            </div>
            <div className="card_body">
              <h2 className="card_title">Zhao Xiaosi</h2>
              <h6 className="designation">System Design Engineer</h6>
              <div className="call_btn">
                <a href="#" className="btn_icon">
                  <span className="circle">
                    <EmailIcon
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <img
                src={harish}
                alt=""
              />
            </div>
            <div className="card_body">
              <h2 className="card_title">Harish Singh</h2>
              <h6 className="designation">Backend Developer</h6>
              <div className="call_btn">
                <a href="#" className="btn_icon">
                  <span className="circle">
                    <EmailIcon
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                alt=""
              />
            </div>
            <div className="card_body">
              <h2 className="card_title">Maria Wilson</h2>
              <h6 className="designation">Lead Developer</h6>
              <div className="call_btn">
                <a href="#" className="btn_icon">
                  <span className="circle">
                    <EmailIcon
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <a href="https://youtu.be/7IoMG_NN7lA" target="_blank" className="link">Watch on youtube <i className="fab fa-youtube"></i></a> */}
    </div>
  );
};

export default TeamSection;
