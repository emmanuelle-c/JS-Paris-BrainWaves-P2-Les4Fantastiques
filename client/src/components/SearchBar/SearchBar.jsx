import { useState } from "react";

import "./SearchBar.css";

function SearchBar({ handleClick, search, setSearch }) {

  return (
    <div id="price">
      <label htmlFor="price">Prix :</label>
      <input
        value={search}
        type="text"
        id="price"
        name="price"
        placeholder="choisir votre tarif"
        onInput={(event) => setSearch(event.target.value)}
      ></input>
      <button type="button" onClick={handleClick}>chercher</button>
    </div>
  );
}

export default SearchBar;
