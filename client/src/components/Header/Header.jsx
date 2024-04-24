import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import "./Header.css";
import { Link } from "react-router-dom";
import ban from "../../assets/images/logos/banniere.svg";
import logo from "../../assets/images/logos/logo-fond-0.png";
import { useStatus } from "../../assets/context/status";

function BurgerMenu({ currentUser }) {
  const { login } = useStatus();
  const [showLinks, setShowLinks] = useState(false);
  const [showLog, setShowLog] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleShowLog = () => {
    setShowLog(!showLog);
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
              <a href="/faq" className="burgermenu-link">
                FAQ
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
          {!login && (
            <>
              {" "}
              <Link to="/userpage">
                <button type="button">LOGIN</button>
              </Link>
              <Link to="/accueil">
                <button type="button">SIGN IN</button>
              </Link>
            </>
          )}
          {login && <img src={currentUser.image} alt="avatar" />}
        </div>
        <div className="button-responsive">
          <button
            type="button"
            aria-label="button"
            className="button-user"
            onClick={handleShowLog}
            onKeyDown={handleShowLog}
          >
            <FaRegUser className="user" />
          </button>
          {showLog && (
            <ul className="log-responsive">
              <Link to="/userpage">
                <button type="button" className="hide-login">
                  LOGIN
                </button>
              </Link>
              <Link to="/accueil">
                <button type="button" className="hide-sign">
                  SIGN IN
                </button>
              </Link>
            </ul>
          )}
        </div>
      </div>
      <div className="logo">
        <Link id="click-to-accueil" to="/accueil">
          <img id="banniere" src={ban} alt="logo" />
          <img id="logo" src={logo} alt="logo-mini" />
        </Link>
      </div>
    </header>
  );
}

export default BurgerMenu;
