import React, { useState } from "react";
import "./appointmentBlock.css";

const AppointmentBlock = ({ time, details }) => {
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  return (
    <div className="row">
      <div className="time-column">
        {/* <h3>Time</h3> */}
        <input type="text" value={time} readOnly />
      </div>
      <div className="details-column">
        {/* <h3>Details</h3> */}
        <input type="text" value={details} readOnly />
      </div>
    </div>
  );
};

export default AppointmentBlock;
