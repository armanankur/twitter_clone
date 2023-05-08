import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import { TimePickerToolbar } from '@mui/x-date-pickers-pro';
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { months } from "./Data";
import style from "./Registration.module.css"
const Registration = () => {
  const [open, setOpen] = React.useState(true);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(true)
  const [errortxt, setErrorTxt] = useState("")
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")


  // const[users,setUsers]=useState([])
  const navigate = useNavigate()
  const oldData = JSON.parse(localStorage.getItem("userData")) || []
  
  const currentDate = new Date();
  const dob= new Date(`${year}-${month}-${day}`)
  const age = currentDate.getFullYear() - dob.getFullYear();

  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  function isEmail(str) {
    return str.match(pattern);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === "" || email === "" || password === ""|| day===""||month===""||year==="") {
      setError(true)
      setErrorTxt("*Inputfield can't be blank")
    } else if (name.length < 3) {
      setError(true)
      setErrorTxt("*Name should be atlest 3 characters")
    } else if (isEmail(email) === null) {
      setError(true)
      setErrorTxt("*Invalid email")
    } else if (password.length < 6) {
      setError(true)
      setErrorTxt("*Password should be atleast 6 characters")
    }
    else if (oldData.find((val) => val.email === email)) {
      setError(true)
      setErrorTxt(`${email} already exists`)
     
    }
    else if(age<13){
      setError(true)
      setErrorTxt("User must me at least 13 years old")
    }
    else {
      setError(false)
      alert(`welcome ${name}  SignUp Successfull`)
      setName("")
      setEmail("")
      setPassword("")


      const newUser = {
        name: name,
        email: email,
        password: password,
      }

      const updatedUsers = [...oldData, newUser]
      localStorage.setItem("userData", JSON.stringify(updatedUsers))

      navigate("/")
    }
  }

  let dates = new Array(31)
    .fill()
    .map((_, i) => i + 1);

  const currentYear = new Date().getFullYear();
  const years = new Array(120)
    .fill()
    .map((_, i) => currentYear - i);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/login')
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
        className={style.signUpDialog}
      >
        <DialogActions>
          <ClearIcon
            onClick={handleClose}
            sx={{ position: "absolute", left: 0, top: 0, margin: "0.5rem", cursor: "pointer" }}
          />
        </DialogActions>
        <div className={style.formContainer}>

          <DialogTitle sx={{ position: "absolute", left: 0, top: 0, marginLeft: "1.8em", marginTop: "1.5em" }} >
            <h1>Create your account</h1>
          </DialogTitle>
          <DialogContent
            sx={{
              height:"auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={{ marginTop: "6rem", padding: "0.5rem", width: "88%" }}
              autoComplete="off"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <TextField
              sx={{ marginTop: "1rem", padding: "0.5rem", width: "88%" }}
              autoComplete="off"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            {/* <TextField
             sx={{ marginTop: "1rem" ,padding:"0.5rem"}}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
          /> */}

            <TextField
              sx={{ marginTop: "1rem", padding: "0.5rem", width: "88%" }}
              autoComplete="off"
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              value={password}

            />
            <div className={style.dobInfo}>
              <span>Date of birth</span>
              <p>
                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
              </p>
            </div>

            <div className={style.dobContainer}>
              <div >
                <Box sx={{ minWidth: "10rem" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Month</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={Month}
                      label="Month"
                      onChange={(e) => setMonth(e.target.value)}

                      MenuProps={{
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "center"
                        },
                        transformOrigin: {
                          vertical: "bottom",
                          horizontal: "center"
                        },
                        PaperProps: {
                          sx: {
                            maxHeight: "38vh",
                          }
                        }
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>Select month</em>
                      </MenuItem>
                      {months.map((month, index) => {
                        return <MenuItem
                          key={Math.random() * 10000} value={index}>{month}</MenuItem>;
                        // sx:{{ py: 0, fontSize: '0.9rem' }}
                      })}

                    </Select>
                  </FormControl>
                </Box>
              </div>



              <div >
                <Box sx={{ minWidth: "6rem" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Day</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={Day}
                      label="Day"
                      onChange={(e) => setDay(e.target.value)}
                      MenuProps={{
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "center"
                        },
                        transformOrigin: {
                          vertical: "bottom",
                          horizontal: "center"
                        },
                        PaperProps: {
                          sx: {
                            maxHeight: "38vh",
                          }
                        }
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>Select Day</em>
                      </MenuItem>
                      {dates.map((date, index) => {
                        return <MenuItem
                          key={Math.random() * 10000}
                          value={date}>{date}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </div>


              <div >
                <Box sx={{ minWidth: "8rem" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={Year}
                      label="Year"
                      onChange={(e) => setYear(e.target.value)}
                      MenuProps={{
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "center"
                        },
                        transformOrigin: {
                          vertical: "bottom",
                          horizontal: "center"
                        },
                        PaperProps: {
                          sx: {
                            maxHeight: "38vh",
                          }
                        }
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>Select Year</em>
                      </MenuItem>
                      {years.map((year, index) => {
                        return <MenuItem key={Math.random() * 10000} value={year}>{year}</MenuItem>;
                      })}

                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>

            <div className={style.error}>
              {error ? <small style={{ color: "red" }}>{errortxt}</small> : null}
            </div>
            {/* {error && <p>{error}</p>} */}
            <Button
              sx={{ marginTop: "2.5rem", padding: "0.5rem", width: "88%", borderRadius: "20px" }}
              variant="contained"
              onClick={handleSubmit}
            >
              SignUp
            </Button>
          </DialogContent>

        </div>
      </Dialog>
      {/* <Button variant="contained" onClick={handleClickOpen}
        sx={{ width: "6rem", padding: "0.5rem", borderRadius: "20px", textTransform: "none", backgroundColor: "white", color: "#000000" }}>
        SignUp
      </Button> */}


    </div>
  );
};

export default Registration;
