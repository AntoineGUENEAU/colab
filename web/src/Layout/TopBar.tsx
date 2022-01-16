import React, {ReactElement} from "react";
import {Link} from "react-router-dom";

export default function TopBar(): ReactElement{
    return (
        <>
            <div className="navbar-custom">
                <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li className="d-lg-block">
                        <Link to="/" className="nav-link waves-effect waves-light">Home</Link>
                    </li>
                    <li className="d-lg-block">
                        <Link to="/login" className="nav-link waves-effect waves-light">Login</Link>
                    </li>
                    <li className="d-lg-block">
                        <Link to="/my-profile" className="nav-link waves-effect waves-light">My profile</Link>
                    </li>
                    <li className="d-lg-block">
                        <Link to="/search" className="nav-link waves-effect waves-light">Search</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
