/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi field yang tidak boleh kosong
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setIsValid(false);
      return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsValid(false);
      setEmailError("Invalid email address");
      return;
    }

    // Logika pengiriman formulir (bisa diganti dengan implementasi yang sesuai)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset field setelah pengiriman berhasil
    setName("");
    setEmail("");
    setMessage("");
    setIsValid(true);
    setEmailError("");
  };

  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center">Contact Us</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
          backgroundColor: "white",
          borderColor: "black",
        }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "500px",
                border: "1px solid #BCBCBC",
                padding: "5px",
              }}
            />
          </div>
          {!isValid && name.trim() === "" && (
            <p style={{ color: "red", marginBottom: "5px" }}>
              The Field is Required
            </p>
          )}
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "500px",
                border: "1px solid #BCBCBC",
                padding: "5px",
              }}
            />
          </div>
          {!isValid && name.trim() === "" && (
            <p style={{ color: "red", marginBottom: "5px" }}>
              The Field is Required
            </p>
          )}
          {!isValid && (
            <p style={{ color: "red", marginTop: "5px", marginBottom: "10px" }}>
              {emailError}
            </p>
          )}
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              value={message}
              style={{
                width: "500px",
                height: "100px",
                border: "1px solid #BCBCBC",
                padding: "5px",
              }}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {!isValid && name.trim() === "" && (
            <p style={{ color: "red", marginBottom: "5px" }}>
              The Field is Required
            </p>
          )}
          {!isValid && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              Please fill out all fields correctly.
            </p>
          )}
          <button
            type="submit"
            style={{
              backgroundColor: "#5696C2",
              color: "white",
              width: "500px",
            }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
