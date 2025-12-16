import React from "react";

// import MainLayout from "../../layouts/MainLayout";
import "../../Components/MainPage/MainPage.css";
import MainPage from "../../Components/MainPage/MainPage";
import "./what_we_do.css";
import WhatWeDoContent from "./WhatWeDoContent";

const WhatWeDo = () => {
  return (
    <>
      {/* <MainLayout> */}
      <MainPage>
        <WhatWeDoContent />
      </MainPage>

      {/* </MainLayout> */}
    </>
  );
};

export default WhatWeDo;
