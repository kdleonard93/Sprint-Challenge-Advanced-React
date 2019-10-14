import React from "react";
import "./App.css";
import { useLocalStorage } from "./hooks/UseLocalStorage";

function App(props) {
  const [person, setPrson] = useLocalStorage();

  return (
    <div className="App">
      <h1>Olympics</h1>
    </div>
  );
}

export default App;
