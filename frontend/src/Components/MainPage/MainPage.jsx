import Footer from "../../CommonFolders/Footer/Footer";
import Header from "../../CommonFolders/Header/Header";
import FirstSection from "../FirstSection/FirstSection";
import "./mainPage.css";

const MainPage = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        {/* <p>Main Section</p> */}
        {/* <FirstSection /> */}
        <div className="main_footer">
          <main className="main_content_page">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainPage;
