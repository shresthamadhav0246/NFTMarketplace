import React from "react";
import styles from "./InteractiveFeatures.module.css";

const InteractiveFeatures = ({ comments, shareOptions }) => {
  return (
    <div className={styles.featuresContainer}>
      {/* Comments section */}
      <div className={styles.commentsSection}>
        <h3 className={styles.commentsSection_title}>Comments</h3>
        <div className={styles.commentsList}>
          {comments.map((comment, index) => (
            <div key={index} className={styles.comment}>
              <p className={styles.commentText}>{comment.comment}</p>
              <p className={styles.commentUser}>
                Posted by: {comment.username}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Share options */}
      <div className={styles.shareSection}>
        <ul className={styles.shareList}>
          {shareOptions.map((option, index) => (
            <li key={index} className={styles.shareItem}>
              <a href={option.link} className={styles.shareLink}>
                {option.twitter}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Basic chat feature */}
      <div className={styles.chatSection}>
        <h3 className={styles.chatSection_title}>Chat</h3>
        <div className={styles.chatBox}>
          <input
            type="text"
            placeholder="Type your message"
            className={styles.chatInput}
          />
          <button className={styles.sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;
