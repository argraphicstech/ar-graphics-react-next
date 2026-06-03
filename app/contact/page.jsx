"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save to Google Sheet
      await fetch(
        "https://script.google.com/macros/s/AKfycbxUaEy-n9U2fAyg3GuXpFB-Bp79TVZ3bH4VyT8SBkT1IPzM42pqjUFPzPZMfu0YJX7T/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            name,
            mobile,
            message,
          }),
        }
      );

      // Send Email
      await emailjs.send(
        "service_uaor337",
        "template_69fvobm",
        {
          name,
          mobile,
          message,
        },
        "ZLg6Ge1EiGwesVydm"
      );

      alert("Inquiry submitted successfully!");

      setName("");
      setMobile("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send inquiry.");
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <p>📞 Mobile: 8053440252</p>
      <p>📧 Email: rohillaaditya50@gmail.com</p>

      <form className="contact" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          pattern="[0-9]{10}"
          maxLength={10}
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          required
        />

        <button type="submit">Send Inquiry</button>
      </form>
    </div>
  );
}