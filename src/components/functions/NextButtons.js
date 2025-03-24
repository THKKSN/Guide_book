import React from "react";
import { SlArrowRight } from "react-icons/sl";

const NextButton = ({ text, subtext, onClick }) => {
  const handleClickGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    onClick(); 
  };

  return (
    <button className="flex flex-col next-button" onClick={handleClickGoTop}>
      <div className="flex items-center space-x-2">
        <span>{text}</span>
        <SlArrowRight />
      </div>
      {subtext && <h5>{subtext}</h5>}
    </button>
  );
};

export default NextButton;
