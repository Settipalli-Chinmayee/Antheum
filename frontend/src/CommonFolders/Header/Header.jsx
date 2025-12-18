import "./header.css";
import auntheumImg from "../../assets/img/logos/mainLogo.svg";
import { NavLink } from "react-router-dom";
import menu from "../../assets/img/header/hamburger.svg";
import close from "../../assets/img/header/close.svg";
import { useEffect, useState } from "react";

const Header = ({ menuOpen, setMenuOpen }) => {
  // const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div className="navBar">
      <div className="logoCon">
        <NavLink to="/" className="logo_icon">
          <img src={auntheumImg} alt="Antheum Logo" className="logoImg" />
          <p>Antheum.AI</p>
        </NavLink>
        <div className="menu-img" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menu} alt="Menu" width={30} />
        </div>
      </div>

      <div className={`navLinks ${menuOpen ? "show" : ""}`}>
        <div className="header-content">
          <ul>
            <div className="close-img">
              <img
                src={close}
                alt=""
                onClick={() => setMenuOpen(false)}
                width={28}
              />
            </div>
            <li>
              <NavLink to="/what_we_do" onClick={() => setMenuOpen(false)}>
                What We Do
              </NavLink>
            </li>
            <li>
              <NavLink to="/how_it_works" onClick={() => setMenuOpen(false)}>
                How It Works
              </NavLink>
            </li>
            <li>
              <NavLink to="/technologies" onClick={() => setMenuOpen(false)}>
                Technologies
              </NavLink>
            </li>
            <li>
              <NavLink to="/vision" onClick={() => setMenuOpen(false)}>
                Vision
              </NavLink>
            </li>
            <p className={`contact-btn ${menuOpen ? "show" : ""}`}>Contact Us</p>
          </ul>
        </div>
      </div>

      <p className="contact_btn">Contact Us</p>
    </div>
  );
};

export default Header;
