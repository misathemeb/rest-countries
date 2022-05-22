
import React, { useState } from 'react';
import SingleCountry from '../../pages/SingleCountry';
import { useNavigate } from 'react-router-dom';



const SearchBar = () => {
  const navigate = useNavigate();

  const [searchField, setSearchField] = useState(' ');
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }
   
  const onSearchHandler = (e) => {
    e.preventDefault();
    

    navigate(`/search/${value}`);
    console.log(value)
    
  

    // const searchQuery = new URLSearchParams({
    //   name: searchField.current.value
    // }).toString();

  
  };

  return (
    
    <form  className="search-form" onSubmit={onSearchHandler} >
      <input type="text" onChange={handleChange} value={value} className="search" placeholder='🔎 Search for a country'   />
    
    </form>
    
  );
};

export default SearchBar;