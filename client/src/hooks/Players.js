import React, { useState } from "react";

export function usePlayers(player) {
  const [newPlayer, setNewPlayer] = useState([]);

  const playerSetter = newPlayer => {
    console.log(newPlayer);
    setNewPlayer(newPlayer);
  };

  return [newPlayer, playerSetter];
}
