import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NextButton from "../functions/NextButtons";
import BackButton from "../functions/BackButton";
import { scrollToSection } from "../functions/ScrollToSection";
import TOCDistance from "../table_on_contents/TOCDistance";

const Distance = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    scrollToSection(location);
  }, [location]);

  return (
    <div className="main-page">
      <h1>Distance Management System</h1>
      <hr />
      <TOCDistance />
      <h3 id="overview">Overview</h3>
      <p>The Distance Management System is designed to manage and monitor vehicle
        distance data efficiently. The system provides a monthly breakdown
        (JAN-DEC) of distances travel, along with summaries such as Total
        Distance, ODO Meter, ODO Date, and ODO Total. This allows users to
        accurately track and manage vehicle distances in a clear and structured
        manner.</p>
        <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_19-2-2025_10470_localhost.jpeg" alt="" />
        <div className="under-pic"> Figure 1: Distance</div>
      <div className="div-button">
        <BackButton text="Back" subtext="Accident Record" onClick={() => navigate("/accident_record")}/>
        <NextButton text="Next" subtext="Master" onClick={() => navigate("/master")}/>
      </div>
    </div>
  );
};

export default Distance;
