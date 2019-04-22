import React from "react";
import "./CharCard.css";

const CharCard = props => (
  
    <div className="char-card">
        <img className="card-img-top charImg" alt="img" src={props.image} onClick={() => props.charSelect(props.id)}/>
    </div>
  
);

export default CharCard;