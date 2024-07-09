import React, { useState, useEffect } from "react";
import "./calendar.css"; // Import CSS file for styling
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

function Calendar({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth() + 1);

  //passing selected date up to parent component
  useEffect(() => {
    onDateChange(selectedDate);
  }, [selectedDate, onDateChange]);

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePrevMonth = () => {
    setMonth(month - 1);
  };

  const handleNextMonth = () => {
    setMonth(month + 1);
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(year, month - 1, day));
  };

  const renderDays = () => {
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    const totalDays = daysInMonth(month, year);
    const days = [];

    // Fill empty days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    // Render days of the month
    for (let i = 1; i <= totalDays; i++) {
      days.push(
        <div
          key={i}
          className={`day ${
            selectedDate.getDate() === i &&
            selectedDate.getMonth() === month - 1
              ? "selected"
              : ""
          }`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button className="arrow" onClick={handlePrevMonth}>
          <img src={leftArrow} alt="Left Arrow" />
        </button>
        <div>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
          />
          <select
            value={month}
            onChange={(e) => setMonth(parseInt(e.target.value))}
          >
            {monthNames.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <button className="arrow" onClick={handleNextMonth}>
          <img src={rightArrow} alt="Right Arrow" />
        </button>
      </div>
      <div className="days-container">
        <div className="day-label">Sun</div>
        <div className="day-label">Mon</div>
        <div className="day-label">Tue</div>
        <div className="day-label">Wed</div>
        <div className="day-label">Thu</div>
        <div className="day-label">Fri</div>
        <div className="day-label">Sat</div>
        {renderDays()}
      </div>
      <div>Selected Date: {selectedDate.toDateString()}</div>
    </div>
  );
}

export default Calendar;
