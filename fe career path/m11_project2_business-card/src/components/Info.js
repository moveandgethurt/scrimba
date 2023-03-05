import React from "react"
import photo from 'D:/Kate JS/scrimba/fe career path/m11_project2_business-card/src/images/photo.jpg'

export default function Info() {
    return (
      <div className='info--container'>
        <img className="info--photo" src={photo} alt="a smiling woman" />
        <h1 className="info--name">Kateryna Korotkova</h1>
        <h3 className="info--position">Frontend Developer</h3>
        <h4 className="info--website">katerynakorotkova.website</h4>
        <div className="info--btn-container">
            <button className="info--email-btn">
                <i className="fa-solid fa-envelope"></i>Email
            </button>
            <button className="info--ln-btn">
                <i className="fa-brands fa-linkedin"></i>LinkedIn
            </button>
        </div>
      </div>
    )
  }