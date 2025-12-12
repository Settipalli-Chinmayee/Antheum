import React from "react";
import { NavLink } from "react-router-dom";
import "./pagenotfound.css";

const PageNotFound = () => {
  return (
    <div className="page-not">
      <div>
        <div className="page_not_found">
          <h2>404 Error - Page Not Found</h2>
        </div>
        <p className="goBack">
          Go Back to<NavLink to="/"> Home</NavLink>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
