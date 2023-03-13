import React from "react";

export default function Form() {
    function handleClick() {
        console.log('I was clicked!')
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
                <button className="form--btn" onClick={handleClick}>Get a new meme image <i className="fa-regular fa-image form--btn-icon"></i></button>
            </div>
        </main>
    )
}