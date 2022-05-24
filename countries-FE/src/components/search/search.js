
import React, { useState } from 'react';
import Results from '../Results/results';
import initialCountries from '../../data/initialCountries';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header/header';
import SearchBar from '../SearchBar/searchBar';



const Search = () => {

  const [searchField, setSearchField] = useState(' ');
  const {region, search} = useParams();
  

  let filteredList = initialCountries.filter((item) => {
    if (region){
      return region === item.region
    } else if (search){
         return item.name.toLowerCase().includes(search)
      
    } else {
         return true;
    }
    
});
console.log(region)
console.log(search)

   

  return (
    <>
      <Header />
      <SearchBar />
      <Results results={filteredList}/>

    </>
  );
};

export default Search;