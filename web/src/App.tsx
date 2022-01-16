import React from "react";
import Signup from "./Auth/Signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Error404 from "./Error/Error404";
import MyProfile from "./Profil/MyProfile";
import Search from "./Search/Search";
require('bootstrap/dist/css/bootstrap.css')
require('bootstrap/dist/js/bootstrap')
require('./style/app.scss')

export default function App(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>} />
                        <Route path="/login" element={<Signup/>} />
                        <Route path="/my-profile" element={<MyProfile/>} />
                        <Route path="/search" element={<Search/>} />
                        <Route path="*" element={<Error404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
