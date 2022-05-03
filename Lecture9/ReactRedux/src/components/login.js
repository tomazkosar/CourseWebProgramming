import React, {} from 'react';
import {useState, useEffect} from 'react'
import {useDispatch} from "react-redux";
import {getUserSuccess} from '../redux/slices/userSlice'
import {getAuthentication} from '../redux/slices/authSlice'
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
//class Login extends React.Component {
    const [uname, setUsername] = useState('');
    const [pword, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const dispatch = useDispatch()

    async function checkLogin(e) {
        e.preventDefault();

        /*        const res = await fetch('http://localhost:3000/user/login', {
                    method: 'POST', credentials: 'include', headers: {
                        'Content-Type': 'application/json', 'Accept': 'application/json'
                    }, body: JSON.stringify({username: uname, password: pword}),
                });
                const data = await res.json();
        */
        axios.post('http://localhost:3000/user/login', {username: uname, password: pword}, { withCredentials: true })
            .then((res) => {
                if (res.data.name !== undefined) {
                    localStorage.setItem('username', res.data.username);
                    setLoginSuccess(true);
                    dispatch(getAuthentication(true));
                    dispatch(getUserSuccess( res.data.username));
                }
            }).catch((error) => {
            console.log(error)
        });

        setUsername("");
        setPassword("");
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("username");
        if (loggedInUser) {
            dispatch(getAuthentication(true));
            dispatch(getUserSuccess(loggedInUser));
        }
    }, []);

    return (
        <Box component="div">
            <Typography variant="h4" component="div" sx={{flexGrow: 1}}>Login</Typography>
            <Box component="form" onSubmit={checkLogin}>
                <TextField required id="username" label="Username" variant="filled" value={uname}
                           onChange={(e) => {
                               setUsername(e.target.value)
                           }}/>
                &nbsp; &nbsp;
                <TextField required id="password" type="password" label="Password" variant="filled" value={pword}
                           onChange={(e) => {
                               setPassword(e.target.value)
                           }}/>
                &nbsp; &nbsp;
                <Button variant="contained" type="submit">Login</Button>
            </Box>
            <br/>
            {
                loginSuccess ?
                    <Typography variant="h4" component="div" sx={{flexGrow: 1}}>Login Successful!!!</Typography>
                    : null
            }
        </Box>
    )
}

export default Login;