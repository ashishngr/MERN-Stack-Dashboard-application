import React, {useState} from 'react'
import { LightModeOutlined,
DarkModeOutlined, 
Menu as MenuIcons, 
Search, 
SettingsOutlined, 
ArrowDropUpOutlined } 
from '@mui/icons-material';
import FlexBetween from '../components/FlexBetween';
import { useDispatch } from 'react-redux';
import {setMode} from "state";
import profileImage from "../assets/profile.jpeg"
import { AppBar, Button, IconButton, InputBase, Toolbar, useTheme, Box, Typography, Menu, MenuItem } from '@mui/material';





const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen}) => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const [anchorEl, setAncorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAncorEl(event.currentTarget);
    const handleClose = () => setAncorEl(null)


  return <AppBar
  sx={{
    position: "static",
    background: "none",
    boxShadow: "none"
  }}>
    <Toolbar sx={{justifyContent: "space-between"}}>
        {/*Left sidebar */}
        <FlexBetween onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcons />
            <IconButton />
    
            <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
            >
                <InputBase placeholder='Search...' />
                <IconButton>
                    <Search />
                </IconButton>
            </FlexBetween>
        </FlexBetween>   
        {/*Right side */}
        <FlexBetween gap="1.5rem">
            <IconButton onClick={()=>dispatch(setMode())} >
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlined sx={{fontSize: "25px"}} />
                ) : (
                    <LightModeOutlined sx={{fontSize: "25px"}} />
                )}
            </IconButton>
            <IconButton>
                <SettingsOutlined sx={{fontSize: "25px"}} />
            </IconButton>

            <FlexBetween>
                <Button onClick={handleClick} sx={{display: "flex", justifyContent: "space-between", alignItems: "center", textTransform: "none", gap: "1rem"}}>
                <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
               <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.84rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropUpOutlined 
              sx={{color: theme.palette.secondary[300], fontSize: "25px"}}/>
            </Button> 
            <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} achorOrigin={{vertical: "bottom", horizontal: "center"}}>
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
            </FlexBetween>

        </FlexBetween> 
    </Toolbar>
  </AppBar>

}

export default Navbar