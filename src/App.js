import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layouts/SideBar";
import Navbar from "./components/layouts/NavBar";
import UserGuidePage from "./components/page/UserGuidePage";
import Maintenance from "./components/page/MaintenancePage";
import Warehouse from "./components/page/WarehousePages";
import Procurement from "./components/page/ProcurementPage";
import Accounting from "./components/page/AccountingPage";
import Appoved from "./components/page/ApprovedPage";
import Expense from "./components/page/ExpenseManagementPage";
import AccidentRecord from "./components/page/AccidentPage";
import Distance from "./components/page/DistancePage";
import MasterData from "./components/page/MasterDataPage";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-white dark:bg-navy text-black dark:text-white">
        <Sidebar />
        <Navbar />
        <div className="w-full md:ml-64 lg:mr-64 p-10">
          <Routes>
            <Route path="/" element={<UserGuidePage />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/warehouse" element={<Warehouse />}/>
            <Route path="/procurement" element={<Procurement />}/>
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/approved" element={<Appoved/>} />
            <Route path="/expense_management" element={<Expense />}/>
            <Route path="/accident_record" element={<AccidentRecord />} />
            <Route path="/distance" element={<Distance />}/>
            <Route path="/master" element={<MasterData />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
