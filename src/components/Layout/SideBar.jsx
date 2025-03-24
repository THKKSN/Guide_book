import React from "react";
import { Link } from "react-router-dom";
import { FaWarehouse,FaBookOpen,FaTools  } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import DarkModeToggle from "../functions/DarkModeToggle";

const Sidebar = () => {
  const handleClickGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="hidden md:block w-64 h-screen fixed top-0 left-0 bg-gray-900 text-white p-5 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-5 pt-10">Guide Book</h2>
      <nav>
        <ul className="space-y-3">
          <li>
            <Link to="/" onClick={handleClickGoTop} className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700">
              <FaBookOpen /> <span>SMMS User Guide</span>
            </Link>
          </li>
          <li>
            <Link to="/maintenance" onClick={handleClickGoTop} className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700">
              <FaTools  /> <span>Maintenance</span>
            </Link>
          </li>
          <li>
            <Link to="/warehouse" onClick={handleClickGoTop} className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700">
              <FaWarehouse /> <span>Warehouse</span>
            </Link>
          </li>
          <li>
            <Link to="/procurement" onClick={handleClickGoTop} className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700">
              <IoDocumentSharp /> <span>Procurement</span>
            </Link>
          </li>
        </ul>
        <div className="flex justify-center absolute inset-x-0 bottom-20">
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;