// client/src/App.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import MainApp from "./pages/MainApp";
import BookingAppointments from "./components/bookingAppointments";
import "./App.css";

function App() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/models")
      .then((response) => setModels(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <React.StrictMode>
      <h1>Grooming Manager</h1>

      <div className="login-container">
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="appointments" element={<BookingAppointments />} />
        </Routes>
      </div>
    </React.StrictMode>
  );
  /* return (
    <div>
      <h1>Models</h1>
      <ul>
        {models.map((model) => (
          <li key={model.id}>{model.name}</li>
        ))}
      </ul>
    </div>
  ); */
}

export default App;
