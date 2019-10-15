import React from "react";
import "./App.css";
import { useLocalStorage } from "./hooks/UseLocalStorage";
import { usePlayers } from "./hooks/Players";

function App(props) {
  const [name, setName] = usePlayers("name", "kyle");
  const [country, setCountry] = usePlayers("country", "United States");

  return (
    <div className="App">
      <h1>{"Women's World Cup"}</h1>
      <input
        type="string"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="string"
        placeholder="Country"
        value={country}
        onChange={e => setCountry(e.target.value)}
      />
    </div>
  );
}

export default App;
