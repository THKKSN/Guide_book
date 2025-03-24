import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Layout/SideBar";
import Navbar from "./components/Layout/NavBar";
import UserGuidePage from "./components/page/UserGuidePage";
import Maintenance from "./components/page/MaintenancePage";
import Warehouse from "./components/page/WarehousePages";
import Procurement from "./components/page/ProcurementPage";

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
