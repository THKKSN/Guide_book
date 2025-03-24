import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TOCExpense from "../table_on_contents/TOCExpense";
import NextButton from "../functions/NextButtons";
import BackButton from "../functions/BackButton";
import { scrollToSection } from "../functions/ScrollToSection";

const ManagementPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    scrollToSection(location);
  }, [location]);

  return (
    <div className="main-page">
      <h1>Expense Management System</h1>
      <hr />
      <TOCExpense />
      <h3 id="overview">Overview</h3>
      <p>The Expense Management System allows users to manage and track expenses through manual entry or bulk import via Excel. This guide will walk you through the process of managing expenses in the system.</p>
      <h3 id="dashboard">Dashboard</h3>
      <p>The expense dashboard provides an overview of all expense-related activities and summaries.</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_19-2-2025_92143_localhost.jpeg" alt="" />
      <div className="under-pic">Figure 1: Expense Management Dashboard</div>
      <h3 id="managing-expenses">Managing Expenses</h3>
      <h4 id="accessing-expense list">Accessing Expense List</h4>
      <p>Navigate to the Expense List section to view and manage all expenses.</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_100358.png" alt="" />
      <div className="under-pic">Figure 2: Expense List View</div>
      <h4 id="createing-new expenses">Creating New Expenses</h4>
      <h5 id="method 1 : manual entry">Method 1 : Manual Entry</h5>
      <strong>Step 1 : Initialize New Expense</strong>
      <p>1. Go to "Expense List"</p>
      <p>2. Click "New Expense" button</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_100433.png" alt="" />
      <div className="under-pic">Figure 3: New Expense Form</div>
      <strong>Step 2 : Enter Expense Details</strong>
      <p>1. Fill in all required information</p>
      <p>2. Review entered information</p>
      <p>3. Click "Save" to submit</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_100512.png" alt="" />
      <div className="under-pic">Figure 4: Expense Details View</div>
<h5 id="method 2 : bulk import via excel">Method 2 : Bulk Import via Excel</h5>
<strong>Step 1: Access Import Function</strong>
<p>1. Click "Import" button in the Expense List</p>
<p>2. System will display import interface</p>
<img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_100544.png" alt="" />
<div className="under-pic">Figure 5: Import Button Location</div>
<strong>Step 2: File Selection</strong>
<p>1. Click to browse or drag and drop your Excel file</p>
<p>2. Select the appropriate Excel file containing expense data</p>
<img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_100608.png" alt="" />
<div className="under-pic">Figure 6: File Selection Interface</div>
<strong>Step 3: Review Imported Data</strong>
<p>1. System will display preview of imported data</p>
<p>2. Verify the information is correct</p>
<p>3. Confirm import</p>
<img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_100634.png" alt="" />
<div className="under-pic">Figure 7: Import Data Preview</div>
<h3 id="excel-template format">Excel Template Format</h3>
<p>For successful import, your Excel file should follow this format:</p>
<img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_102607.png" alt="" />
<div className="under-pic"> Figure 8: Excel Template Example</div>
<p>Required columns :</p>
<div className="data-detail">
  <p>- Date</p>
  <p>- Description</p>
  <p>- Amount</p>
  <p>- Category</p>
  <p>- Additional Notes (optional)</p>
</div>
      <div className="flex justify-between gap-10">
        <BackButton text="Back" subtext="Approved" onClick={() => navigate("/approved")} />
        <NextButton text="Next" subtext="Accident Record" onClick={() => navigate("/accident")} />
      </div>
    </div>
  );
};

export default ManagementPage;
