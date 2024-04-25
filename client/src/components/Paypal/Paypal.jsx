import { PayPalButton } from "react-paypal-button-v2";
import { useState } from "react";

function PayPal() {
  const [commandeValidee, setCommandeValidee] = useState(false);

  const onSuccess = (details, data) => {
    alert("Paiement effectué avec succès !");
    // Mettez ici le code à exécuter après un paiement réussi
  };

  const onError = (err) => {
    console.error("Erreur lors du paiement : ", err);
    // Mettez ici le code à exécuter en cas d'erreur de paiement
  };

  const onCancel = (data) => {
    alert("Paiement annulé !");
    // Mettez ici le code à exécuter en cas d'annulation de paiement
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommandeValidee(true);
  };

  return (
    <div>
      {commandeValidee ? (
        <PayPalButton
          amount="10.00" // Montant à payer
          currency="USD" // Devise
          onSuccess={onSuccess} // Fonction à exécuter en cas de succès
          onError={onError} // Fonction à exécuter en cas d'erreur
          onCancel={onCancel} // Fonction à exécuter en cas d'annulation
        />
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Vos champs de formulaire ici */}
          <button type="submit">Valider la commande</button>
        </form>
      )}
    </div>
  );
}

export default Paypal;