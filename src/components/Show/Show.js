import React from "react";
import ShowText from "../ShowText/ShowText";
import ShowCard from "../ShowCard/ShowCard";
import "./Show.css";

export default function Show({ cards }) {
  return (
    <div className="show">
      <ShowText />
      <ShowCard cards={cards} />
    </div>
  );
}
