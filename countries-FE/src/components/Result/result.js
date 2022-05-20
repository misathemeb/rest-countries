
import React from "react";
import './result.css';

 const Result = (props) => {



 return (
     <div className="single-result">
        <h2>{props.id}</h2>
        <ul>
            <li>Native Name:{props.name}</li>
            <li>Population:{props.population}</li>
            <li>Region:{props.region}</li>
            <li>Capital:{props.capital}</li>
            <li>Subregion:{props.subregion}</li>
        </ul>
     </div>
 )

 };

 
 
   
      
 export default Result;
