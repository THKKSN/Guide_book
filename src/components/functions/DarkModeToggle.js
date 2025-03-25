import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center space-x-2">
      {/* Icon Sun */}
      <FaSun className={`text-yellow-500 ${darkMode ? "opacity-50" : "opacity-100"}`} size={20} />

      {/* Slide Switch */}
      <div
        className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-purple-300 rounded-full p-1 cursor-pointer`}
        onClick={() => setDarkMode(!darkMode)}
      >
        <div
          className={`bg-white dark:bg-purple-900 w-5 h-5 rounded-full shadow-md transform duration-300 ${
            darkMode ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>

      {/* Icon Moon */}
      <FaMoon className={`text-blue-500 ${darkMode ? "opacity-100" : "opacity-50"}`} size={20} />
    </div>
  );
};

export default DarkModeToggle;