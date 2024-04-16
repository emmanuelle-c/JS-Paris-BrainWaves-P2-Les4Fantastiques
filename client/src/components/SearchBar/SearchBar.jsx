import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import "./SearchBar.css";


function SearchBar({ handleClick, search, setSearch, searchDate, setSearchDate }) {

  return (
    <>
    <div id="date">
        <p>Date : </p>
        <DatePicker value={searchDate} selected={searchDate} onChange={(searchDate) => setSearchDate(searchDate)} />
    </div>  
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
    </div>
      <button type="button" onClick={handleClick}>
        chercher
      </button>
</>
  );
}

export default SearchBar;
