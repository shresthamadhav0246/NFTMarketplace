import React from "react";
import styles from "./ContactInfo.module.css"; // Ensure the correct path to CSS file

function ContactInfo() {
  return (
    <div className={styles.info}>
      <p>
        Email: <a href="mailto:info@example.com">info@example.com</a>
      </p>
      <p>
        Phone: <a href="tel:+1234567890">+1 234 567 890</a>
      </p>
      <p>Address: 1234 Street Name, City, Country</p>
    </div>
  );
}

export default ContactInfo;
