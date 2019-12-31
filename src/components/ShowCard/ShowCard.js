import React from "react";
import Card from "../Card/Card";
import "./ShowCard.css";
export default function ShowCard({ cards }) {
  return (
    <div className="showCards">
      {cards.map((e, i) => {
        return <Card card={e} />;
      })}
    </div>
  );
}
