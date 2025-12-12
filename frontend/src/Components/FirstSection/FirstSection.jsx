import MainPage from "../MainPage/MainPage";
import "./first_section.css";

const FirstSection = () => {
  return (
    <>
      <MainPage>
        <div className="first_section">
          <span className="riskText">
            92% of enterprises face AI security risks
          </span>
          <div className="main-text">
            <h1 className="headingOne">
              When AI Gets Hacked, Your Data Pays the Price
            </h1>
            <h3 className="subHeadingOne">
              One compromised prompt. One leaked API key. That's all it takes to
              expose your enterprise data.
            </h3>
            <h3 className="subHeadingTwo">
              Antheum.AI ensures it never happens.
            </h3>
            <div className="first_section_btn">
              <p className="btnOne">See How We Protect AI</p>
              <p className="btnTwo">Book a Demo</p>
            </div>
            <div className="advantagesList">
              <ul>
                <li>SOC2 Compliant</li>
                <li>GDPR Ready</li>
                <li>HIPAA Certified</li>
                <li>Zero-Trust Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </MainPage>
      {/* <p>First Section</p> */}
    </>
  );
};

export default FirstSection;
