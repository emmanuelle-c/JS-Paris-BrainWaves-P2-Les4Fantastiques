import { useState } from "react";
import "./Header.css";
import { Bannière } from "../../assets/images/Images";

function BurgerMenu() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header>
      <div className={`burgermenu ${showLinks ? "show-burger" : "hide-burger"}`}>
        <ul className="burgermenu_links">
          <li className="burgermenu_items">
          <a href="/" className="burgermenu_link">Accueil</a>
          </li>
          <li className="burgermenu_items">
          <a href="/" className="burgermenu_link">Portfolio</a>
          </li>
          <li className="burgermenu__items">
          <a href="/" className="burgermenu_link">Services</a>
          </li>
          <li className="burgermenu_items">
          <a href="/" className="burgermenu_link">A Propos</a>
          </li>
        </ul>
            <button className="burger-bar" type="button" alt="menu" onClick={handleShowLinks} onKeyDown={handleShowLinks}/>
      </div>
      <div className="logo">
        <img src={Bannière} alt="logo" />
      </div>
    </header>
  );
}

export default BurgerMenu;
