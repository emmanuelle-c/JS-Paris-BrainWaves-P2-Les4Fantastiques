import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

import "./SearchBar.css";

function SearchBar({
  handleClick,
  search,
  setSearch,
  searchDate,
  setSearchDate,
}) {
  return (
    <section className="search-bar">
      <div id="date">
        <p>A partir du : </p>
        <DatePicker
          value={searchDate}
          selected={searchDate}
          onChange={(date) => setSearchDate(date)}
        />
      </div>
      <div id="price-container">
        <label htmlFor="price">Prix minimum :</label>
        <input
          value={search}
          type="text"
          id="price"
          name="price"
          placeholder=" choisir votre tarif"
          onInput={(event) => setSearch(event.target.value)}
        />
      </div>
      <button className="search" type="button" onClick={handleClick}>
        chercher
      </button>
    </section>
  );
}
SearchBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  searchDate: PropTypes.string.isRequired,
  setSearchDate: PropTypes.func.isRequired,
};

export default SearchBar;
