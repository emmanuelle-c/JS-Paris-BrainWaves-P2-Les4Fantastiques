// import des librairies
import { useState } from "react";

// import des composants
import HeroCard from "./components/HeroCard/HeroCard";

// import des fichiers style
import "./App.css";

function App() {
  const [hero, setHero] = useState(null);

  const getApi = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => response.json())
      .then((data) => setHero(data.splice(300, 700)));
  };
  return (
    <>
      <button type="button" onClick={getApi}>
        Get API
      </button>
      <section className="card-container">
        {hero &&
          hero
            .map((star) => <HeroCard key={star.id} hero={star} />)
            .splice(0, 8)}
      </section>
    </>
  );
}

export default App;
