import PropTypes from "prop-types";
import "./Hero.css";
import { Link } from 'react-router-dom';

function HeroCard({ hero }) {
  return (
    <div className="card">
      <div className="avatar">
        <Link key={hero.id} to={`/pagehero/${hero.id}`} className="profilHero">
            <img src={hero.images.sm} alt="avatar" />
        </Link>
      </div>
      <section>
        <h1>{hero.name}</h1>
      </section>
      <article>
        <p className="description">
          <p>{hero.biography.fullName}</p>
          <p>{hero.work.occupation}</p>
          <p>prix : 100€ par jour</p>
        </p>
      </article>
    </div>
  );
}
HeroCard.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.shape.isRequired, 
    appearance: PropTypes.shape.isRequired,
    name: PropTypes.string.isRequired,
    biography: PropTypes.shape.isRequired,
    connections: PropTypes.shape.isRequired,
    images: PropTypes.shape.isRequired,
    powerstats: PropTypes.shape.isRequired,
    work: PropTypes.shape.isRequired,
  }).isRequired,
};

export default HeroCard;
