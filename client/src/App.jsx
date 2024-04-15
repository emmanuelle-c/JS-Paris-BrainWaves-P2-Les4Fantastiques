import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ScrollToTp from "react-scroll-to-top";
import HeroCard from "./components/Hero";
import BurgerMenu from "./components/Header/Header";

function App() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [displayedHeroes, setDisplayedHeroes] = useState([]);
  const [startIndex, setStartIndex] = useState(12);

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
      )
      .then((response) => {
        const data = response.data;
        const shuffledHeroes = data.sort(() => Math.random() - 0.5); // fonction de comparaison aléatoire
        setAllHeroes(shuffledHeroes);
        setDisplayedHeroes(shuffledHeroes.slice(0, 12)); // charger les 12 premiers héros du tableau qui a été mélangé
      });
  }, []);

  const loadMoreHeroes = () => {
    const endIndex = startIndex + 12; // calculer index de fin pour les suivants
    const nextHeroes = allHeroes.slice(startIndex, endIndex); // extraire les héros suivants de la liste complète
    // (prevHeroes)contient les premiers héros déjà affichés
    setDisplayedHeroes((prevHeroes) => [...prevHeroes, ...nextHeroes]); // cette syntaxe(...) permet de fusionner les héros précédents avec les suivants sans écraser les 1ers
    setStartIndex(endIndex); // mettre à jour index de départ pour clic suivant
  };

  return (
    <>
      <div>
        <BurgerMenu />
      </div>
      <div className="hero-container">
        {displayedHeroes.map((hero) => (
          <div className="hero-card" key={hero.id}>
            <HeroCard hero={hero} />
          </div>
        ))}
        <div className="show-more">
          <button onClick={loadMoreHeroes} type="button">Voir plus</button>
          <div className="scroll">
            <ScrollToTp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
