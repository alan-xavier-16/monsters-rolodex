import React from "react";
import "./Card.styles.css";

const Card = ({ monster }) => {
  const { name, id, email } = monster;
  return (
    <div className="Card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
