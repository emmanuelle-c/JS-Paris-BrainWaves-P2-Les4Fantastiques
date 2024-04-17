import { useState, useEffect } from "react";
import axios from "axios";
import "./PageHero.css";
import Header from "../components/Header/Header";

function PageHero() {
  const [superhero, setSuperhero] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
      )
      .then((response) => {
        const Superhero = response.data[60];
        setSuperhero(Superhero);
      })
      .catch((error) => {
        console.error("Erreur fetch", error);
      });
  }, []);

  return (
    <div>
      <Header />
      {superhero && (
        <section className="profilHero">
          <img src={superhero.images.md} alt="avatarHero" />
          <div className="titletextHero">
            <h1 className="nameHero">{superhero.name}</h1>
            <p className="price">100€/Jour</p>
            <p className="textHero">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur quam dolor hic ducimus, voluptatem saepe a
              doloremque, consequatur accusantium officiis rerum ex dolores
              repellat error eius distinctio ratione maiores, perferendis
              eveniet numquam dolorum! Illum possimus minus accusantium qui,
              aspernatur omnis nam vitae praesentium eaque velit cum assumenda,
              quod asperiores et veritatis ratione id, distinctio architecto.
              Ipsum unde cupiditate neque eum deleniti! Illum et corporis
              praesentium perspiciatis, sequi pariatur repudiandae qui.
            </p>
            <p>{superhero.biography.publisher}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default PageHero;
