import "./header.css";
import auntheumImg from "../../assets/img/logos/mainLogo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navBar">
        <div className="logoCon">
          <NavLink to="/" className="logo_icon">
            <img src={auntheumImg} alt="" className="logoImg" />
            <p>Antheum.AI</p>
          </NavLink>
        </div>

        <div className="navLinks">
          <ul>
            <li>
              <NavLink to="/what_we_do" className={({ isActive }) => (isActive ? 'active' : undefined)}>What We Do</NavLink>
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
        <p className="contact_btn" >Contact Us</p>
      </div>
    </>
  );
};

export default Header;
