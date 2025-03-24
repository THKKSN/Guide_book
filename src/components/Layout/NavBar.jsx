import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaWarehouse, FaBookOpen, FaTools  } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import DarkModeToggle from "../functions/DarkModeToggle";

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