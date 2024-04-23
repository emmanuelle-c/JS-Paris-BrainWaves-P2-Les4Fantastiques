import { useState } from "react";
import "./Formulaire.css";

function Formulaire() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container" onSubmit={handleSubmit}>
      <div className="container-data">
        <div className="usedata">
          <div>
            <label htmlFor="nom">NOM:</label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>

          <div>
            <label className="prenom" htmlFor="prenom">
              PRENOM:
            </label>
            <input
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
        </div>

        <div className="usedata-2">
          <div>
            <label htmlFor="email">EMAIL:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="telephone">TELEPHONE:</label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
        </div>

        <div className="Home">
          <label htmlFor="adresse">ADRESSE:</label>
          <input
            type="adresse"
            id="adresse"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
        </div>

        <div className="position">
          <div>
            <label htmlFor="ville">VILLE:</label>
            <input
              type="text"
              id="ville"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="codePostal">CODE POSTAL:</label>
            <input
              type="text"
              id="codePostal"
              value={codePostal}
              onChange={(e) => setCodePostal(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container-button">
        <button id="valider" type="submit">
          VALIDE TA COMMANDE EN UN CLICK
        </button>
      </div>
    </div>
  );
}

export default Formulaire;
