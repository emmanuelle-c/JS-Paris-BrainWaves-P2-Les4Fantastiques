import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Paypal.css";

function Paypal() {
  return (
    <div className="container-button">
      <form>
        {/* Vos champs de formulaire ici */}
        <button type="button" id="valider">
          Valider la commande
        </button>
        <PayPalScriptProvider options={{ clientId: "test" }}>
          <PayPalButtons
            className="paypal"
            style={{ layout: "horizontal", color: "blue", height: 55 }}
          />
        </PayPalScriptProvider>
      </form>
    </div>
  );
}

export default Paypal;
