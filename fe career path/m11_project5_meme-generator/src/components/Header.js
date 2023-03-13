import React from "react";

export default function Header() {
    return (
        <header className="header--container">
            <div className="header--left">
                <img src="../images/troll-face.png" alt="troll face" className="header--img" />
                <h1 className="header--title">Meme Generator</h1>
            </div>
            <p className="header--right">React Course - Project 3</p>
        </header>
    )
}