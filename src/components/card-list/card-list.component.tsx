import React from "react";
import Card from "../card/card.component";
import { Monster } from "../../App";
import "./card-list.styles.css";

type CardListProps = {
  monstersList: Monster[];
};

const CardList = ({ monstersList }: CardListProps) => {
  return (
    <div className="card-list">
      {monstersList.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
