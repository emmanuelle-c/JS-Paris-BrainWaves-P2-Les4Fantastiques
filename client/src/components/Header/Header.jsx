import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ban from "../../assets/images/logos/banniere.svg";


function BurgerMenu() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header>
      <div className="button-container">
        <div
          className={`burgermenu ${showLinks ? "show-burger" : "hide-burger"}`}
        >
          <ul className="burgermenu-links">
            <li className="burgermenu-items">
              <a href="/" className="burgermenu-link">
                Accueil
              </a>
            </li>
            <li className="burgermenu-items">
              <a href="/" className="burgermenu-link">
                Portfolio
              </a>
            </li>
            <li className="burgermenu-items">
              <a href="/" className="burgermenu-link">
                Services
              </a>
            </li>
            <li className="burgermenu-items">
              <a href="/" className="burgermenu-link">
                A Propos
              </a>
            </li>
          </ul>
          <button
            aria-label="button"
            type="button"
            className="burger-bar"
            onClick={handleShowLinks}
            onKeyDown={handleShowLinks}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
        <div className="connexion">
          <button type="button" className="login">
            LOGIN
          </button>
          <button type="button" className="sign">
            SIGN IN
          </button>
        </div>
      </div>
      <div className="logo">
      <Link  to="/accueil" >
          <img src={ban} alt="logo" />  
      </Link>
      </div>
    </header>
  );
}

export default BurgerMenu;

