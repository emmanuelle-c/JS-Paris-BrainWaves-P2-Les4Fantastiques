import { useState } from "react";
import { useStatus } from "../../contexts/auth";
import Manue from "../../assets/images/Manue.jpg";
import Coline from "../../assets/images/Coline.jpg";
import Nicos from "../../assets/images/Nicos.jpg";
import Adam from "../../assets/images/Adam.jpg";
import UserProfil from "../../components/UserProfil/UserProfil";

// import des fichiers style et composants :
import Header from "../../components/Header/Header";
import "./UserPage.css";
import Footer from "../../components/Footer/Footer";

const users = [
  {
    id: 1,
    firstName: "Emmanuelle",
    lastName: "Curiant",
    email: "manue.dubendo@gmail.com",
    password: "manue",
    image: Manue,
    DDN: "12/02/1978",
    address: "77 rue la vie heureuse 75012 Paris",
    tel: "06 28 28 28 28",
    orders: [
      "Commande effectuée le 01 Janv 2024, prestataire: Spiderman, occasion : évènement, prix : 130€ - statut : validée",
      "Commande effectuée le 02 Mars 2024, prestataire: Doctor Strange, occasion: déménagement, prix : 94€ - statut : validée",
    ],
  },
  {
    id: 2,
    firstName: "Coline",
    lastName: "Grosso",
    email: "supercoco@neuf.fr",
    password: "coco",
    image: Coline,
    DDN: "11/06/1996",
    address: "4 rue de la joyeusetée 75018 Paris",
    tel: "06 63 63 63 63",
    orders: [
      "Commande effectuée le 01 Janv 2024, prestataire: Spiderman, occasion : évènement, prix : 130€ - statut : validée",
      "Commande effectuée le 02 Mars 2024, prestataire: Doctor Strange, occasion: déménagement, prix : 94€ - statut : validée",
    ],
  },
  {
    id: 3,
    firstName: "Adam",
    lastName: "Boulkhedert",
    email: "blackstar.per.onetap@gmail.com",
    password: "leprince",
    image: Adam,
    DDN: "24/02/2024",
    address: "10 rue de l'arbre jaune 92230 Gennevilliers",
    tel: "07 83 83 83 83",
    orders: [
      "Commande effectuée le 01 Janv 2024, prestataire: Spiderman, occasion : évènement, prix : 130€ - statut : validée",
      "Commande effectuée le 02 Mars 2024, prestataire: Doctor Strange, occasion: déménagement, prix : 94€ - statut : validée",
    ],
  },
  {
    id: 4,
    firstName: "Nicos",
    lastName: "Muntu-Quituba",
    email: "nicoslebogoss@hotmail.fr",
    password: "nicoss",
    image: Nicos,
    DDN: "19/10/1903",
    address: "2 rue du petit colibri 78000 Versailles",
    tel: "06 64 64 64 64",
    orders: [
      "Commande effectuée le 01 Janv 2024, prestataire: Spiderman, occasion : évènement, prix : 130€ - statut : validée",
      "Commande effectuée le 02 Mars 2024, prestataire: Doctor Strange, occasion: déménagement, prix : 94€ - statut : validée",
    ],
  },
];

function UserPage() {
  const { login, setLogin, currentUser, setCurrentUser } = useStatus();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [notUser, setNotUser] = useState(false);

  const clickSubmit = (event) => {
    event.preventDefault();
    for (let i = 0; i < users.length; i += 1) {
      if (
        emailInput === users[i].email &&
        passwordInput === users[i].password
      ) {
        setLogin(true);
        setCurrentUser(users[i]);
      } else {
        setEmailInput("");
        setPasswordInput("");
        setNotUser(true);
      }
    }
  };

  return (
    <>
      <Header users={users} currentUser={currentUser} />
      <div className="card-user-container">
        {!login && (
          <form>
            <section id="email-container">
              <label htmlFor="email">Email</label>
              <input
                value={emailInput}
                type="text"
                id="email"
                placeholder=" spiderman@gmail.com"
                onChange={(event) => setEmailInput(event.target.value)}
              />
            </section>
            <section id="password-container">
              <label htmlFor="password">Password</label>
              <input
                value={passwordInput}
                type="password"
                id="password"
                placeholder="   *******"
                onChange={(event) => setPasswordInput(event.target.value)}
              />
            </section>
            {notUser && <p>**utilisateur non reconnu**</p>}
            <button type="submit" onClick={clickSubmit}>
              LOG IN
            </button>
          </form>
        )}
      </div>
      {login && (
        <>
          <h1 id="welcome-message">Bienvenue sur votre compte !</h1>
          <UserProfil />
        </>
      )}
      <Footer />
    </>
  );
}

export default UserPage;
