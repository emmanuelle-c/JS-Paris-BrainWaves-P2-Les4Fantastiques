import { useState } from "react";
import { useStatus } from "../../assets/context/status";
import Manue from "../../assets/images/Manue.jpg";
import Coline from "../../assets/images/Coline.jpg";
import Nicos from "../../assets/images/Nicos.jpg";
import Adam from "../../assets/images/Adam.jpg";

// import des fichiers style et composants :
import Header from "../../components/Header/Header";
import "./UserPage.css";
import Footer from "../../components/Footer/Footer";

const users = [
  {
    id: 1,
    firstName: "Emmanuelle",
    lastName: "Curiant",
    email: "emmanuelle.curiant@gmail.com",
    password: "manue",
    image: Manue,
  },
  {
    id: 2,
    firstName: "Coline",
    lastName: "Grosso",
    email: "coline.grosso@neuf.fr",
    password: "coco",
    image: Coline,
  },
  {
    id: 3,
    firstName: "Adam",
    lastName: "Boulkhedert",
    email: "blackstar.per.onetap@gmail.com",
    password: "leprince",
    image: Adam,
  },
  {
    id: 4,
    firstName: "Nicos",
    lastName: "Muntu-Quituba",
    email: "nicos19@hotmail.fr",
    password: "nicoss",
    image: Nicos,
  },
];

function UserPage() {
  const { login, setLogin } = useStatus();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [notUser, setNotUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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
      <Footer />
    </>
  );
}

export default UserPage;
