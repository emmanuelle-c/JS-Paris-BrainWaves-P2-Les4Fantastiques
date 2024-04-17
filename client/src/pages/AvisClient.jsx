import "./AvisClient.css";
import Commentaire from "../components/Comment/Commentaire";



function AvisClient() {
    // Données de commentaires
    const commentaires = [
      {
        utilisateur: "Sophie Martin",
        date: "Le 15 février 2024",
        avis: "Excellent service ! Les superhéros étaient fantastiques.",
        notation: 2
      },
      {
        utilisateur: "Antoine Dubois",
        date: "Le 10 février 2024",
        avis: "Le processus de réservation en ligne était simple et pratique.",
        notation: 5
      },
      {
        utilisateur: "Camille Leroy",
        date: "Le 5 mars 2024",
        avis: "Les superhéros étaient très professionnels et ont vraiment pris le temps d'interagir avec les enfants.",
        notation: 2
      },
      {
        utilisateur: "Lucas Garcia",
        date: "Le 20 janvier 2024",
        avis: "La variété de superhéros disponibles est impressionnante.",
        notation: 4
      }
    ];
  
    return (
      <div className="commandcontainer">
         <div className="lineTop">
                    <svg    width="874" height="4" viewBox="0 0 874 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.00171624" y1="2" x2="874.002" y2="2" stroke="black"/>
                    </svg>
            </div>

        {commentaires.map((commentaire) => (
          <Commentaire 
            key={commentaire.utilisateur}
            utilisateur={commentaire.utilisateur}
            date={commentaire.date}
            avis={commentaire.avis}
            notation={commentaire.notation}
            />
          
        ))} 

        <div className="linecenter"> </div>
        
        

            <div className="lineDown">
                     <svg   width="874" height="" viewBox="0 0 874 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.00171624" y1="2" x2="874.002" y2="2" stroke="red"/>
                     </svg>
            </div>
            
            <hr />

      </div>
    );
  }
  
  export default AvisClient;





  
// import React from "react";

// // Tableaux de noms et prénoms
// const noms = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
// const prenoms = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Joseph", "Thomas"];

// // Fonction pour générer un nom et prénom aléatoire
// function genererNomPrenom() {
//   const nom = noms[Math.floor(Math.random() * noms.length)];
//   const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
//   return `${prenom} ${nom}`;
// }

// // Fonction pour générer un avis aléatoire
// function genererAvis() {
//   const avis = [
//     "Excellent service ! Les superhéros étaient fantastiques.",
//     "Le processus de réservation en ligne était simple et pratique.",
//     "Les superhéros étaient très professionnels et ont vraiment pris le temps d'interagir avec les enfants.",
//     "La variété de superhéros disponibles est impressionnante.",
//     "Le service de location de superhéros était décevant. Les costumes étaient de mauvaise qualité.",
//     "Je ne recommande pas ce service. Les superhéros étaient en retard et peu professionnels.",
//     "J'ai adoré l'expérience de location de superhéros. Les enfants étaient ravis !",
//     "Service médiocre. Les superhéros semblaient désintéressés et peu enthousiastes."
//   ];
//   return avis[Math.floor(Math.random() * avis.length)];
// }

// // Composant principal
// function AvisClient() {
//   // Générer 200 avis de commentaire
//   const commentaires = [];
//   for (let i = 0; i < 200; i++) {
//     const utilisateur = genererNomPrenom();
//     const avis = genererAvis();
//     commentaires.push({ utilisateur: utilisateur, avis: avis });
//   }

//   // Afficher les commentaires générés
//   return (
//     <div>
//       {commentaires.map((commentaire, index) => (
//         <Commentaire key={index} utilisateur={commentaire.utilisateur} avis={commentaire.avis} />
//       ))}
//     </div>
//   );
// }

// export default AvisClient;