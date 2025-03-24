import React, { useEffect, useState } from "react";

const TOCAccounting = () => {
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
      { threshold: 0.6 } // Section ต้องแสดง 60% ถึงจะถือว่าเป็น Active
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // เมื่อคลิก TOC ให้ Scroll ไปยัง Section ที่ต้องการ
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id); // อัปเดต State ทันทีเมื่อคลิก
    }
  };

  return (
    <div className="toc">
      <h2 className="head-on-this-page">On this page</h2>
      <ul className=" space-y-2">
        {[
          "overview",
          "accessing-accounting features",
          "navigate-to accounting list",
          "available-fetures",
          "using-the accounting module",
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

export default TOCAccounting;
