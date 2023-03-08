import React from "react";

export default function Card(props) {
    let badgeText = props.openSpots === 0 ? 'SOLD OUT' : props.location === 'Online' ? 'ONLINE' : undefined;
    
    return (
        <div className="card--container">

            <div className="card--character-img-status">
                <img className="card--character-img" src={`../images/${props.coverImg}`} alt={props.name} />
                {badgeText && <div className="card--status">{badgeText}</div>}
            </div>
            
            <div className="card--rating-country">
                <img className="card--star-icon" src='../images/star.png' alt="star icon" />
                <span className="card--rating">{props.stats.rating}</span>
                <span className="card--review-count-country">
                    <span className="card--review-count">({props.stats.reviewCount})</span>
                    <span>·</span>
                    <span className="card--country">{props.location}</span>
                </span>
            </div>

            <p className="card--title">{props.title}</p>

            <p className="card--cost-per-person">
                <span className="card--cost">From ${props.price}</span> / person
            </p>

        </div>
    )
}