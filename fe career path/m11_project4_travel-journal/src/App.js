import React from "react";

import Header from './components/Header'
import Card from './components/MainContent'

import data from "./data";

export default function App() {
    const cardsData = data.map(item => 
        <Card
            key={item.id}  
            {...item}  
        />
    )

    return (
        <div className="container">
            <Header />
            <div className="main--container">
                {cardsData}
            </div>
        </div>
    )
}