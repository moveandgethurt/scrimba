import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(event) {
        event.preventDefault();
        const randomNum = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNum].url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <form className="form--container" onSubmit={getMemeImage}>
                <input
                    type="text"
                    className="form--top-input"
                    placeholder="Top text here"
                    onChange={handleChange}
                    value={meme.topText}
                    name="topText"
                />
                <input
                    type="text"
                    className="form--bottom-input"
                    placeholder="Bottom text here"
                    onChange={handleChange}
                    value={meme.bottomText}
                    name="bottomText"
                />
                <button 
                    className="form--btn" 
                > 
                    Get a new meme image 
                    <i className="fa-regular fa-image form--btn-icon"></i>
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}