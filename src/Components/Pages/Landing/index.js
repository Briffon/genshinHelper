import React from "react";
import Button from "../../Button";
import logo from "../../assets/Group 35.png";
function Landing() {
  return (
    <div className=" web-page landing-login-container">
      <div className="landing-login-container-content">
        <h1>Impact Tools</h1>
        <img src={logo} alt="signup logo" />
        <div className="landing-login-container-buttons">
          <Button width="140px" height="40px" txt="login" />
          <Button width="140px" height="40px" txt="Sign Up" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
