import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ filterItem }) => {
  return (
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick={() => filterItem("create")}>
          Create Form
        </button>
        <button className="btn-group__item" onClick={() => filterItem("preview")}>
          Form Preview
        </button>
        <button className="btn-group__item" onClick={() => filterItem("response")}>
          Form Response
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
