import React from "react";

const usePlayers = props => {
  return (
    <div>
      <h2>Name: {props.player.name}</h2>
      <h2>Searches: {props.player.searches}</h2>
      <h3>Country: {props.player.country}</h3>
    </div>
  );
};

export default usePlayers;
