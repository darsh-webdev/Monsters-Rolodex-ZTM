import React from "react";
import { Monster } from "../../App";
import "./card.styles.css";

type CardProps = {
  monster: Monster;
};

function Card({ monster }: CardProps) {
  const { id, name, email } = monster;
  return (
    <div key={id} className="card-container">
      <img alt={name} src={`https://robohash.org/${id}?set=set2`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
