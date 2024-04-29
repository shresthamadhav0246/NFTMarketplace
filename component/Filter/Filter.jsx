import React, { useState } from "react";
import styles from "./Filter.module.css";

import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaUserAlt,
  FaImages,
  FaVideo,
} from "react-icons/fa";

import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const openImage = () => {
    if (!image) {
      setImage(true);
    } else {
      setImage(false);
    }
  };

  const openMusic = () => {
    if (!music) {
      setMusic(true);
    } else {
      setMusic(false);
    }
  };

  const openVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter_box}>
        <div className={styles.filter_box_left}>
          <button onClick={() => {}}>NFTs</button>
          <button onClick={() => {}}>Arts</button>
          <button onClick={() => {}}>Musics</button>
          <button onClick={() => {}}>Sports</button>
          <button onClick={() => {}}>Photography</button>
        </div>

        <div className={styles.filter_box_right}>
          <div
            className={styles.filter_box_right_box}
            onClick={() => openFilter()}
          >
            <FaFilter />
            <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>
      {filter && (
        <div className={styles.filter_box_items}>
          <div className={styles.filter_box_items_box}>
            <div className={styles.filter_box_items_box_item}>
              <FaWallet /> <span>0.001 ETH - 10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>

          <div className={styles.filter_box_items_box}>
            <div
              className={styles.filter_box_items_box_item_transection}
              onClick={() => openImage()}
            >
              <FaImages /> <small>Images</small>
              {image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className={styles.filter_box_items_box}>
            <div
              className={styles.filter_box_items_box_item_transection}
              onClick={() => openVideo()}
            >
              <FaVideo /> <small>Videos</small>
              {video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={styles.filter_box_items_box}>
            <div
              className={styles.filter_box_items_box_item_transection}
              onClick={() => openMusic()}
            >
              <FaMusic /> <small>Musics</small>
              {music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div className={styles.filter_box_items_box}>
            <FaUserAlt /> <span>Verified</span>
            <MdVerified />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
