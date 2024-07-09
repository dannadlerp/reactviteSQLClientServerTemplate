import React from "react";
import "./clientProfile.css";
import breeds from "../../api/breeds.json";
import photo from "../assets/petPhotos/chipHeeler.png";
import { useParams } from "react-router-dom";
const ClientProfile = ({
  image,
  /* lastName,
  firstName,
  petName,
  dateCalled,
  age,
  phoneNumber,
  notes,
  callBackDate,
  followUp,
  dateInitiallyBooked,
  breed,
  approxWeight,
  vaccinationsExpiry, */
}) => {
  let lastName = "Nadler";
  let firstName = "Dan";
  let petName = "Chip";
  let dateCalled = "2022-10-01";
  let age = "2017";
  let phoneNumber = "123-456-7890";
  let notes = "Lorem ipsum dolor sit amet";
  let callBackDate = "2022-10-05";
  let followUp = true;
  let dateInitiallyBooked = "2022-10-10";
  let breed = `${breeds.cattledog[0]} Cattle Dog`;
  let approxWeight = 50;
  let vaccinationsExpiry = "2023-01-01";

  return (
    <div className="client-profile">
      <div className="profile-picture">
        <img
          src={image || photo}
          alt={`dog client photo`}
          className="profile-image"
        />
      </div>
      <div className="profile-details">
        <h2>
          {petName} {lastName}
        </h2>
        <div className="profile-items">
          <p>
            <strong>Contact Name:</strong> {firstName}
          </p>
          <p>
            <strong>Date Called:</strong> {dateCalled}
          </p>
          <p>
            <strong>Age:</strong> {age} ({new Date().getFullYear() - 2017} years
            old)
          </p>
          <p>
            <strong>Phone Number:</strong> {phoneNumber}
          </p>
          <p>
            <strong>Call Back Date:</strong> {callBackDate}
          </p>
          <p>
            <strong>Follow Up:</strong> {followUp}
          </p>
          <p>
            <strong>Date Initially Booked:</strong> {dateInitiallyBooked}
          </p>
          <p>
            <strong>Breed:</strong> {breed}
          </p>
          <p>
            <strong>Approx. Weight:</strong> {approxWeight}
          </p>
          <p>
            <strong>Vaccinations Expiry:</strong> {vaccinationsExpiry}
          </p>
          <p className="client-notes">
            <strong>Notes:</strong> {notes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
