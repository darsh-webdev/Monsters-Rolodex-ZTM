import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  const { monstersList } = props;

  return (
    <div className="card-list">
      {monstersList.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
