"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_uaor337",
      "template_69fvobm",
      {
        name: name,
        mobile: mobile,
      },
      "ZLg6Ge1EiGwesVydm"
    );

    alert("Inquiry submitted successfully!");

    setName("");
    setMobile("");
  } catch (error) {
    console.error(error);
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

        <button type="submit">Send Inquiry</button>
      </form>
    </div>
  );
}