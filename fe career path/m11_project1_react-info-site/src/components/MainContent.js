import React from 'react'

export default function MainContent() {
    return (
        <main>
            <h1 className='main--title'>Fun facts about React</h1>
            <ul className='main--ul-list'>
                <li className='main--li-item'>Was first released in 2013</li>
                <li className='main--li-item'>Was originally created by John Walke</li>
                <li className='main--li-item'>Has well over 100K stars on Github</li>
                <li className='main--li-item'>Is maintained by Facebook</li>
                <li className='main--li-item'>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
}