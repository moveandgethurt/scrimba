import React from "react";

import memesData from "../memesData";

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState('')

    function getMemeImage() {
        const memesArr = memesData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArr.length);
        setMemeImage(memesArr[randomNum].url)
    }

    return (
        <main>
            <div className="form--container">
                <div className="form--inputs">
                    <input
                        type="text"
                        className="form--top-input"
                        placeholder="Top text here"
                    />
                    <input
                        type="text"
                        className="form--bottom-input"
                        placeholder="Bottom text here"
                    />
                </div>
                <button className="form--btn" onClick={getMemeImage}>Get a new meme image <i className="fa-regular fa-image form--btn-icon"></i></button>
            </div>
            <img src={memeImage} alt="random meme" className="meme--image" />
        </main>
    )
}