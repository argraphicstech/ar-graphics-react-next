"use client";

// React ka useState import kar rahe hain
import { useState } from "react";

function ContactForm() {
  // Form data store karne ke liye state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Loading state button ke liye
  const [loading, setLoading] = useState(false);

  // Input field change hone par state update hogi
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Button ko loading mode me daal do
    setLoading(true);

    try {
      // API ko data bhejna
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // API response receive karna
      const data = await response.json();

      // Success message show karna
      alert(data.message);

      // Form clear karna
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      // Error aane par message show karna
      alert("Failed to send inquiry");
      console.error(error);
    }

    // Loading band karna
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      {/* Form Heading */}
      <h2>Contact Us</h2>

      {/* Name Input */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      {/* Email Input */}
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Message Box */}
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </button>

    </form>
  );
}

export default ContactForm;
