import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import AppointmentBlock from "./appointmentBlock";
import "./appointmentsBox.css";

/* accept the selectedDate prop and display it in the header */
const BookingAppointments = ({ selectedDate }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const currentHour = Number(dayjs().format("H"));

    const applyTimeBlockClasses = () => {
      const timeBlocks = document.querySelectorAll(".time-block");
      timeBlocks.forEach((timeBlock) => {
        const hour = parseInt(timeBlock.getAttribute("id").split("-")[1]);

        if (hour < currentHour) {
          timeBlock.classList.add("past");
        } else if (hour === currentHour) {
          timeBlock.classList.add("present");
        } else {
          timeBlock.classList.add("future");
        }
      });
    };

    let time = "5:00pm";
    let details = "test1";
    applyTimeBlockClasses();
  }, []);

  const handleSaveButtonClick = (buttonHour) => {
    const textToStore = textareaRef.current.value;
    localStorage.setItem(buttonHour.toString(), textToStore);
  };

  const theDate = dayjs().format("dddd, MMMM, DD, YYYY");

  const formattedSelectedDate = dayjs(selectedDate).format(
    "dddd, MMMM DD, YYYY"
  );

  return (
    <div className="appointment-box">
      <h2 id="headerDate">Appointment info for {formattedSelectedDate}</h2>

      {/* <AppointmentBlock time={time} details={details} /> */}
      <AppointmentBlock time={"6:00pm"} details={"test2"} />
      <AppointmentBlock time={"7:00pm"} details={"test3"} />
    </div>
  );
};

export default BookingAppointments;
