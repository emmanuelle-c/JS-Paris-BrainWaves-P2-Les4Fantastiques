import PropTypes from "prop-types";
import "./Hero.css";
import { Link } from "react-router-dom";

function convertMonth(month) {
  if (month === 0) return "Janvier";
  if (month === 1) return "Février";
  if (month === 2) return "Mars";
  if (month === 3) return "Avril";
  if (month === 4) return "Mai";
  if (month === 5) return "Juin";
  if (month === 6) return "Juillet";
  if (month === 7) return "Août";
  if (month === 8) return "Septembre";
  if (month === 9) return "Octobre";
  if (month === 10) return "Novembre";
  if (month === 11) return "Décembre";
  return false;
}

function HeroCard({ hero }) {
  return (
    <div className="card">
      <div className="avatar">
        <Link key={hero.id} to={`/pagehero/${hero.id}`}>
          <img src={hero.images.sm} alt="avatar" />
        </Link>
      </div>
      <section id="card-title">
        <h1>{hero.name}</h1>
      </section>
      <article className="description-container">
        <div className="description">
          <p>{hero.biography.fullName}</p>
          <p>
            prochaine dispo : {hero.date.getDate()}{" "}
            {convertMonth(hero.date.getMonth())}
          </p>
          <p>prix : {hero.price}€ par jour</p>
        </div>
      </article>
    </div>
  );
}
HeroCard.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.shape.isRequired,
    date: PropTypes.shape,
    appearance: PropTypes.shape,
    price: PropTypes.string,
    name: PropTypes.string,
    biography: PropTypes.shape,
    connections: PropTypes.shape,
    images: PropTypes.shape,
    powerstats: PropTypes.shape,
    work: PropTypes.shape,
  }).isRequired,
};

export default HeroCard;
