import React, { useState } from "react";
import styles from "./Tweetbox.module.css";
import { Avatar, Button } from "@mui/material";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { RiBarChartGroupedFill, RiFileGifLine } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { useRecoilState  } from "recoil";
import { tweetData } from "../../../Data/Atom";
import { todoItem } from "../../../Data/Atom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { user } from "../../../Data/Atom";


const Tweetbox = () => {
  const [myTweet, setMyTweets] = useRecoilState(tweetData)
  const [myPosts,setMyPosts] = useRecoilState(todoItem)
  const[value,setValue]=useState("")
  const [logedInUser, setlogedInUser] = useRecoilState(user)

  const handleAddTweet=()=>{
   setMyPosts([...myPosts,value])
   setValue("")
  }

  return (
    <div className={styles.tweetbox}>
      <form>
        <div className={styles.tweetbox_input}>
        <Avatar sx={{ width: 50, height: 50,backgroundColor: "#50b7f5"}}>
                    {logedInUser.name[0]}
                   </Avatar>
          <input placeholder="what's happening ?" type="text"  value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
      </form>
      <div className={styles.tweet_icons}>
        <BsCardImage />
        <RiFileGifLine />
        <RiBarChartGroupedFill />
        <BsEmojiSmile />
        <IoMdCalendar />
        <MdOutlineLocationOn />
      <Button className={styles.tweet_button} onClick={handleAddTweet}>Tweet</Button>
      </div>

      <div>
        { myPosts.map((post,index) => {
          return ( <div className={styles.postContainer}>

  <div className={styles.postUserDetail }>
  <div> <Avatar sx={{ width: 50, height: 50,backgroundColor: "#50b7f5"}}>
                    {logedInUser.name[0]}
                   </Avatar></div>
      <div> <p>&nbsp;&nbsp;&nbsp;&nbsp;{logedInUser.name}</p></div>

      <div>  <VerifiedIcon className={styles.post_verified}  sx={{color: "var( --twitter-color)" }}  /></div>

      <div> <p>{logedInUser.email}</p></div>

  </div>
         
          
        
         <div className={styles.postUserPost} >
         <p>{post}</p>
         </div>

            
          </div>)
        })}
      </div>
    </div>
  );
};

export default Tweetbox;