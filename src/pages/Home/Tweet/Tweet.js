import React from "react";
import styles from "./Tweet.module.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
const Tweet = () => {
  return (
    <div className={styles.tweet}>
      <div className={styles.tweet_header}>
        <h2>Home</h2>
        <div className={styles.tweet_navabar_container}>
          <div className={styles.foryou}>
           <h2 className={styles.h2}>For You</h2>
          </div>
          <div className={styles.following}>
            <h2 className={styles.h2}>Following</h2>
          </div>
        </div>
      </div>

      <div className={styles.Tweetbox}>
      <Tweetbox />
      </div>

      <div className={styles.Post}>
      <Post />
      </div>
    </div>
  );
};

export default Tweet;
