import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NextButton from "../functions/NextButtons";
import BackButton from "../functions/BackButton";
import { scrollToSection } from "../functions/ScrollToSection";
import TOCAccident from "../table_on_contents/TOCAccident";

const AccidentRecord = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        scrollToSection(location);
    }, [location]);

    return (
        <div className="main-page">
            <h1>Accident Record Management</h1>
            <hr />
            <TOCAccident />
            <h3 id="overview">Overview</h3>
            <p>The Accident Record feature allows users to document and manage accident incidents in the system. This guide will walk you through the process of creating a new accident record.</p>
            <h3 id="create-a new accident record">Creating a New Accident Record</h3>
            <h4 id="1. access accident record">1. Access Accident Record</h4>
            <p>1. From the main menu, select "Accident Record"</p>
            <p>2. The system will display the Accident Record list page</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_102723.png" alt="" />
            <div className="under-pic">Figure 1: Accident Record main screen</div>
            <h4 id="2. initialize new record">2. Initialize New Record</h4>
            <p>1. Click the "Add New" button to create a new accident record</p>
            <p>2. The system will display the accident record form</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_102819.png" alt="" />
            <div className="under-pic">Figure 2: New accident record form</div>
            <h4 id="3. fill in accident details">3. Fill in Accident Details</h4>
            <p>1. Complete all required information in the form</p>
            <p>2. Review the entered information for accuracy</p>
            <p>3. Click "Save" to submit the record</p>
            <h4 id="4. confirm record creation">4. Confirm Record Creation</h4>
            <p>After saving, the system will : </p>
            <p>1. Process your submission</p>
            <p>2. Display the saved record information</p>
            <p>3. Add the new record to the accident record list</p>
            <img src="http://webserv.thipparath.com/documents-api/public/uploads/screenshot_2024-11-13_102858.png" alt="" />
            <div className="under-pic">Figure 3: Confirmation screen showing saved accident record</div>
            <div className="div-button">
                <BackButton text="Back" subtext="Expense management" onClick={() => navigate("/expense_management")} />
                <NextButton text="Next" subtext="Distance management" onClick={() => navigate("/distance")} />
            </div>
        </div>
    );
};

export default AccidentRecord;
