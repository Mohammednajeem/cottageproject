import React, {useState } from "react";
import emailjs from 'emailjs-com';




const PopupForm = ({ onClose }) => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_ijo77kr',     
    'template_9aohi2h',  
    e.target,
    'JcDAWDu_BOE3PqWhQ'      
  ).then(() => {
    alert('Mail sent successfully');
    
    setFormData({ name: "", phone: "", email: "", message: "" });
    

  }).catch((err) => {
    alert('Failed to send mail');
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
      </div>
    </div>
  );
};

export default PopupForm;
