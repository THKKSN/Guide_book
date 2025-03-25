import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaWarehouse, FaBookOpen, FaTools  } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import DarkModeToggle from "../functions/DarkModeToggle";
import { HiDocumentCurrencyDollar,HiDocumentCheck } from "react-icons/hi2";
import { SiExpensify } from "react-icons/si";
import { FaTruckMoving, FaDatabase,FaCarBurst } from "react-icons/fa6";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false); 
  };

  return (
    <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-between">
      <h2 className="text-lg font-bold">Guide Book</h2>
      <button onClick={() => setIsOpen(!isOpen)} className="text-white">
        <FaBars size={24} />
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-gray-800 text-white p-5">
          <ul className="space-y-3">
            <li>
              <Link to="/" onClick={handleClickGoTop} className="flex items-center space-x-2">
                <FaBookOpen /> <span>SMMS User Guide</span>
              </Link>
            </li>
            <li>
              <Link to="/maintenance" onClick={handleClickGoTop} className="flex items-center space-x-2">
                <FaTools /> <span>Maintenance</span>
              </Link>
            </li>
            <li>
              <Link to="/warehouse" onClick={handleClickGoTop} className="flex items-center space-x-2">
                <FaWarehouse /> <span>Warehouse</span>
              </Link>
            </li>
            <li>
              <Link to="/procurement" onClick={handleClickGoTop} className="flex items-center space-x-2">
                <IoDocumentSharp /> <span>Procurement</span>
              </Link>
            </li>
            <li>
              <Link to="/accounting" onClick={handleClickGoTop} className="flex items-center space-x-2">
                <HiDocumentCurrencyDollar /> <span>Accounting</span>
              </Link>
            </li>
            <li>
              <Link to="/Approved" onClick={handleClickGoTop} className="flex items-center space-x-2">
                <HiDocumentCheck /> <span>Approved</span>
              </Link>
            </li>
            <li>
              <Link to="/expense_management" onClick={handleClickGoTop} className="flex items-center space-x-2">
                <SiExpensify /> <span>Expense management</span>
              </Link>
            </li>
            <li>
              <Link to="/accident_record" onClick={handleClickGoTop} className="flex items-center space-x-2">
                <FaCarBurst /> <span>Accident Record</span>
              </Link>
            </li>
            <li>
              <Link to="/distance" onClick={handleClickGoTop} className="flex items-center space-x-2">
                <FaTruckMoving /> <span>Distance</span>
              </Link>
            </li>
            <li>
              <Link to="/master" onClick={handleClickGoTop} className="flex items-center space-x-2">
                <FaDatabase /> <span>Master</span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-row-reverse">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;