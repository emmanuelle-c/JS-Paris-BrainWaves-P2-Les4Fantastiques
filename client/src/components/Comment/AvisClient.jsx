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
      <div className="total-avis">
        {" "}
        <p className="number"> ⭐ 4,8 | 70 avis:</p>{" "}
      </div>
      <div className="line-top"/>

      {commentaires.map((commentaire,index) => (
        <Commentaire
          key={index}
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