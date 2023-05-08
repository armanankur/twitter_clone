import React from 'react'
import styles from './Sidebar.module.css'
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddHomeIcon from '@mui/icons-material/AddHome';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import { GiFeather } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";
import { user } from "../../../Data/Atom";


const Sidebar = () => {
  const [logedInUser, setlogedInUser] = useRecoilState(user)

  const navigate = useNavigate()

  function handleLogOut() {
    navigate("/login")
  }
  return (
    <div className={styles.sidebar}>
      <TwitterIcon className={styles.twitterIcon} />
      <SidebarOption active Icon={AddHomeIcon} text={<span className={styles.text}>Home</span>} />
      <SidebarOption Icon={SearchIcon} text={<span className={styles.text}>Explore</span>} />
      <SidebarOption Icon={NotificationsNoneIcon} text={<span className={styles.text}>Notifications</span>} />
      <SidebarOption Icon={MailOutlineIcon} text={<span className={styles.text}>Messages</span>} />
      <SidebarOption Icon={BookmarkBorderIcon} text={<span className={styles.text}>Bookmarks</span>} />
      <SidebarOption Icon={LowPriorityIcon} text={<span className={styles.text}>Twitter Blue</span>} />
      <SidebarOption Icon={PermIdentityIcon} text={<span className={styles.text}>Profile</span>} />
      <SidebarOption Icon={MoreHorizIcon} text={<span className={styles.text}>More</span>} />
      {/* <SidebarOption active Icon={GiFeather} text={<span className={styles.text}>Tweet</span>} /> */}
      <Button variant="outlined" className={styles.sidebar_Tweet}>Tweet</Button>
      <div>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>

              <div  {...bindTrigger(popupState)}>

                <div className={styles.logoutContainer} >

                  <div className={styles.avatar}>
                  <Avatar sx={{ width: 50, height: 50,backgroundColor: "#50b7f5"}}>
                    {logedInUser.name[0]}
                   </Avatar>
                  </div>

                    <div className={styles.user}>
                          
                          <div>
                          <span className={styles.name} >{logedInUser.name} </span>
                          </div>
                          <div>
                          <span className={styles.email}>{logedInUser.email}</span>
                          </div>

                     
                   </div>
              
                  <div className={styles.more}>
                   
                   <span> <MoreHorizSharpIcon /></span>
                  </div>

                </div>
                {/* <div >
                  <MoreHorizSharpIcon />
                </div> */}
              </div>

              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography
                  sx={{
                    p: 1.5,
                    cursor: "pointer",
                    ":hover": { background: "#f5f4f2" },
                  }}
                >
                  <span onClick={() => navigate('/login')}>

                    Add an existing account
                  </span>
                </Typography>
                <Typography
                  sx={{
                    p: 1.5,
                    cursor: "pointer",
                    ":hover": { background: "#f5f4f2" },
                  }}
                >
                  <span onClick={handleLogOut}>
                    {" "}
                    Log out {logedInUser.email}
                  </span>
                </Typography>
              </Popover>
            </div>
          )}
        </PopupState>
      </div>
    </div>
  )
}

export default Sidebar