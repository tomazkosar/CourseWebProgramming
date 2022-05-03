import React, {Component} from 'react';
import {useEffect} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import axios from 'axios';
import Box from "@mui/material/Box";
import {useSelector, useDispatch} from "react-redux";

import Home from './components/home';
import About from './components/about';
import Header from './components/header';
import Profile from './components/profile';
import Footer from './components/footer';
import Login from './components/login';
import Register from './components/register';
import ItemsAll from './components/items-all';
import ItemsDone from "./components/items-done";
import ItemsTodo from "./components/items-todo";
import ItemsAdd from "./components/item-add";
import {getItems} from "./redux/slices/itemsSlice";

function RequireAuth({children, redirectTo}) {
    const isAuthenticated = useSelector((state) => state.auth.value)
    return isAuthenticated ? children : <Navigate to={redirectTo}/>;
}

const App = () => {
//class App extends Component {
    const items = useSelector((state) => state.items.value);
    const dispatch = useDispatch();

/*    state = {
        items: []
    }
*/

    useEffect(() => {
//        componentDidMount() {
        axios.get(`http://localhost:3000/items`, {withCredentials: true})
            .then(res => {
                //this.setState({items: res.data});
                dispatch(getItems(res.data));
            })
            .catch(console.log)
    }, [getItems]);


//    render() {
        return (
            <Box>
                <BrowserRouter>
                    <Box>
                        <Header/>
                    </Box>
                    <Box p={2}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/items" element={
                                <RequireAuth redirectTo="/login">
                                    <ItemsAll items={items}/>
                                </RequireAuth>
                            }/>
                            <Route path="/items-done" element={
                                <RequireAuth redirectTo="/login">
                                    <ItemsDone items={items}/>
                                </RequireAuth>
                            }/>
                            <Route path="/items-todo" element={
                                <RequireAuth redirectTo="/login">
                                    <ItemsTodo items={items}/>
                                </RequireAuth>
                            }/>
                            <Route path="/items-add" element={
                                <RequireAuth redirectTo="/login">
                                    <ItemsAdd items={items}/>
                                </RequireAuth>
                            }/>
                            <Route path="*" component={<Home/>}/>
                        </Routes>
                        <Footer/>
                    </Box>
                </BrowserRouter>
            </Box>
        );
//    }

}

export default App;
