import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TOCWarehouse from "../table_on_contents/TOCWarehouse";
import NextButton from "../functions/NextButtons";
import BackButton from "../functions/BackButton";
import { scrollToSection } from "../functions/ScrollToSection";

const Warehouse = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    scrollToSection(location);
  }, [location]);

  return (
    <div className="main-page">
      <h1 >Warehouse Management System</h1>
      <hr />
      <TOCWarehouse />
      <h3 id="overview">Overview</h3>
      <p>The Warehouse Management System provides comprehensive tools for managing inventory, handling goods receipt and withdraw, and tracking stock movements. This guide will walk you through the main features and processes of the warehouse system.</p>
      <h3 id="dashboard">Dashboard</h3>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_21-2-2025_85226_localhost.jpeg" alt="" />
      <div className="under-pic">Figure 1: Warehouse Management Dashboard</div>
      <h3 id="main-interface">Main Interface</h3>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_092440.png" alt="" />
      <div className="under-pic">Figure 2: Warehouse Main Interface</div>
      <p>Key Components</p>
      <p>1. Warehouse Inventory Display - Shows current items in warehouse</p>
      <p>2. Operation Tabs - Access to Withdraw Goods, Receive Goods, and Stock Card</p>
      <p>3. Quick Actions - Create new withdraw requests</p>
      <p>4. Status Overview - Current warehouse status and metrics</p>
      <p>5. Item Management - Options to view details, update, and delete items</p>
      <h3 id="warehouse-operations">Warehouse Operations</h3>
      <h4 id="1. receiving-goods">1. Receiving Goods</h4>
      <h5>Standard Items Reception</h5>
      <p>1. Access the Receive Goods tab</p>
      <p>2. Process waiting receipts:</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_092917.png" alt="" />
      <div className="under-pic">Figure 3: Receiving Goods Interface</div>
      <div className="data-detail">
        <p>- Select "Waiting Receive" items</p>
        <p>- Click update button for processing</p>
      </div>
      <p>3. Update receipt details :</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_093022.png" alt="" />
      <div className="under-pic">Figure 4: Receipt Update Form</div>
      <div className="data-detail">
        <p>- Verify item information</p>
        <p>- Enter acceptable quantity</p>
        <p>- Select receiver name</p>
        <p>- Save the changes</p>
      </div>
      <p>4. Complete the reception :</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_093133.png" alt="" />
      <div className="under-pic">Figure 5: Reception Completion</div>
      <div className="data-detail">
        <p>- Review final information</p>
        <p>- Check remaining quantities</p>
        <p>- Confirm receiver details</p>
        <p>- Click Complete to finish</p>
      </div>
      <h5>Tire Reception Process</h5>
      <p>Special handling for tire items :</p>
      <p>1. Initial Processing</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_093420.png" alt="" />
      <div className="under-pic">Figure 6: Tire Reception Form</div>
      <div className="data-detail">
        <p>- Verify tire information</p>
        <p>- Enter Serial Numbers</p>
        <p>- Select receiver</p>
        <p>- Save details</p>
      </div>
      <p>2. Completion :</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_093518.png" alt="" />
      <div className="under-pic">Figure 7: Tire Reception Completion</div>
      <div className="data-detail">
        <p>- Verify all information</p>
        <p>- Confirm Serial Numbers</p>
        <p>- Complete this process</p>
      </div>
      <h4 id="2. withdrawing-goods">2. Withdrawing Goods</h4>
      <h5>Standard Items Withdraw</h5>
      <p>1. Access withdraw section:</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_093714.png" alt="" />
      <div className="under-pic">Figure 8: Withdraw Process</div>
      <div className="data-detail">
        <p>- Select Warehouse List</p>
        <p>- Navigate to Withdraw Good tab</p>
        <p>- Click update icon</p>
        </div>
      <p>2. Process withdraw :</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_093811.png" alt="" />
      <div className="under-pic">Figure 9: Withdraw Form</div>
      <div className="data-detail">
        <p>- Verify withdraw information</p>
        <p>- Confirm and save</p>
      </div>
      <h5>Tire Withdraw Process</h5>
      <p>Special handling for tire items :</p>
      <p>1. Tire Selection :</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_093946.png" alt="" />
      <div className="under-pic">Figure 10: Tire Withdraw Form</div>
      <div className="data-detail">
        <p>- Select Serial Number</p>
        <p>- Specify desired position</p>
        <p>- Save changes</p>
      </div>
      <h4 id="3. stock-card management">3. Stock Card Management</h4>
      <p>1. Accessing Stock Cards :</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_094130.png" alt="" />
      <div className="under-pic">Figure 11: Stock Card Interface</div>
      <div className="data-detail">
        <p>- Navigate to Warehouse List</p>
        <p>- Select Stock Card tab</p>
        <p>- Click view icon</p>
      </div>
      <p>Stock Card Details :</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_094226.png" alt="" />
      <div className="under-pic">Figure 12: Stock Card Information</div>
      <div className="data-detail">
        <p>- View comprehensive stock information</p>
        <p>- Track goods movement history</p>
        <p>- Review timestamps for all transactions</p>
      </div>
      <h5>Inventory Dashboard</h5>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_21-2-2025_85620_localhost.jpeg" alt="" />
      <div className="under-pic">Figure 13: Inventory Dashboard</div>
      <h4 id="4. inventory-management">4. Inventory Management</h4>
      <p>1. Inventory Product Detail :</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_19-2-2025_92846_localhost.jpeg" alt="" />
      <div className="under-pic">Figure 14: Inventory Product</div>
      <p>2. Inventory Date Detail :</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_19-2-2025_93437_localhost.jpeg" alt="" />
      <div className="under-pic">Figure 15: Inventory Date</div>
      <p>3. Inventory Truck Detail:</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_19-2-2025_93617_localhost.jpeg" alt="" />
      <div className="under-pic">Figure 16: Inventory Truck</div>
      <h4 id="5. tire-management">5. Tire Mannagement</h4>
      <p>1. Assigned Tire:</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2025-02-19_094035.png" alt="" />
      <div className="under-pic">Figure 17: Assigned Tire</div>
      <p>View Details Tire of Truck :</p>
      <p>1. Click History icons you want to view truck</p>
      <p>2. Show page logbook history tire of truck:</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_19-2-2025_95736_localhost.jpeg" alt="" />
      <div className="under-pic">Figure 18: Page Log Book</div>
      <p>3. Click Tire icons show Tire Diagrams of truck:</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_19-2-2025_1011_localhost.jpeg" alt="" />
      <div className="under-pic">Figure 19: Page Tire Diagrams</div>
      <p>4. Tire :</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2025-02-19_100523.png" alt="" />
      <div className="under-pic">Figure 20: Tire</div>
      <p>5. Tire Date :</p>
      <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_19-2-2025_10710_localhost.jpeg" alt="" />
      <div className="under-pic">Figure 21:Tire Date</div>
      <div className="div-button">
        <BackButton text="Back" subtext="Maintenance" onClick={() => navigate("/maintenance")} />
        <NextButton text="Next" subtext="Procurement" onClick={() => navigate("/procurement")} />
      </div>
    </div>
  );
};

export default Warehouse;
