import React from 'react';
import {Link} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {MenuOpen} from "@mui/icons-material";

import {useSelector, useDispatch} from "react-redux";
import {getUserSuccess} from "../redux/slices/userSlice";
import {getAuthentication} from "../redux/slices/authSlice";
import {getSideBarShown} from "../redux/slices/sidebarSlice";
import NavMenu from "./nav-menu";

function Header() {
    const username = useSelector((state) => state.user.value)
    const isAuthenticated = useSelector((state) => state.auth.value)
    const isSidebarOpen = useSelector((state) => state.sidebar.value)
    const dispatch = useDispatch()

    const callLogout = () => {
        localStorage.clear();
        dispatch(getUserSuccess(''));
        dispatch(getAuthentication(false));
    };

    const toggleSidebar = () => {
        dispatch(getSideBarShown(!isSidebarOpen));
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={toggleSidebar}>
                    <MenuOpen/>
                    <NavMenu/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    &nbsp; &nbsp; Notes application
                </Typography>
                <Typography component="div" align="right" sx={{flexGrow: 1}}>
                    {username} &nbsp;
                </Typography>
                {isAuthenticated ?
                    <Button component={Link} to="/profile" color="inherit">Profile</Button>
                    :
                    <Button component={Link} to="/login" color="inherit">Login</Button>
                }
                &nbsp; &nbsp;
                {isAuthenticated ?
                    <Button component={Link} to="/" onClick={callLogout} color="inherit">Logout</Button>
                    :
                    <Button component={Link} to="/register" color="inherit">Registration</Button>
                }
            </Toolbar>
        </AppBar>
    )
}



export default Header;