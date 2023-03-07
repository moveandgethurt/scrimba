import React from "react";
import logo from 'D:/Kate JS/scrimba/fe career path/m11_project3_airbnb-experiences-clone/src/images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={logo} alt="red airbnb logo" />
        </nav>
    )
}