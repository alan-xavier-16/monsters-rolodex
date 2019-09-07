import React from "react";
import Card from "../Card/Card.component";
import "./CardList.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="CardList">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
