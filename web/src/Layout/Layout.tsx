import React from "react";
import {Outlet} from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function Layout(){
    return (
        <>
            <div>
                <div id="wrapper">
                    <TopBar/>
                    <div className="content-page">
                        <div className="content">
                            <div className="container-fluid">
                                <Outlet/>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}
