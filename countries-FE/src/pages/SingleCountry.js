
import React, { useEffect, useState } from 'react';
import {getCountries} from '../api/countryFinder';
import { useParams } from 'react-router-dom';
import Search from '../components/Search/search';
import initialCountries from '../data/initialCountries';


const SingleCountry = () => {
    const { countryUrl } = useParams();

    let singleCountry = initialCountries.filter((item) =>    
      countryUrl === item.url
    );

console.log(singleCountry)
   return (
       <div>
       <span>{singleCountry.name}</span>
       </div>
   )
            
    };

export default SingleCountry;