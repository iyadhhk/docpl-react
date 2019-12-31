import React from "react";
import "./PlaceCard.css";

export default function PlaceCard({ city, img }) {
  return (
    <div className="place-card">
      <img src={img} alt="" />
      <div className="details">
        <h3 className="details-text">{city}</h3>
        <button className="details-btn">See Openings</button>
      </div>
    </div>
  );
}
