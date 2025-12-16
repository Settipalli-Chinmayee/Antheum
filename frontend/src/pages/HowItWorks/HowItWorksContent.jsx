import React from 'react';
import how_it_works from "../../assets/img/how_it_works_img/how_it_works2.jpg";
import search from "../../assets/img/how_it_works_img/search.svg";
import zero_trust from "../../assets/img/what_we_do_img/zero_trust.svg";
import verify from "../../assets/img/how_it_works_img/verify.svg";
import monitor from "../../assets/img/how_it_works_img/monitor.svg";
import Card from "../../Components/UI/Card";

const HowItWorksContent = () => {
    const card_content = [
    {
      img: search,
      no: "01",
      heading: "Intercept & Inspect",
      content:
        "Every AI prompt is scanned in real time for sensitive data and compliance risks before processing.",
    },
    {
      img: zero_trust,
      no: "02",
      heading: "Protect & Process",
      content:
        "Data is encrypted and processed inside Secure Enclaves — hardware-isolated environments ensuring privacy during use.",
    },
    {
      img: verify,
      no: "03",
      heading: "Verify & Record",
      content:
        "Immutable, blockchain-backed audit trails and Zero-Knowledge Proofs verify compliance without revealing sensitive data.",
    },
    {
      img: monitor,
       no: "04",
      heading: "Govern & Monitor",
      content:
        "A centralized dashboard provides visibility, analytics, and risk reporting across all AI usage enterprise-wide.",
    },
  ];
  return (
       <section className="howitworks-con">
        <div className="content_first_section2">
          <h1>How it Works</h1>
          <p>
            Antheum.AI operates as a secure AI gateway between users and large
            language models like
          </p>
          {/* <br/> */}
          <span>OpenAI, Anthropic, or Mistral</span>
        </div>
        <div className="img_section">
          <img src={how_it_works} alt="how_it_works" />
        </div>
        {/* <div className="cards_section"> */}
            <Card content_for_card={card_content} type="four"/>
          {/* </div> */}
        
      </section>
  )
}

export default HowItWorksContent