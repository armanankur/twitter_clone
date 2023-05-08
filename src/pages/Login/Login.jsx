import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
// import { TimePickerToolbar } from '@mui/x-date-pickers-pro';
import CloseIcon from "@mui/icons-material/Clear";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import style from "./Login.module.css"
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import { useRecoilState } from "recoil";
import { user } from "../../Data/Atom";
import { login } from "../../Data/Atom";


const Login = () => {
  const [open, setOpen] = React.useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([])
  const [error, setError] = useState(false)
  const [errortxt, setErrorTxt] = useState("")

  const [logedinUser, setlogedinUser] = useRecoilState( user )
  const [isLogedIn, setisLogedIn] = useRecoilState( login )

  
  
  const navigate=useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"))
    if(data)
    setUserList(data)
  }, [])

  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  function isEmail(str) {
    return str.match(pattern);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    var userFind = userList.find((user) => user.email === email && user.password === password)

     if(email==="" || password===""){
      setError(true)
      setErrorTxt("*InputField can't be blanks")
    }
    else if(isEmail(email)==null){
      setError(true)
      setErrorTxt("Invalid email")
    }
    else if (userList === undefined || userList === null) {
      setError(true)
      setErrorTxt("Invalid credentials User not found Register first ")
      return;
    }
  
    else if (!userFind) {
      setError(true)
      setErrorTxt("User not found Register first")
    }
    else {
      setError(false)
      setErrorTxt("")
      alert(`Hello ${userFind.name} Login successful `)
      navigate('/mainPage')
      setlogedinUser({name:userFind.name,email:userFind.email})
      setisLogedIn(true)
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/signup")
  };

 

  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}

        PaperProps={{
          sx: {
            height: "70%",
            width: "100%",
            borderRadius: "16px"
          }
        }}
        className={style.loginDialog}
      >
        <DialogActions>
          <CloseIcon
           onClick={handleClose}
            sx={{ position: "absolute", left: 0, top: 0, margin: "0.5em", cursor: "pointer" }}
          />
        </DialogActions>
        <div className={style.formContaine}>
          <div className={style.icon}>
            <TwitterIcon sx={{ color: "blue", position: "absolute", left: "auto", right: "auto", top: 0 }} />
          </div>
          <DialogTitle sx={{ textAlign: "center", fontSize: '1rem' }}>
            <h1>Sign in to Twitter</h1>
          </DialogTitle>
          <DialogContent
            sx={{
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Button
              sx={{
                height: "3rem",
                width: "60%",
                marginTop: "1rem",
                padding: "0.5rem",
                borderRadius: "20px",
                textTransform: "none",
                textAlign: "center",
                color: "#808080"
              }}
              variant="outlined"
            >
              <GoogleIcon sx={{ color: "blue" }} />
              Sign in with Google
            </Button>

            <Button
              sx={{
                height: "3rem",
                width: "60%",
                marginTop: "1.5rem",
                padding: "0.5rem",
                borderRadius: "20px",
                textTransform: "none",
                color: "#000000",
                textAlign: "center"
              }}
              variant="outlined"
            >
              <AppleIcon />
              Sign in with Apple
            </Button>
            <div className={style.divider}>
              <hr style={{ width: "9rem" }} /> or <hr style={{ width: "9rem" }} />
            </div>
            <TextField
              sx={{
                padding: "0.5rem", height: "1.5rem",
                width: "60%", borderRadius: "20px"
              }}
              autoComplete="off"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <TextField
              sx={{
                marginTop: "3.2rem", padding: "0.5rem", height: "1.5rem",
                width: "60%", borderRadius: "20px"
              }}
              autoComplete="off"
              id="outlined-basic"
              label="Password"
              type="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className={style.error}>
              {error ? <small style={{ color: "red" }}>{errortxt}</small> : null}

            </div>
            <Button
              sx={{
                height: "3rem",
                width: "60%",
                marginTop: "2rem",
                padding: "0.5rem",
                borderRadius: "20px",
                backgroundColor: "#000000",
                textTransform: "none",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#808080"
                }

              }}
              variant="outlined"
              onClick={handleSubmit}
            >
              Login
            </Button>

            <Button
              sx={{
                height: "3rem",
                width: "60%",
                marginTop: "1.5rem",
                marginBottom: "1rem",
                padding: "0.5rem",
                borderRadius: "20px",
                textTransform: "none"

              }}
              variant="outlined"
            // onClick={handleSubmit}
            >
              Forgot password?
            </Button>

            <div>
              <p>Don't have an account? <Link to="/signup"> <span >Sign up</span></Link></p>
            </div>

          </DialogContent>
        </div>
      </Dialog>
 
  
      {/* <Button variant="outlined" onClick={handleClickOpen}
        sx={{ width: "6rem", padding: "0.5rem", border: "0.5px solid white", borderRadius: "20px", textTransform: "none", color: "white" }}>
        LogIn
      </Button> */}

   
    </div>
  );
};

export default Login;