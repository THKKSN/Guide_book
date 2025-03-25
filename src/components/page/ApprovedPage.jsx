import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NextButton from "../functions/NextButtons";
import BackButton from "../functions/BackButton";
import TOCApproved from "../table_on_contents/TOCApproved";
import { scrollToSection } from "../functions/ScrollToSection";

const Appovedpage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        scrollToSection(location);
    }, [location]);

    return (
        <div className="main-page">
            <h1>Approval Management System</h1>
            <hr />
            <TOCApproved />
            <h3 id="overview">Overview</h3>
            <p>The Approval Management System allows users to review and manage various types of approval requests including Job Orders, Purchase Requisitions (PR), Purchase Orders (PO), and Payments. This guide will walk you through the approval process for each type of request.</p>
            <h3 id="accessing-approval list">Accessing Approval List</h3>
            <p>1. From the main menu, select "Approved List"</p>
            <p>2. The system will display the main approval dashboard with different tabs for each type of request</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_100116.png" alt="" />
            <div className="under-pic">Figure 1: Main Approval Dashboard</div>
            <h3 id="managing-defferent types of approvals">Managing Different Types of Approvals</h3>
            <h4 id="job-order approvals">Job Order Approvals</h4>
            <p>1. By default, the system shows Job Order requests pending approval</p>
            <p>2. Review the list of pending Job Orders with their details :</p>
            <div className="data-detail">
                <p>- Order number</p>
                <p>- Request date</p>
                <p>- Department</p>
                <p>- Status</p>
            </div>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-22_112300.png" alt="" />
            <div className="under-pic">Figure 2: Job Order Approval List</div>
            <h4 id="purchase-requisition (PR) approvals">Purchase Requisition (PR) Approvals</h4>
            <p>1. Click on the "PR" tab</p>
            <p>2. View the list of Purchase Requisitions waiting for approval</p>
            <p>3. Each PR entry shows :</p>
            <div className="data-detail">
                <p>- PR number</p>
                <p>- Requester information</p>
                <p>- Request details</p>
                <p>- Current approval status</p>
            </div>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_100200.png" alt="" />
            <div className="under-pic">Figure 3: Purchase Requisition Approval List</div>
            <h4 id="purchase-order (PO) approvals">Purchase Order (PO) Approvals</h4>
            <p>1. Select the "PO" tab</p>
            <p>2. Review pending Purchase Orders</p>
            <p>3. Check important PO information :</p>
            <div className="data-detail">
                <p>- PO number</p>
                <p>- Vendor details</p>
                <p>- Order amount</p>
                <p>- Approval status</p>
            </div>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_100237.png" alt="" />
            <div className="under-pic">Figure 4: Purchase Order Approval List</div>
            <h4 id="payment-approvals">Payment Approvals</h4>
            <p>1. Navigate to the "Payment" tab</p>
            <p>2. View pending payment requests</p>
            <p>3. Review payment details :</p>
            <div className="data-detail">
                <p>- Payment amount</p>
                <p>- Payment method</p>
                <p>- Related PO/PR information</p>
                <p>- Supporting documents</p>
            </div>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_100309.png" alt="" />
            <div className="under-pic">Figure 4: Payment Approval List</div>
            <div className="div-button">
                <BackButton text="Back" subtext="Accounting" onClick={() => navigate("/accounting")} />
                <NextButton text="Next" subtext="Expense Management" onClick={() => navigate("/expense_management")} />
            </div>
        </div>
    );
};

export default Appovedpage;
