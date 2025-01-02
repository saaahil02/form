
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/page2.css";

function Page2() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/googleform");
  };

  return (
    
    <div className="page2-container">
      <h2>Enter Event Details</h2>
      
      <div className="form-group">
        <label>Event Name</label>
        <input type="text" placeholder="Enter event name" />
      </div>
      <div className="form-group">
        <label>College Name</label>
        <input type="text" placeholder="Enter event name" />
      </div>
      <div className="form-group">
        <label>Event Date</label>
        <input type="date" />
      </div>
     
      <div className="form-group">
        <label>Event Time</label>
        <input type="time" placeholder="Enter event name" />
      </div>
      <div className="form-group">
        <label>Event Venue</label>
        <input type="text" placeholder="Enter event name" />
      </div>
      <div className="form-group">
        <label>Event Description</label>
        <textarea placeholder="Enter event description"></textarea>
      </div>
      <div className="form-group">
        <label>Upload Document</label>
        <input type="file" />
      </div>
      <button className="submit-button" onClick={handleButtonClick}>
        Add Form
      </button>
      <br></br>
      <button className="submit-button" onClick={handleButtonClick}>
        List Event
      </button>
    </div>
  );
}

export default Page2;
