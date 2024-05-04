import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb"; // Corrected here
import Link from "next/link";

import styles from "./Profile.module.css";
import user1 from "../../../img/user-1.png";

const Profile = () => {
  const userName = "Madhab Shrestha";
  const userAddress = "X02354...2324";
  return (
    <div className={styles.profile}>
      <div className={styles.profile_account}>
        <Image
          src={user1}
          alt="User Profile"
          width={50}
          height={50}
          className={styles.profile_account_img}
        />
        <div className={styles.profile_account_info}>
          <p className={styles.profile_account_name}>{userName}</p>
          <small className={styles.profile_account_address}>
            {userAddress}
          </small>
        </div>
      </div>

      <div className={styles.profile_menu}>
        <div className={styles.profile_menu_one}>
          <div className={styles.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/profile" }}>My Profile</Link>
            </p>
          </div>

          <div className={styles.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/profile" }}>My Items</Link>
            </p>
          </div>

          <div className={styles.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/myprofile" }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className={styles.profile_menu_two}>
          <div className={styles.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/help" }}>Help</Link>
            </p>
          </div>

          <div className={styles.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: "/disconnect" }}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
