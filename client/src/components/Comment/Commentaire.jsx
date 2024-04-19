import PropTypes from "prop-types";

function Commentaire({ utilisateur, date, avis, notation }) {
    
    // Fonction pour générer les étoiles en fonction de la notation
    function genererEtoiles(note) {
      const etoiles = [];
      for (let i = 0; i < 5; i+= 1) {
        if (i < note) {
          etoiles.push(<span key={i}>&#9733;</span>); // Étoile pleine
        } else {
          etoiles.push(<span key={i}>&#9734;</span>); // Étoile vide
        }
      }
    
    return etoiles;
  }

 
 
  return (

    <div className="commentaire">
      <h1 className="utilisateur">{utilisateur}</h1>
      <div className="date">
        <p>{date}</p>
      </div>

      <div className="etoiles">{genererEtoiles(notation)}</div>
      <div className="avis">
        <p>{avis}</p>
      </div>
    </div>
  );
}

  Commentaire.propTypes = {
    utilisateur: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    avis: PropTypes.string.isRequired,
    notation: PropTypes.number.isRequired
  };

   


export default Commentaire;
