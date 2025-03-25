import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NextButton from "../functions/NextButtons";
import BackButton from "../functions/BackButton";
import { scrollToSection } from "../functions/ScrollToSection";
import TOCMaster from "../table_on_contents/TOCMaster";

const MasterData = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        scrollToSection(location);
    }, [location]);

    return (
        <div className="main-page">
            <h1>Master Data Management System</h1>
            <hr />
            <TOCMaster />
            <h3 id="overview">Overview</h3>
            <p>This guide provides comprehensive instructions for managing master data in the SMMS system.
                Master data includes essential information about companies, products, vehicles, locations, procurement, employees,
                and system settings.</p>
            <h3 id="company-detail">Company Detail</h3>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_103000.png" alt="" />
            <div className="under-pic">Figure 1: Company Detail</div>
            <h4 id="step 1 : add company detail">Step 1 : Add Company Detail</h4>
            <p>1. Choose Company Detail</p>
            <p>2. Click Add New</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_103134.png" alt="" />
            <div className="under-pic">Figure 2: Company Detail Form</div>
            <h4 id="step 2 : fill in company information">Step 2 : Fill in Company Information</h4>
            <p>1. Fill in information Company</p>
            <p>2. Click "Save"</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_103210.png" alt="" />
            <div className="under-pic">Figure 3: Company Information</div>
            <h3 id="company-group">Company Group</h3>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_103238.png" alt="" />
            <div className="under-pic">Figure 4: Company Group</div>
            <h4 id="step 1 : add company grouup">Step 1 : Add Company Group</h4>
            <p>1. Choose group</p>
            <p>2. Click "Add New"</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_103319.png" alt="" />
            <div className="under-pic">Figure 5: Company Group Form</div>
            <h4 id="step 2 : fill company group information">Step 2 : Fill in Company Group Information</h4>
            <p>1. Fill in information Company Group</p>
            <p>2. Click "Save"</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_103356.png" alt="" />
            <div className="under-pic">Figure 6: Company Group Information Show information</div>
            <h3 id="company-type">Company Type</h3>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_103422.png" alt="" />
            <div className="under-pic">Figure 7: Company Type</div>
            <h4 id="step 1 : add company type">Step 1 : Add Company Type</h4>
            <p>1. Choose type</p>
            <p>2. Click "Add New"</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_103456.png" alt="" />
            <div className="under-pic">Figure 8: Company Type Form</div>
            <h4 id="step 2 : fill in company type information">Step 2 : Fill in Company Type Information</h4>
            <p>1. Fill in information Company Type</p>
            <p>2. Click "Save"</p>
<img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_103532.png" alt="" />
<div className="under-pic">Figure 9: Company Type Information</div>
<h3 id="company-branch">Company Branch</h3>
<img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_103557.png" alt="" />
<div className="under-pic">Figure 10: Company Branch</div>
<h4 id="step 1 : add company branch">Step 1 : Add Company Branch</h4>
<p>1. Choose Branch</p>
<p>2. Click "Add New"</p>
<img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_103634.png" alt="" />
<div className="under-pic">Figure 11: Company Branch Form</div>
<h4 id="step 2 : fill in company branch information">Step 2 : Fill in Company Branch Information</h4>
<p>1. Fill in information Company Branch</p>
<p>2. Click "Save"</p>
<img src="" alt="" />


            <div className="div-button">
                <BackButton text="Back" subtext="Distance Management" onClick={() => navigate("/distance")} />
                <NextButton text="Next" subtext="Data Monitoring" onClick={() => navigate("/data_monitoring")} />
            </div>
        </div>
    );
};

export default MasterData;
