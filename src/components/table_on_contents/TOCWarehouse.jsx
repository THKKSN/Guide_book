import React, { useEffect, useState } from "react";

const TOCWarehouse = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id); 
    }
  };

  return (
    <div className="toc">
      <h2 className="head-on-this-page">On this page</h2>
      <ul className=" space-y-2">
        {[
          "overview",
          "dashboard",
          "main-interface",
          "warehouse-operations",
          "1. receiving-goods",
          "2. withdrawing-goods",
          "3. stock-card management",
          "4. inventory-management",
          "5. tire-management",
        ].map((id) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`onclick ${
                activeSection === id
                  ? "font-bold  bg-blue-100 dark:bg-blue-700 p-2"
                  : ""
              }`}
            >
              {id
                .replace("-", " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TOCWarehouse;
