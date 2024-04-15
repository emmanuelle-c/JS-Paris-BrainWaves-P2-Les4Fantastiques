import "./HeroCard.css";
import { PropTypes } from "prop-types";

function HeroCard({ hero }) {
  return (
    <section className="hero-card">
      <img alt="superhéro" src={hero.images.sm} />
      <h2>{hero.name}</h2>
      <div className="card-description">
        <p>{hero.biography.fullName}</p>
        <p>{hero.work.occupation}</p>
        <p>prix : 100€ par jour</p>
      </div>
    </section>
  );
}

HeroCard.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string,
    biography: PropTypes.shape({
      fullName: PropTypes.string,
    }),
    work: PropTypes.shape({
      occupation: PropTypes.string,
    }),
    images: PropTypes.shape({
      sm: PropTypes.string,
    }),
  }).isRequired,
};

export default HeroCard;
