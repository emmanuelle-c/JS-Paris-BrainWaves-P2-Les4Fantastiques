import "./AvisClient.css";
import Commentaire from "./Commentaire";
 



function AvisClient() {
    // Données de commentaires
    const commentaires = [
      {
        utilisateur: "Jean - Pierre P.",
        date: "Le 15 février 2024",
        avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna . LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna . Lorem",
        notation: 2
      },
      {
        utilisateur: "Catherine T.",
        date: "Le 10 février 2024",
        avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna . LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna . Lorem",
        notation: 5
        
      },
      {
        utilisateur: "Martin  L.",
        date: "Le 5 mars 2024",
        avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna . LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna . Lorem",
        notation: 2
      },
      {
        utilisateur: "Maximilien T.",
        date: "Le 20 janvier 2024",
        avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna . LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna . Lorem",
        notation: 4
      }
    ];
  
    return (

      <div className="command-container">
        
        <div className="total-avis"> <p className="number"> ⭐ 4,8 | 70 avis:</p> </div>
       <div className="line-top"/>

        {commentaires.map((commentaire) => (
          <Commentaire 
            key={commentaire.utilisateur}
            utilisateur={commentaire.utilisateur}
            date={commentaire.date}
            avis={commentaire.avis}
            notation={commentaire.notation}
            />
          
        ))} 

        <div className="line-center"/> 
        <div className="line-down"/>
            
           

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