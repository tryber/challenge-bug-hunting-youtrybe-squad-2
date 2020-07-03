import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../css/searchBar.css';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (event) => {
    const {
      target: { value },
    } = event;
    setSearchInput(value);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        name="search"
        value={searchInput}
        id="search"
        placeholder="Search"
        onChange={handleSearchInput}
      />
      <div className="search-btn">
        <Link className="material-icons search-icon" to={`/results/${searchInput}`}>
          search
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
