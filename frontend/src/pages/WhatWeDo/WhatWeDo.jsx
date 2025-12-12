import React from "react";
import Footer from "../../CommonFolders/Footer/Footer";
import Header from "../../CommonFolders/Header/Header";
// import MainLayout from "../../layouts/MainLayout";
import "../../Components/MainPage/MainPage.css";
import MainPage from "../../Components/MainPage/MainPage";
import "./what_we_do.css";
import Card from "../../Components/UI/Card";
import data from "../../assets/img/what_we_do_img/data.svg";
import compliance from "../../assets/img/what_we_do_img/compliance.svg";
import zero_trust from "../../assets/img/what_we_do_img/zero_trust.svg";

const WhatWeDo = () => {
  const card_content = [
    {
      img: data,
      heading: "Data Sovereignty",
      content:
        "Keep your enterprise data under complete organizational control. No external access, no compromises.",
    },
    {
      img: compliance,
      heading: "Compliance by Design",
      content:
        "Meet SOC2, GDPR, HIPAA, and emerging AI regulations without retrofitting security after deployment.",
    },
    {
      img: zero_trust,
      heading: "Zero-Trust Architecture",
      content:
        "Every AI action is verifiable. Every interaction auditable. Trust nothing, verify everything.",
    },
  ];
  return (
    <>
      {/* <MainLayout> */}
      <MainPage>
        <section>
          <div className="content_first">
            <h1>What We Do</h1>
            <p>
              Antheum.AI provides a <span className="bold_text">
                privacy-first security platform</span> that
              protects enterprise data during every AI interaction — from prompt
              to output.
            </p>
            <p>
              The platform detects and prevents data leaks, enforces governance
              policies, and creates immutable audit trails so enterprises can
              confidently scale AI adoption.
            </p>
          </div>
          {/* <div className="cards_section"> */}
            <Card content_for_card={card_content} type="three"/>
          {/* </div> */}
          {/* <p>
            Jotz.AI provides a privacy-first security platform that protects
            enterprise data during every AI interaction — from prompt to output.
            The platform detects and prevents data leaks, enforces governance
            policies, and creates immutable audit trails so enterprises can
            confidently scale AI adoption.
          </p> */}
        </section>
      </MainPage>

      {/* </MainLayout> */}
    </>
  );
};

export default WhatWeDo;
