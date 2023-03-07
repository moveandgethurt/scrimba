import React from "react";
import characterImg from '../images/katie-zaferes.png'
import starIcon from '../images/star.png'

export default function Card() {
    return (
        <div className="card--container">
            <div className="card--character-img-status">
                <img className="card--character-img" src={characterImg} alt="katie zaferes" />
                <div className="card--status">
                    <span>SOLD OUT</span>
                </div>
            </div>
            
            <div className="card--rating-country">
                <img className="card--star-icon" src={starIcon} alt="star icon" />
                <span className="card--rating">5.0</span>
                <span className="card--review-count-country">
                    <span>(<span className="card--review-count">6</span>)</span>
                    <span>·</span>
                    <span className="card--country">USA</span>
                </span>
            </div>

            <p className="card--title">
                Life lessons with Katie Zaferes
            </p>

            <p className="card--cost-per-person">
                <span className="card--cost">From $136</span> / person
            </p>
        </div>
    )
}