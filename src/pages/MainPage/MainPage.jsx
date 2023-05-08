import React from "react";
import Sidebar from  '../Home/sidebar/Sidebar'
import Sidebar2 from '../Home/RightSide/Sidebar2'
import Tweet from  '../Home/Tweet/Tweet'
import style from "./MainPage.module.css"
import { login } from "../../Data/Atom";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";


const MainPage = () => {
  const [isLogedIn, setisLogedIn] = useRecoilState( login )
    
  return (
    <>
    {
      isLogedIn?(
        <div className={style.home_design}>
      <div className={style.sidebar}>
      <Sidebar />
      </div>

      <div className={style.tweet}>
      <Tweet />
      </div>

      <div className={style.sidebar2}>
      <Sidebar2 />
      </div>

      
    </div>

      ):<Navigate to="/login"/>
    }
    </>
      );
};

export default MainPage;
