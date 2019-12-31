import React from "react";
import "./Places.css";
import PlaceCard from "../PlaceCard/PlaceCard";
export default function Places({ places }) {
  return (
    <div className="places-cards">
      {places.map((e, i) => (
        <PlaceCard key={i} city={e.city} img={e.img} />
      ))}
    </div>
  );
}
