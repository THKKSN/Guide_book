import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TOCMaintenance from "../table_on_contents/TOCMaintenance";
import NextButton from "../functions/NextButtons";
import BackButton from "../functions/BackButton";
import { scrollToSection } from "../functions/ScrollToSection";

const Maintenance = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        scrollToSection(location); 
    }, [location]);

  return (
    <div className="main-page">
      <h1>Maintenance Management System </h1>
      <hr />
      <TOCMaintenance />
      <h3 id="overview">Overview</h3>
      <p >The Maintenance Management System helps you manage maintenance operations through Job Orders (JO). This guide covers the complete workflow from creating a job order to final QC approval.</p>
      <h3 id="dashboard">Dashboard</h3>
      <p >The dashboard provides an overview of maintenance activities and key metrics.</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2025-02-19_090650.png" alt="" />
      <div className="under-pic">Figure 1: Maintenance Dashboard</div>
      <h3 id="job-order management">Job Order Management</h3>
      <h4 id="accessing-job orders">Accessing Job Orders</h4>
      <p>Navigate to the Job Order section to view all maintenance requests.</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_090536.png" alt="" />
      <div className="under-pic">Figure 2: Job Order List View</div>
      <h4 id="createing-a new job order">Creating a New Job Order</h4>
      <h5>Step 1 Initialize New Job Order</h5>
      <p>1. Go to "Job Order List"</p>
      <p>2. Click "New JO" button</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_090655.png" alt="" />
      <div className="under-pic">Figure 3: Creating New Job Order</div>
      <h5>Step 2 Fill Job Order Details</h5>
      <p>1. Input required Information</p>
      <p>2. Add additional task using "Add Task" buuton if needed</p>
      <p>3. Click "Save" to submit</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_090817.png" alt="" />
      <div className="under-pic">Figure 4: Job Order Details Form</div>
      <h4>Step 3 Completion</h4>
      <p>Job Order status updates to indicate completion</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_092113.png" alt="" />
      <div className="under-pic">Figure 13: Final Completion Status</div>
      <div className="div-button">
        <BackButton text="Back" subtext="SMMS User Guide" onClick={() => navigate("/")} />
        <NextButton text="Next" subtext="Warehouse" onClick={() => navigate("/warehouse")} />
      </div>
    </div>
  );
};

export default Maintenance;
