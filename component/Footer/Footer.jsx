import React from "react";
import Link from "next/link";
import logo from "../../img/logo1.png";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import styles from "./Footer.module.css"; // Make sure to create and import Footer.module.css
import Image from "next/image";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter(); // Import useRouter from next/router

  // Define routes that don't require a footer
  const noFooterRoutes = ["/collection", "/admin"];

  // Check if the current path is in the list of routes that don't show the footer
  if (noFooterRoutes.includes(router.pathname)) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.logo}>
          <Image src={logo} alt="Company Logo" width={100} height={100} />
        </div>
      </div>

      <div className={styles.footerSection}>
        <h4>Discover</h4>
        <Link href="/discover/new">New Releases</Link>
        <Link href="/discover/popular">Most Popular</Link>
        <Link href="/discover/categories">Categories</Link>
      </div>
      <div className={styles.footerSection}>
        <h4>Help & Support</h4>
        <Link href="/help/faq">FAQs</Link>
        <Link href="/help/contact">Contact Us</Link>
        <Link href="/help/how-to">How to Use</Link>
      </div>
      <div className={styles.footerSection}>
        <h4>Follow Us</h4>
        <div className={styles.socialLinks}>
          <Link href="https://facebook.com">
            <TiSocialFacebook />
          </Link>
          <Link href="https://twitter.com">
            <TiSocialTwitter />
          </Link>
          <Link href="https://instagram.com">
            <TiSocialInstagram />
          </Link>
          <Link href="https://linkedin.com">
            <TiSocialLinkedin />
          </Link>
          <Link href="https://youtube.com">
            <TiSocialYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
