
import React, { useState } from 'react';
import SingleCountry from '../../pages/SingleCountry';

const SearchBar = () => {

  // const [searchField, setSearchField] = useState(' ');
  
  // const onSearchHandler = (e) => {
  //   e.preventDefault();

  //   const searchQuery = new URLSearchParams({
  //     name: searchField.current.value
  //   }).toString();

  
  // };

  return (
    
    <form  className="search-form">
      <input type="text" className="search"  />
      <button type="submit" className="search-button">
        🔎 Search for a country
      </button>
    </form>
    
  );
};

export default SearchBar;