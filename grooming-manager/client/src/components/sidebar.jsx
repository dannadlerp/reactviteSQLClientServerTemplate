import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import Calendar from "./calendar";

function Sidebar({ onDateChange, toggleAppointmentBooking }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); //passing selected date up to parent component
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu-item">
          <Link to="/profile" style={{ color: "lightgrey" }}>
            Groomer Profile
          </Link>
        </li>
        <li className="menu-item" onClick={toggleAppointmentBooking}>
          <span>Appointments</span>
        </li>
        <li className="menu-item" onClick={toggleAppointmentBooking}>
          <span style={{ color: "lightgrey" }}>Client Profiles</span>
        </li>
        <li className="menu-item has-submenu">
          <a href="#">Groom/Prices</a>
          <ul className="submenu">
            <li className="submenu-item">
              <Link to="/grooming-services">Grooming Services</Link>
            </li>
            <li className="submenu-item">
              <Link to="/prices">Prices</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <Calendar onDateChange={handleDateChange} />
        </li>
        <li className="menu-item">
          <span className="menu-link" /*  onClick={openModal} */>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
