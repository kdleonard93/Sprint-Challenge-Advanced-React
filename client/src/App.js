import React from "react";
import "./App.css";
import { useLocalStorage } from "./hooks/UseLocalStorage";

function App(props) {
  const [person, setPrson] = useLocalStorage();

  return (
    <div className="App">
      <h1>Olympics</h1>
    </div>

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
  );
}

export default App;
