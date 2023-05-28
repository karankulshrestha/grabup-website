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
          borderColor: "lime",
        }}
      />
      <Navbar />
    </div>
  );
}

export default Headers;
