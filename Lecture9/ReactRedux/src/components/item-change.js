import React, {} from 'react';
import axios from "axios";
import {MenuItem, Select, TextField} from "@mui/material";

import {useState, useEffect} from 'react'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";


function ItemAdd() {
    const uname = useSelector((state) => state.user.value)
    const [categoryList, setCategoryList] = useState([]);
    const [iname, setName] = useState('');
    const [icategory, setCategory] = useState('');
    const [addSuccess, setAddSuccess] = useState(false);

    //async function sendData(e) {
    const sendData = (e) => {

        axios.post('http://localhost:3000/items', {name: iname, category: icategory, done: false, username: uname}, {withCredentials: true})
            .then((res) => {
                if (res.data.name !== undefined) {
                    setAddSuccess(true);
                }
                console.log(e)
            });

        setName("");
        setCategory("");

        e.preventDefault();
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/categories`)
            .then(res => {
                setCategoryList(res.data);
            })
            .catch(console.log)
    }, []);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (<div>
        <Typography variant="h4" component="div" sx={{flexGrow: 1}}>Change task</Typography>
        <Box component="form" onSubmit={sendData}>
            <TextField required id="filled-required" label="Note name" variant="filled" value={iname} style={{minWidth: "30%"}} onChange={(e) => {
                setName(e.target.value)
            }}/>
            &nbsp; &nbsp;
            <Select
                label="Category"
                value={icategory}
                onChange={handleChange}
                style={{minWidth: "15%"}}>
                {categoryList.map((category) => {
                    return (
                        <MenuItem value={category.name}>{category.name}</MenuItem>
                    )
                })}
            </Select>
            &nbsp; &nbsp;
            <Button variant="contained" type="submit" disabled={iname =='' || icategory ==''}>Add</Button>
        </Box>

        <br/>
        {addSuccess ?
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>Adding Note Successful!!!</Typography>
            : null}
    </div>)
}

export default ItemAdd;