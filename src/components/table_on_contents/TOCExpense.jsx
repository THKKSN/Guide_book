import React, { useEffect, useState } from "react";

const  TOCExpense = () => {
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
          "managing-expenses",
          "accessing-expense list",
          "createing-new expenses",
          "method 1 : manual entry",
          "method 2 : bulk import via excel",
          "excel-template format"

          
        ].map((id) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`onclick ${activeSection === id ? "click" : ""}`}
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

export default TOCExpense;
