import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function Header() {
    return (
        <header>
            <nav>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react icon" />
                <ul className='navbar'>
                    <a href="#"><li>Pricing</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contact</li></a>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div className='main-container'>
            <h1>Fun facts about React</h1>
            <ul className='main-list'>
                <li>Was first released in 2013</li>
                <li>Was originally created by John Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <small>© 2023 Korotkova development. All rights reserved.</small>
        </footer>
    );
}

function Page() {
    return (
        <div className='page-container'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />);