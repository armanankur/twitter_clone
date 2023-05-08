import React from "react";
import styles from "./Post.module.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { FaRegCommentDots } from 'react-icons/fa';
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PollIcon from "@mui/icons-material/Poll";
import IosShareIcon from "@mui/icons-material/IosShare";
import { useRecoilState } from "recoil";
import { tweetData } from "../../../Data/Atom";
const Post = () => {
  const [myTweet, setMyTweets] = useRecoilState(tweetData)

  function handleLike(tweetId) {
    setMyTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId
          ? {
            ...tweet,
            likeCount: tweet.isLiked ? tweet.likeCount - 1 : tweet.likeCount + 1,
            isLiked: !tweet.isLiked,
          }
          : tweet
      )
    );
  }
  function handleComment(tweetId) {
    setMyTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId
          ? {
            ...tweet,
            commentCount: tweet.isCommented ? tweet.commentCount - 1 : tweet.commentCount + 1,
            isCommented: !tweet.isCommented,
          }
          : tweet
      )
    );
  }

  return (
    <>

      {myTweet.map((tweet) => {
        return (
          <>
            <div className={styles.post} key={tweet.id}>
              <div className={styles.post_avatar}>
                <Avatar src={tweet.image} />
              </div>
              <div className={styles.body}>
                <div className={styles.header}>
                  <div className={styles.header_text}>
                    <h3>
                      {tweet.userName}
                    </h3>
                    <span className={styles.header_spec}>
                      <VerifiedIcon className={styles.post_verified} />
                      {tweet.email}
                    </span>
                  </div>
                  <div className={styles.header_description}>
                    <p>
                      {tweet.description}
                    </p>
                  </div>
                </div>
                <img src={tweet.image} alt="img" />
                <div className={styles.bottom}>

                  <span onClick={() => handleComment(tweet.id)} >
                    <FaRegCommentDots style={{ color: tweet.isCommented ? "red" : "inherit", cursor: "pointer" }} />
                  </span>
                  <strong style={{ color: tweet.isCommented ? "red" : "inherit" }}>
                    {tweet.commentCount}
                  </strong>
                  <span>
                  <RepeatIcon fontSize="small" />
                  </span>
                  <strong>
                    {tweet.likeCount}
                  </strong>

                  <span onClick={() => handleLike(tweet.id)} >
                    <FavoriteBorderIcon fontSize="small" style={{ color: tweet.isLiked ? "red" : "inherit", cursor: "pointer" }} />
                  </span>
                  <strong style={{ color: tweet.isLiked ? "red" : "inherit" }}>
                    {tweet.likeCount}
                  </strong>
                  <span>
                  <PollIcon fontSize="small" />
                  </span>
                  <strong>{tweet.commentCount}</strong>
                  <IosShareIcon fontSize="small" />

                </div>
              </div>
            </div>

          </>
        )
      })}

    </>);
};

export default Post;
