import React from "react";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import data from './data'

export default function App() {
    const cardsData = data.map(item => 
        <Card 
            key = {item.id}
            {...item}
        />
    )
    
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <div className="cards">
                {cardsData}
            </div>
        </div>
    )
}