import { useState } from "react";

// import des fichiers style et composants :
import Header from "../../components/Header/Header";
import "../../components/Header/Header.css";
import "../FirstPage/FirstPage.css";
import "./UserPage.css";

const users = [
  {
    id: 1,
    firstName: "Emmanuelle",
    lastName: "Curiant",
    email: "emmanuelle.curiant@gmail.com",
    password: "manue",
  },
  {
    id: 2,
    firstName: "Coline",
    lastName: "Grosso",
    email: "coline.grosse@neuf.fr",
    password: "coco",
  },
  {
    id: 3,
    firstName: "Adam",
    lastName: "Boulkhedert",
    email: "blackstar.per.onetap@gmail.com",
    password: "leprince",
  },
  {
    id: 4,
    firstName: "Nicos",
    lastName: "Muntu-Quituba",
    email: "nicos19@hotmail.fr",
    password: "nicoss",
  }
];

function UserPage() {
  const [login, setLogin] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [notUser, setNotUser] = useState(false);
  const clickSubmit = (event) => {
    event.preventDefault();
    for (let i= 0; i<users.length; i+=1){
        if (emailInput === users[i].email && passwordInput === users[i].password) {
            setLogin(true);
        }
        else {
            setEmailInput("");
            setPasswordInput("");
            setNotUser(true);
        }
    }
  };

  return (
    <>
      <Header />
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
    </>
  );
}

export default UserPage;
