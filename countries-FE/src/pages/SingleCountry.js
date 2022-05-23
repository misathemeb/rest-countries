
import React, { useEffect, useState } from 'react';
import {getCountries} from '../api/countryFinder';
import { useParams } from 'react-router-dom';
import initialCountries from '../data/initialCountries';


const SingleCountry = () => {
    const { countryUrl } = useParams();

    let singleCountry = initialCountries.filter((item) =>  {  
       return countryUrl === item.url
});

console.log(singleCountry)
   return (
       <div>
           {singleCountry.name}
       </div>
   )
            
    };

export default SingleCountry;