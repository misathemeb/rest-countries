
import React, { useState } from 'react';
import SingleCountry from '../../pages/SingleCountry';
import Results from '../Results/results';
import initialCountries from '../../data/initialCountries';
import { useParams } from 'react-router-dom';
import Header from '../Header/header';

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
      <Results results={filteredList}/>
    </>
  );
};

export default Search;