import React, {} from 'react'
import {Alert, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getItems} from "../redux/slices/itemsSlice";

function ItemsTodo() {
    const items = useSelector((state) => state.items.value);
    const [item, setItem] = useState('');
    const dispatch = useDispatch();

    const sendUpdate = (e) => {
        console.log(item);
        axios.put('http://localhost:3000/items/' + item._id, {
            name: item.name,
            category: item.category,
            done: true,
            username: item.username
        }, {withCredentials: true})
            .then((res) => {
                if (res.data.name === undefined) {
                    console.log(e)
                }
                else{
                    axios.get(`http://localhost:3000/items`, {withCredentials: true})
                        .then(res => {
                            //this.setState({items: res.data});
                            dispatch(getItems(res.data));
                        })
                }
            }).catch((error) => {
            console.log(error.response);
        });
        e.preventDefault();
    }

    return (
        <TableContainer>
            <Box component="form" onSubmit={sendUpdate}>
                <Typography align={"center"} variant="h6" component="div" sx={{flexGrow: 1}}>
                    Todo tasks
                </Typography>
                <Table style={{width: "50%"}} align={"center"}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Note item</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Change</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.filter(item => item.done === false).map((item) => (
                            <TableRow
                                key={(item._id).toString()}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left">{item.name}</TableCell>
                                <TableCell align="right">{item.category}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" type="submit" onClick={(e) => {
                                        setItem(item)
                                    }}>Change</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </TableContainer>
    )
}

export default ItemsTodo


