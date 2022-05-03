import React, {useState} from 'react';
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";

function Register() {
//class Register extends React.Component {
    const [name, setName] = useState('');
    const [uname, setUsername] = useState('');
    const [pword, setPassword] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState(false);

    async function callRegistration(e) {
        e.preventDefault();

        axios.post('http://localhost:3000/user', {username: uname, password: pword, name: name})
            .then((res) => {
                if (res.data.name !== undefined) {
                    setRegisterSuccess(true);
                }
                console.log(e)
            });
        /*
        const res = await fetch('http://localhost:3000/user', {
            method: 'POST', credentials: 'include', headers: {
                'Content-Type': 'application/json', 'Accept': 'application/json'
            }, body: JSON.stringify({username: uname, password: pword, name: name}),
        });
        const data = await res.json();
        */

        // set the state of the user
        setName("");
        setUsername("");
        setPassword("");
    }

//    render() {
    return (<div>
        <Typography variant="h4" component="div" sx={{flexGrow: 1}}>Registration</Typography>
        <Box component="form" onSubmit={callRegistration}>
            <TextField required id="name" label="Name" variant="filled" value={name} style={{minWidth: "20%"}} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <TextField required id="uname" label="Username" variant="filled" value={uname} style={{minWidth: "20%"}} onChange={(e) => {
                setUsername(e.target.value)
            }}/>
            <TextField required id="pass" label="Password" type="password" variant="filled" value={pword} style={{minWidth: "20%"}} onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            &nbsp; &nbsp;
            <Button variant="contained" type="submit" disabled={name ==='' || uname ==='' || pword ===''}>Register</Button>
        </Box>
        <br/>
        {registerSuccess ?
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>Registration Successful!!!</Typography>
            : null}
    </div>)
//    }
}

export default Register;