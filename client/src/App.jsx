import "./App.css";
import { useState } from "react";

function App() {

const [hero, setHero] = useState(null);

const getApi = () => {
  fetch("https://akabab.github.io/superhero-api/api/all.json")
    .then(response => response.json())
    .then(data => setHero(data))
}
  return (
    <>
    <button type="button" onClick={getApi}>Get API</button>
    { hero &&
    hero.map((star) => <p key = {star.id}>{star.name}</p>)
    }
    </>
  );
}

export default App;
