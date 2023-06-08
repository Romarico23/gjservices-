import React from "react";
import "./spinninglogo.css";
export const SpinningLogo = () => {
  return (
    <div className="spinningLogo">
      <h1>Loading...</h1>
      <img className="child" src="./src/assets/gj-logo-spin.png" alt="LOGO" />
    </div>
  );
};
