import React, { useState } from "react";
import styles from "./ContactForm.module.css"; // Ensure correct path to CSS file

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "", // optional
    organization: "", // optional
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Thank you for your message. We will get back to you shortly.");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        onChange={handleChange}
        className={styles.input}
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        onChange={handleChange}
        className={styles.textarea}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone number (optional)"
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="text"
        name="organization"
        placeholder="Organization (optional)"
        onChange={handleChange}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
