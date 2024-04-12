import "./App.css";
import axios from "axios";
import { useState } from "react";
import HeroCard from "./components/Hero";


function App() {
  const [heroes, setHeroes] = useState(null);

  const getHero = () => {
    axios
    .get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .then((response) => {
      // console.log(response);
      setHeroes(response.data)
    });
  }
  return (
    <>
    {heroes &&
        heroes.map((hero) => <HeroCard hero = {hero} key = {hero.id}/>)}
        <button type="button" onClick={getHero}>click</button>
    </>
  )
}

export default App;
