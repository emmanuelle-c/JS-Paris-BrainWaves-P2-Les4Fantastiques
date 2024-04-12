import PropTypes from "prop-types";


function HeroCard({hero}){
return (
    <h1>{hero.name}</h1>
);
}

HeroCard.propTypes = {
    hero: PropTypes.shape({
        appearance: PropTypes.shape.isRequired,
        name: PropTypes.string.isRequired,
        biography: PropTypes.shape.isRequired,
        connection: PropTypes.shape.isRequired,
        images: PropTypes.shape.isRequired,
        powerstats: PropTypes.shape.isRequired,
        work: PropTypes.shape.isRequired,
    }).isRequired,
}

export default HeroCard;