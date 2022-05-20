
import React from "react";
import './result.css';

 const Result = (props) => {
    const {id, name, population, region, capital, subregion} = props;


 return (
     <div className="single-result">
        <h2>{id}</h2>
        <ul>
            <li>Native Name:{name}</li>
            <li>Population:{population}</li>
            <li>Region:{region}</li>
            <li>Capital:{capital}</li>
            <li>Subregion:{subregion}</li>
        </ul>
     </div>
 )

 };

 
 
   
      
 export default Result;
