import { useState, useEffect } from "react";
import "./modal.css";

export default function Modal({ setOpen }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleInput = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const dataValidation = () => {
    if (!formData.email.includes(".com")) {
      alert("Invalid email. Please check your email address.");
      return false;
    }
    if (formData.phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }

    let date = new Date();
    date.setHours(0, 0, 0, 0);
    const [year, month, day] = formData.dob.split("-").map(Number);
    const inputDate = new Date(year, month - 1, day);
    inputDate.setHours(0, 0, 0, 0);
    if (inputDate > date) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return false;
    }
    return true;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const isValid = dataValidation();
    // console.log(isValid);
    if (isValid) {
      setOpen(false);
    }
  };

  return (
    <div className="modal" onClick={() => setOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1>Fill Details</h1>
        <form className="formContainer" onSubmit={formSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInput}
            required
          />
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            required
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInput}
            required
          />
          <label htmlFor="dob">Date of birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.date}
            onChange={handleInput}
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
