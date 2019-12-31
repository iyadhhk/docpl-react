import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className={props.card.margin ? "card addMargin" : "card"}>
      <img src={props.card.img} alt="" />
      <p class="card-title">{props.card.title}</p>
      <p class="card-text">{props.card.text}</p>
    </div>
  );
}
