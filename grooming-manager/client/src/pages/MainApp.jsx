import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Modal from "../components/modal";
import BookingAppointments from "../components/bookingAppointments";
import ClientProfile from "../components/clientProfile";

const MainApp = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAppointments, setShowAppointments] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const toggleAppointmentBooking = () => {
    setShowAppointments((prevShowAppointments) => !prevShowAppointments);
  };

  return (
    <div>
      <Sidebar
        onDateChange={handleDateChange}
        toggleAppointmentBooking={toggleAppointmentBooking}
      />

      <div>
        {/* pass the selectedDate to the BookingAppointments component */}
        {showAppointments && (
          <BookingAppointments selectedDate={selectedDate} />
        )}
        <ClientProfile />
        <h2>Main App</h2>
        <p>
          This is the main app. You can go to the <Link to="/login">login</Link>{" "}
          page or the <Link to="/register">register</Link> page.
        </p>
      </div>
    </div>
  );
};

export default MainApp;
