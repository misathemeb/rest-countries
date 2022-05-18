
import React, { useState } from 'react';
import SingleCountry from '../../pages/SingleCountry';
import Nav from '../Nav/nav';
import Results from '../Results/results';
import initialCountries from '../../data/initialCountries';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';

const Search = () => {

  // const [searchField, setSearchField] = useState(' ');
  const {region} = useParams();
  

  let filteredList = initialCountries.filter((item) => 
    !region || region === item.region
  );
  console.log(filteredList);
  console.log(region);
  

  return (
    <>
      <Header />
      <Nav />
      <Results results={filteredList}/>
    </>
  );
};

export default Search;