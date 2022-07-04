import React from "react";
import "./card.styles.css";

function Card(props) {
  const { id, name, email } = props.monster;
  return (
    <div key={id} className="card-container">
      <img alt={name} src={`https://robohash.org/${id}?set=set2`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
