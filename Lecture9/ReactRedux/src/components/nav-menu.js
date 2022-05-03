import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Drawer, List, ListItem} from "@mui/material"
import {getSideBarShown} from "../redux/slices/sidebarSlice";

function NavMenu() {
    const isAuthenticated = useSelector((state) => state.auth.value)
    const isSidebarOpen = useSelector((state) => state.sidebar.value);
    const dispatch = useDispatch()

    const toggleSidebar = () => {
        dispatch(getSideBarShown(!isSidebarOpen));
    };

    return (
        <Drawer open={isSidebarOpen} anchor="left" onClose={toggleSidebar}>
            <List>
                <ListItem component={Link} to="/">Home</ListItem>
                {isAuthenticated ? <ListItem component={Link} to="/items">All notes</ListItem> : null}
                {isAuthenticated ? <ListItem component={Link} to="/items-todo">To do</ListItem> : null}
                {isAuthenticated ? <ListItem component={Link} to="/items-done">Done</ListItem> : null}
                {isAuthenticated ? <ListItem component={Link} to="/items-add">Add task</ListItem> : null}
                <ListItem component={Link} to="/about">About</ListItem>
            </List>
        </Drawer>
    )
}

export default NavMenu;