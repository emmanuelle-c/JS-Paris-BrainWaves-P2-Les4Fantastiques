import { useState } from "react";
import "./Formulaire.css";
import "./FormulaireResponsive.css"

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
          <div className="labelLeft">
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
          <div className="labelLeft">
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
          <div className="labelLeft">
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


// import { useState } from "react";
// import { PayPalButton } from "react-paypal-button-v2";
// import "./Formulaire.css";

// function Formulaire() {
//   const [nom, setNom] = useState("");
//   const [prenom, setPrenom] = useState("");
//   const [email, setEmail] = useState("");
//   const [telephone, setTelephone] = useState("");
//   const [adresse, setAdresse] = useState("");
//   const [ville, setVille] = useState("");
//   const [codePostal, setCodePostal] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Code de soumission du formulaire
//   };

//   // Fonction à exécuter lorsque le paiement est réussi
//   const onSuccess = (details, data) => {
//     alert("Paiement effectué avec succès !");
//     // Code à exécuter après un paiement réussi
//   };

//   // Fonction à exécuter en cas d'erreur lors du paiement
//   const onError = (err) => {
//     console.error("Erreur lors du paiement : ", err);
//     // Code à exécuter en cas d'erreur de paiement
//   };

//   // Fonction à exécuter lors de l'annulation du paiement
//   const onCancel = (data) => {
//     alert("Paiement annulé !");
//     // Code à exécuter en cas d'annulation de paiement
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="element-1">
//           <div className="usedata">
//             <div>
//               <label htmlFor="nom">NOM:</label>
//               <input
//                 type="text"
//                 id="nom"
//                 value={nom}
//                 onChange={(e) => setNom(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="prenom" htmlFor="prenom">
//                 PRENOM:
//               </label>
//               <input
//                 type="text"
//                 id="prenom"
//                 value={prenom}
//                 onChange={(e) => setPrenom(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="usedata-2">
//             <div>
//               <label htmlFor="email">EMAIL:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div>
//               <label htmlFor="telephone">TELEPHONE:</label>
//               <input
//                 type="tel"
//                 id="telephone"
//                 value={telephone}
//                 onChange={(e) => setTelephone(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="Home">
//             <label htmlFor="adresse">ADRESSE:</label>
//             <input
//               type="adresse"
//               id="adresse"
//               value={adresse}
//               onChange={(e) => setAdresse(e.target.value)}
//             />
//           </div>

//           <div className="position">
//             <div>
//               <label htmlFor="ville">VILLE:</label>
//               <input
//                 type="text"
//                 id="ville"
//                 value={ville}
//                 onChange={(e) => setVille(e.target.value)}
//               />
//             </div>

//             <div>
//               <label htmlFor="codePostal">CODE POSTAL:</label>
//               <input
//                 type="text"
//                 id="codePostal"
//                 value={codePostal}
//                 onChange={(e) => setCodePostal(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="element-2">
//           <PayPalButton
//             amount="1.000.00 €" // Montant à payer
//             currency="Euro" // Devise
//             onSuccess={onSuccess} // Fonction à exécuter en cas de succès
//             onError={onError} // Fonction à exécuter en cas d'erreur
//             onCancel={onCancel} // Fonction à exécuter en cas d'annulation
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Formulaire;
