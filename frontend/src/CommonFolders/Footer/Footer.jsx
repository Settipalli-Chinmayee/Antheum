import "./footer.css";
import auntheumImg from "../../assets/img/logos/mainLogo.svg";
import location from "../../assets/img/footer_images/location.svg";
import mailInfo from "../../assets/img/footer_images/mail.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer_wrapper">
        <div className="footer_container">
          <div className="footer_container_top">
            <div className="footer_col col1">
              <div className="col1_logo_Sec">
                <img src={auntheumImg} alt="antheum_ai_logo" />
                <span className="company_name">Antheum.AI</span>
              </div>
              <p>
                Unleashing Enterprise AI — Without Compromise. Privacy-first
                security platform for the AI era.
              </p>
              <ul className="col1_loc_mail">
                <li>
                  <img src={location} alt="Location" />
                  <a href="#">Dallas, TX</a>
                </li>
                <li>
                  <img src={mailInfo} alt="Mail" />

                  <a href="#">info@antheum.ai</a>
                </li>
              </ul>
            </div>
            <div className="footer_col col2">
              <h4>Platform</h4>
              <ul>
                <li>
                  <NavLink to="/what_we_do">What We Do</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/how_it_works">How It Works</NavLink>
                </li>

                <li>
                  {" "}
                  <NavLink to="/technologies">Technologies</NavLink>
                </li>
                <li>
                  <NavLink to="/vision">Vision</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer_col col3">
              <h4>Get Started</h4>
              <p>Ready to secure your AI infrastructure?</p>
              <button className="footer_contact">Contact Sales</button>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="footer_bottom_col">
              <p>© 2025 Antheum.AI. All rights reserved.</p>
            </div>
            <div className="footer_bottom_col col_bottom_2">
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
