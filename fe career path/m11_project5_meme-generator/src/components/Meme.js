import React from "react";

import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArr = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * memesArr.length);
        const url = memesArr[randomNum].url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
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
                <button 
                    className="form--btn" 
                    onClick={getMemeImage}
                > 
                    Get a new meme image 
                    <i className="fa-regular fa-image form--btn-icon"></i>
                </button>
            </div>
            <img src={meme.randomImage} alt="random meme" className="meme--image" />
        </main>
    )
}