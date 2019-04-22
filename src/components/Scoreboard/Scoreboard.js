import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
  
    <nav className="fixed-top">
      <div className="title">Clicky Game</div>
      <div className="header">{props.msg}</div>
      <div className="score">Score: {props.score} | Top Score: {props.topScore}</div>
    </nav>
  
);

export default Scoreboard;