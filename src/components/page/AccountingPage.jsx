import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NextButton from "../functions/NextButtons";
import BackButton from "../functions/BackButton";
import TOCAccounting from "../table_on_contents/TOCAccounting";
import { scrollToSection } from "../functions/ScrollToSection";

const AccountingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        scrollToSection(location);
    }, [location]);

    return (
        <div className="main-page">
            <h1>Accounting Management</h1>
            <hr />
            <TOCAccounting />
            <h3 id="overview">Overview</h3>
            <p>The Accounting module provides comprehensive management of financial transactions including Purchase Requisitions (PR), Purchase Orders (PO), and Payments. This guide will help you navigate through the accounting features of the system.</p>
            <h3 id="accessing-accounting features">Accessing Accounting Features</h3>
            <h4 id="navigate-to accounting list">Navigate to Accounting List</h4>
            <p>1. From the main menu, select "Accounting List"</p>
            <p>2. The system will display the main accounting dashboard</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2025-02-25_083742.png" alt="" />
            <div className="under-pic">Figure 1: Main Accounting Dashboard</div>
            <h4 id="available-fetures">Available Features</h4>
            <p>The Accounting module includes three main components :</p>
            <strong>1. Purchase Requisition (PR)</strong>
            <div className="data-detail">
                <p>- Create and manage purchase requests</p>
                <p>- Track PR status and approvals</p>
                <p>- View PR history</p>
            </div>
            <strong>2. Purchase Order (PO)</strong>
            <div className="data-detail">
                <p>- Generate purchase orders from approved PRs</p>
                <p>- Manage vendor relationships</p>
                <p>- Track order status</p>
            </div>
            <strong>3. Payment</strong>
            <div className="data-detail">
                <p>- Process payments for approved POs</p>
                <p>- Track payment status</p>
                <p>- Maintain payment records</p>
            </div>
            
            <h3 id="using-the accounting module">Using the Accounting Module</h3>
            <h5>Purchase Requisition (PR)</h5>
            <p>Click on the PR section to :</p>
            <div className="data-detail">
                <p>- Create new purchase requisitions</p>
                <p>- Review pending PRs</p>
                <p>- Track PR approval status</p>
                <p>- Access PR history</p>
            </div>

            <h5>Purchase Order (PO)</h5>
            <p>Access the PO section to :</p>
            <div className="data-detail">
                <p>- Convert approved PRs to POs</p>
                <p>- Manage vendor information</p>
                <p>- Monitor order fulfillment</p>
                <p>- View PO reports</p>
            </div>

            <h5>Payment Processing</h5>
            <p>Use the Payment section to :</p>
            <div className="data-detail">
                <p>- Process payments for completed POs</p>
                <p>- Track payment schedules</p>
                <p>- Generate payment reports</p>
                <p>- Maintain payment records</p>
            </div>
            <div className="div-button">
                <BackButton text="Back" subtext="Procurement" onClick={() => navigate("/procurement")} />
                <NextButton text="Next" subtext="Approved" onClick={() => navigate("/approved")} />
            </div>
        </div>
    );
};

export default AccountingPage;
