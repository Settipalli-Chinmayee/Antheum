import { useState } from "react";
import Footer from "../../CommonFolders/Footer/Footer";
import Header from "../../CommonFolders/Header/Header";
import FirstSection from "../FirstSection/FirstSection";
import "./mainPage.css";

const MainPage = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* <div className="wrapper"> */}
      {/* <Header /> */}
      {/* <p>Main Section</p> */}
      {/* <FirstSection /> */}
      <div className="main_footer">
        <div className={`wrapper ${menuOpen ? "menu-open" : ""}`}>
        {/* <div className="wrapper"> */}
          <Header  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <main className="main_content_page">{children}</main>
        </div>
        <Footer />
      </div>
      {/* </div> */}
    </>
  );
};

export default MainPage;
