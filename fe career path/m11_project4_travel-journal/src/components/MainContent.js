import React from "react";

export default function MainContent(props) {
    return (
        <div className="main--card-container">
            <img src={`${props.imageUrl}`} alt={props.title} className="main--card-img" />
            <div className="main--card-text-container">
                <div className="main--card-location-maps">
                    <i className="fa-solid fa-location-dot main--card-location-icon"></i>
                    <p className="main--card-location">{props.location}</p>
                    <a href={`${props.googleMapsUrl}`} target="_blank" rel="noopener noreferrer" className="main--card-maps">View on Google Maps</a>
                </div>
                <h2 className="main--card-title">{props.title}</h2>
                <p className="main--card-dates">{props.startDate} - {props.endDate}</p>
                <p className="main--card-text">
                    {props.description}
                </p>
            </div>
        </div>
    )
}