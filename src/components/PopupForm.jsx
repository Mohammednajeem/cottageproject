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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
  e.preventDefault();

  const currentData = { ...formData };

  const ownerMessage = `
    🌿 *New Inquiry from The Reeds Cottage Website* 🌿

    -----------------------------------
    Name: ${currentData.name}
    Phone: ${currentData.phone}
    Email: ${currentData.email}
    Message:
    ${currentData.message}
    -----------------------------------

    📬 Please reply directly to: ${currentData.email}
  `;

  const senderMessage = `
    Hey ${currentData.name}, 👋

    Thanks for reaching out to *The Reeds Cottage*! 🌿  
    We’ve received your message and our team will contact you soon.

    Here’s a copy of what you sent:
    -----------------------------------
    ${currentData.message}
    -----------------------------------

    Until then, feel free to check out our updates or reach us directly at thereedscottage@gmail.com 💌  
    Warm regards,  
    *The Reeds Cottage Team*
  `;

  setFormData({ name: "", phone: "", email: "", message: "" });

  // 1️⃣ Send mail to Owner
  emailjs
    .send(
      "service_ijo77kr",
      "template_9aohi2h",
      {
        to_email: "thereedscottage@gmail.com", // OWNER EMAIL
        from_name: currentData.name,
        from_email: currentData.email,
        reply_to: currentData.email,
        message: ownerMessage,
      },
      "JcDAWDu_BOE3PqWhQ"
    )
    .then(() => {
      // 2️⃣ Send greeting mail to Sender
      return emailjs.send(
        "service_ijo77kr",
        "template_9aohi2h",
        {
          to_email: currentData.email, // USER EMAIL
          from_name: "The Reeds Cottage",
          reply_to: "thereedscottage@gmail.com",
          message: senderMessage,
        },
        "JcDAWDu_BOE3PqWhQ"
      );
    })
    .then(() => {
      setIsSent(true);
      setTimeout(() => setIsSent(false), 4000);
    })
    .catch((err) => {
      console.error("Email send failed:", err);
    });
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
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            name="message"
            placeholder="Enter your description"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        {isSent && (
          <p className="success-message">
            ✅ Message sent successfully! <br />
            Check your email for a copy 🌿
          </p>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
