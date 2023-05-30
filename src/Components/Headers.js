import React from "react";
import Navbar from "./Navbar";
import "../Styles/Headers.css"

function Headers() {
  return (
    <div>
      <div className = "verticalRight"></div>
      <div className = "verticalLeft"></div>
      <hr
        style={{
          marginTop: 50,
          borderWidth: 4,
          borderColor: "green",
          opacity:1,
        }}
      />
      <Navbar />
    </div>
  );
}

export default Headers;
