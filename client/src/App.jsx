// import des librairies
import { useState, useEffect } from "react";
import axios from "axios";
import ScrollToTp from "react-scroll-to-top";

// import des composants
import HeroCard from "./components/HeroCard/Hero";
import BurgerMenu from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

// import des fichiers style
import "./App.css";

function App() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [displayedHeroes, setDisplayedHeroes] = useState([]);
  const [startIndex, setStartIndex] = useState(12);

  // fetch les données API, suffle les données et afficher seulement 12 par défaut :
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

  // ajouter des héros en affichage 12 par 12 :
  const loadMoreHeroes = () => {
    const endIndex = startIndex + 12; // calculer index de fin pour les suivants
    const nextHeroes = allHeroes.slice(startIndex, endIndex); // extraire les héros suivants de la liste complète
    // (prevHeroes)contient les premiers héros déjà affichés
    setDisplayedHeroes((prevHeroes) => [...prevHeroes, ...nextHeroes]); // cette syntaxe(...) permet de fusionner les héros précédents avec les suivants sans écraser les 1ers
    setStartIndex(endIndex); // mettre à jour index de départ pour clic suivant
  };

  // ajouter une propriété "price" à chaque héro du tableau :
  allHeroes.forEach(function (hero) {
    hero.price = parseInt(
      hero.powerstats.durability + hero.powerstats.strength
    );
  });
  // faire une recherche par prix :
  const [search, setSearch] = useState("");
  const [filterHeroes, setFilterHeroes] = useState(displayedHeroes);

  const handleClick = () => {
    const filter = allHeroes.filter((hero) => hero.price = search);
    if (filter.length != 0) {
      setFilterHeroes(displayedHeroes);
    } else {
      setFilterHeroes(filter);
    }
  };

  return (
    <>
      <div>
        <BurgerMenu />
      </div>
      <div className="search-menu">
        <SearchBar
          setSearch={setSearch}
          handleClick={handleClick}
          search={search}
        />
      </div>
      <div className="hero-container">
        {filterHeroes.map((hero) => (
          <div className="hero-card" key={hero.id}>
            <HeroCard hero={hero} />
          </div>
        ))}
        <div className="show-more">
          <button onClick={loadMoreHeroes} type="button">
            Voir plus
          </button>
          <div className="scroll">
            <ScrollToTp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
