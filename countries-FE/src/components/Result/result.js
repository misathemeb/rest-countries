
import React from "react";
import './result.css';

 const Result = (props) => {
    const {id, name, population, region, capital, subregion} = props;


 return (
     <div className="result">
        <h2>{id}</h2>
        <ul className="country-facts">
            <li className="country-fact"><span className="country-fact-label">Native Name:</span>{name}</li>
            <li className="country-fact"><span className="country-fact-label">Population:</span>{population}</li>
            <li className="country-fact"><span className="country-fact-label">Region:</span>{region}</li>
            <li className="country-fact"><span className="country-fact-label">Capital:</span>{capital}</li>
            <li className="country-fact"><span className="country-fact-label">Subregion:</span>{subregion}</li>
        </ul>
     </div>
 )

 };

 
 
   
      
 export default Result;
