import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackButton from "../functions/BackButton";
import NextButton from "../functions/NextButtons";
import TOCProcurement from "../table_on_contents/TOCProcurement";
import { scrollToSection } from "../functions/ScrollToSection";

const ProcurementPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        scrollToSection(location);
    }, [location]);

    return (
        <div className="main-page">
            <h1>Procurement Management System</h1>
            <hr />
            <TOCProcurement />
            <h3 id="overview">Overview</h3>
            <p>The Procurement Management System enables users to create and manage purchase requests (PR) and purchase orders (PO). This guide provides step-by-step instructions for managing procurement processes.</p>
            <h3 id="accessing-procurement list">Accessing Procurement List</h3>
            <h4>Navigate to Procurement List</h4>
            <p>1. From the main menu, select "Procurement List"</p>
            <p>2. The system will display the procurement dashboard with different tabs for PR and PO</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_094734.png" alt="" />
            <div className="under-pic">Figure 1: Main Procurement Dashboard</div>
            <h3 id="managing-purchase requests(PR)">Managing Purchase Requests (PR)</h3>
            <h4>Creating New Purchase Request</h4>
            <p>1. Click "New PR" button to initiate a new request</p>
            <p>2. Fill in the required information :</p>
            <div className="data-detail">
                <p>- Order Type</p>
                <p>- Job Order Number (if applicable)</p>
                <p>- Add Product details (via NewItem button)</p>
                <p>- Quantity and ETA</p>
                <p>- Requester information</p>
            </div>

            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_094820.png" alt="" />
            <div className="under-pic">Figure 2: Purchase Request Creation Form</div>
            <h4>Reviewing PR Status</h4>
            <p>1. After saving, the PR will show status as "waiting"</p>
            <p>2. Click the update icon to proceed with approval</p>
            <p>3. Select approver from dropdown list</p>
            <p>4. Click "Approve" to confirm</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_095203.png" alt="" />
            <div className="under-pic">Figure 3: PR Status and Approval</div>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_095316.png" alt="" />
            <div className="under-pic">Figure 4: PR Approval Process</div>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_095359.png" alt="" />
            <div className="under-pic">Figure 5: Completed PR Approval</div>
            <h3 id="managing-purchase orders(PO)">Managing Purchase Orders (PO)</h3>
            <h4 id="creating-new purchase order">Creating New Purchase Order</h4>
            <p>1. Click "New PO" button from the Procurement List</p>
            <p>2. Complete the PO form with required details:</p>
            <div className="data-detail">
                <p>- Authorization Level selection (1-3)</p>
                <p>- Supporting documents (images/PDF)</p>
                <p>- Related PR information</p>
            </div>

            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_095455.png" alt="" />
            <div className="under-pic">Figure 6: Purchase Order Creation</div>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_095530.png" alt="" />
            <div className="under-pic">Figure 7: PO Information Form</div>
            <h4 id="reviewing-PO details">Reviewing PO Details</h4>
            <p>1. Verify selected PR data is correct</p>
            <p>2. Ensure all required fields are completed</p>
            <p>3. Click "Save" to submit PO</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_095635.png" alt="" />
            <div className="under-pic">Figure 8: PO Review and Submission</div>
            <h4 id="PO-approval process">PO Approval Process</h4>
            <p>1. Navigate to "PO" tab</p>
            <p>2. Locate PO with "Waiting Approved" status</p>
            <p>3. Click edit icon to begin approval</p>
            <p>4. Verify approval level matches authorization</p>
            <p>5. Click "Approve" to finalize</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_095714.png" alt="" />
            <div className="under-pic">Figure 9: PO Approval List</div>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_095826.png" alt="" />
            <div className="under-pic">Figure 10: PO Approval Process</div>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_095929.png" alt="" />
            <div className="under-pic">Figure 11: Completed PO Approval</div>
            <h4 id="product-price">Product Price</h4>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_19-2-2025_112816_localhost.jpeg" alt="" />
            <div className="under-pic">Figure 12: Product Price</div>
            <h4 id="report">Report</h4>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_19-2-2025_113048_localhost.jpeg" alt="" />
            <div className="under-pic">Figure 13: Report</div>
            <div className="div-button">
                <BackButton text="Back" subtext="Warehouse" onClick={() => navigate("/warehouse")} />
                <NextButton text="Next" subtext="Accounting" onClick={() => navigate("/accounting")} />
            </div>
        </div>
    );
};

export default ProcurementPage;
