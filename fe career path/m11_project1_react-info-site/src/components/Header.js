import React from 'react'
import logo from 'D:/Kate JS/scrimba/fe career path/m11_project1_react-info-site/src/images/react-icon-small.png'

export default function Header() {
    return (
        <header>
            <nav>
                <div className='nav--logo-container'>
                    <img src={logo}
                        alt="react icon"
                        className='nav--icon' />
                    <h2 className='nav--logo-text'>ReactFacts</h2>
                </div>
                
                <h3 className='nav--title'>
                    React Course - Project 1
                </h3>
            </nav>
        </header>
    )
}