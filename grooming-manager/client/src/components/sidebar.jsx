import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import Calendar from "./calendar";

function Sidebar({
  onDateChange,
  toggleAppointmentBooking,
  toggleClientManager,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); //passing selected date up to parent component
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu-item">
          {/*           <Link to="/profile" style={{ color: "lightgrey" }}>
           */}{" "}
          <span style={{ color: "lightgrey" }}>Groomer Profile</span>
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
            <li className="submenu-item" onClick={toggleAppointmentBooking}>
              {/* <Link to="/grooming-services"> */}
              <span style={{ color: "lightgrey" }}>Grooming Services</span>
            </li>
            <li className="submenu-item" onClick={toggleAppointmentBooking}>
              {/* <Link to="/prices"> */}
              <span style={{ color: "lightgrey" }}>Prices</span>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <Calendar onDateChange={handleDateChange} />
        </li>
        <li className="menu-item has-submenu">
          <a href="#">Manage</a>
          <ul className="submenu">
            <li className="submenu-item" onClick={toggleAppointmentBooking}>
              {/* <Link to="/pets">Pets</Link> */}
              <span>Pets</span>
            </li>
            <li className="submenu-item" onClick={toggleAppointmentBooking}>
              {/* <Link to="/clients">Clients</Link> */}
              <span>Clients</span>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <span className="menu-link" /*  onClick={openModal} */>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
