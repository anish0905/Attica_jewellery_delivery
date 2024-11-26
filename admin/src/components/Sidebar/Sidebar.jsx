import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/addItem" className="sidebar-option">
          <CheckIcon />

          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <CheckIcon />

          <p>List Items</p>
        </NavLink>
        <NavLink to="/order" className="sidebar-option">
          <CheckIcon />

          <p>Order</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
