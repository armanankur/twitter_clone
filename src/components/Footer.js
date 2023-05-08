import  React ,{useState} from 'react';
import Box from '@mui/material/Box';

import Registration from "../pages/Registration/Registration"
import Login from "../pages/Login/Login"
import style from "./Footer.module.css"
import {useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";

export default function BoxSx() {
    const navigate=useNavigate()
    function  handleLogin(){
        navigate("/login")
    }
    function  handleSignUp(){
        navigate("/signup")
    }
    return (
        <Box
            sx={{
                width: "100%",
                height: "8vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "rgb(29, 155, 240)",
                position: "fixed",
                bottom: 0,
                marginLeft:0,
                boxSizing: 'border-box',

                '@media (max-width: 768px)': {
                    width:"77%",
                  },
            }}
            
        >
            <div className={style.info}>

                <span>Don’t miss what’s happening</span>
                <p>People on Twitter are the first to know.</p>
            </div>

            <div className={style.button}>
                <div>
                {/* <Login /> */}
                <Button variant="outlined" onClick={handleLogin}
        sx={{ width: "6rem", padding: "0.5rem", border: "0.5px solid white", borderRadius: "20px", textTransform: "none", color: "white" }}>
        LogIn
      </Button>

                </div>
                <div>
                {/* <Registration /> */}
      <Button variant="contained" onClick={handleSignUp}
        sx={{ width: "6rem", padding: "0.5rem", borderRadius: "20px", textTransform: "none", backgroundColor: "white", color: "#000000" }}>
        SignUp
      </Button>

                </div>
              
            </div>
        </Box>
    );
}