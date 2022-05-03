import React, {} from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Typography from "@mui/material/Typography";

class ItemsAll extends React.Component {
    render() {
        return (
        <TableContainer>
            <Typography align={"center"} variant="h6" component="div" sx={{flexGrow: 1}}>
                All notes
            </Typography>
            <Table style={{ width: "50%" }} align={"center"}>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Note item</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Done</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.items.map((item) => (
                        <TableRow
                            key={(item._id).toString()}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="left">{item.name}</TableCell>
                            <TableCell align="right">{item.category}</TableCell>
                            <TableCell align="right">{(item.done) ? "Yes" : "No"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
    }
}

export default ItemsAll


