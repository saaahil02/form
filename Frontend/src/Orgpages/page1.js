
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/page1.css";

function Page1() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/page2");
  };

  return (

    <div className="page1-container">
        
      <button className="center-button" onClick={handleButtonClick}>
        Create Event
      </button>
    </div>
  );
}

export default Page1;
