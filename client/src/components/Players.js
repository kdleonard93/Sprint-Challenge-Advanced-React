import React from "react";

const Player = props => {
  return (
    <div className="player-div">
      <h2>Player Name: {props.player.name}</h2>
      <h3>Country: {props.player.country}</h3>
    </div>
  );
};

export default Player;
