import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../img/logo1.png";
import user1 from "../../img/user-1.png";
import { Button } from "../index";

import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      // handle other buttons if needed
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);

      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
      0;
    } else {
      setOpenSideMenu(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenSideMenu(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={logo}
              alt="NFT Marketplace Logo"
              wight={70}
              height={70}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            <p
              onClick={(e) => {
                openMenu(e);
              }}
            >
              Discover
            </p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_help}>
            <p
              onClick={(e) => {
                openMenu(e);
              }}
            >
              Help Center
            </p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          {/* Notification */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notification}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" />
          </div>

          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />
              {profile && <Profile />}
            </div>
          </div>

          {/** menu button for mobile device */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>
      {openSideMenu && (
        <div className={Style.SideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
