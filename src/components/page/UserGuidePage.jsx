import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TOCGuilde from "../table_on_contents/TOCUserGuide";
import NextButton from "../functions/NextButtons";
import { scrollToSection } from "../functions/ScrollToSection";

const UserGuide = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        scrollToSection(location); 
    }, [location]);

  return (
    <div className="main-page">
      <h1>SMMS User Guide</h1>
      <hr />
      <TOCGuilde />
      <h3 id="overview">Overview</h3>
      <p>
        Welcome to the SMMS (Specific Management System) User Guide. This
        comprehensive guide will help you understand and navigate through the
        system's features and functionalities. The system{" "}
        <a
          href="http://webserv.thipparath.com/smms/"
          className="text-blue-400 font-bold"
        >
          here.
        </a>
      </p>
      <h3 id="system-architecture">System Architecture</h3>
      <p>
        The SMMS system follows a structured workflow that integrates various
        modules for efficient management of business operations.
      </p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_085800.png" alt=""/>
      <div className="under-pic">Figure 1: SMMS System Flow Diagram</div>
      <h3 id="getting-started">Getting Started</h3>
      <h4 id="accessing-the system"> Accessing the System</h4>
      <h5>Login Process</h5>
      <p>1. Navigate to the SMMS login page</p>
      <p>2. Enter your credentials: Username & Password</p>
      <p>3. Select your preferred language</p>
      <p>4. Click the Login button to access the system</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_090108.png" alt=""/>
      <div className="under-pic">Figure 2: SMMS Login Interface</div>
      <h4 id="system-interface">System Interface</h4>
      <h5>Main Dashboard Layout</h5>
      <p>The SMMS interface consists of four main sections:</p>
      <p>1. Menu Panel - Access different system modules</p>
      <p>2. Main Page - Display active content and forms</p>
      <p>3. User Information - View currrent user details</p>
      <p>4. Logout Button - Securely exit the system</p>
      <img
        src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2025-02-21_095841.png"
        alt=""
      />
      <div className="under-pic">Figure 3: SMMS Dashboard Layout</div>
      <div className="flex justify-end">
        <NextButton text="Next" subtext="Maintenance" onClick={() => navigate("/maintenance")} />
      </div>
    </div>
  );
};

export default UserGuide;
