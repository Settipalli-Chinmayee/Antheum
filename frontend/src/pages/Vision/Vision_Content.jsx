import React from "react";
import vision from "../../assets/img/vision/vision.svg";

const Vision_Content = () => {
  return (
    <>
      <div className="vision-container">
        <div className="vision-wrapper">
          <div className="vision_heading_ing">
            <img src={vision} alt="" width={48} />
            <h1 className="vision-heading">Our Vision</h1>
          </div>

          <p className="vision-text">
            To build a{" "}
            <span className="vision-highlights">
              decentralized, verifiable AI security ecosystem
            </span>{" "}
            — where every model interaction, policy enforcement, and compliance
            event is provable, private, and owned by the enterprise.
          </p>
          <div className="vision-card">
            <div className="cardOne">
              <p className="vision-card-heading">Secure</p>
              <p>Hardware-backed protection for every AI interaction</p>
            </div>
            <div className="cardOne">
              <p className="vision-card-heading">Govern</p>
              <p>Policy-driven control without sacrificing innovation</p>
            </div>
            <div className="cardOne">
              <p className="vision-card-heading">Decentralize</p>
              <p>Enterprise ownership of AI security infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision_Content;
