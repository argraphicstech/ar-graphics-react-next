"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, mobile }),
    });

    const data = await response.json();
    alert(data.message);

    setName("");
    setMobile("");
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
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <button type="submit">Send Inquiry</button>
      </form>
    </div>
  );
}