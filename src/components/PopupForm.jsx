import React, { useState } from "react";
import emailjs from "emailjs-com";

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", email: "", message: "" });
    setError(null);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const currentData = { ...formData };

    try {
      // 1. Mail to OWNER
      await emailjs.send(
        "service_ijo77kr",
        "template_9aohi2h",
        {
          name: currentData.name,
          email: "thereedscottage@gmail.com",
          message: `
New inquiry received

Name: ${currentData.name}
Phone: ${currentData.phone}
Email: ${currentData.email}

Message:
${currentData.message}

Please reply to: ${currentData.email}
          `,
          title: "Website Inquiry",
        },
        "JcDAWDu_BOE3PqWhQ"
      );

      // 2. Mail to SENDER
      await emailjs.send(
        "service_ijo77kr",
        "template_46sx0ip",
        {
          name: "The Reeds Cottage",
          email: currentData.email,
          message: `
Hey ${currentData.name},

Thanks for reaching out to The Reeds Cottage
We’ve received your message and will get back to you soon.

Here’s a copy of what you sent:
-----------------------------------
${currentData.message}
-----------------------------------

Warm regards,
The Reeds Cottage Team
          `,
          title: "Thank you for contacting us",
        },
        "JcDAWDu_BOE3PqWhQ"
      );

      // SUCCESS: Show message + auto-close
      setIsSent(true);
      resetForm();

      setTimeout(() => {
        setIsSent(false);
        onClose(); // Close popup
      }, 1000);
    } catch (err) {
      console.error("Email send failed:", err);
      setError("Failed to send message. Please try again.");
      resetForm(); // Clear form on error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Contact Form</h2>

        <form onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />

          <label>Description</label>
          <textarea
            name="message"
            placeholder="Enter your description"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>

        {isSent && (
          <p className="success-message">
            Message sent successfully! <br />
            Check your email for a copy
          </p>
        )}

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default PopupForm;