import React from "react";
import { SlArrowLeft } from "react-icons/sl";

const BackButton = ({ text, subtext, onClick }) => {
  const handleClickGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    onClick(); 
  };
  return (
    <button className="flex flex-col next-button" onClick={handleClickGoTop}>
      <div className="flex items-center space-x-2">
        <SlArrowLeft />
        <span>{text}</span>   
      </div>
      {subtext && <h5>{subtext}</h5>}
    </button>
  );
};

export default BackButton;
