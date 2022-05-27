
import React from "react";
import './result.css';
import { Link } from "react-router-dom";


 const Result = (props) => {
    const {id, name, population, region, capital, subregion, url} = props.countryData;
    const composedUrl = `country/${url}`;
console.log(props)
 return (
     <div className="result"><Link to={composedUrl}>
        <h2>{id}</h2>
        <ul className="country-facts">
            <li className="country-fact"><span className="country-fact-label">Native Name:</span>{name}</li>
            <li className="country-fact"><span className="country-fact-label">Population:</span>{population}</li>
            <li className="country-fact"><span className="country-fact-label">Region:</span>{region}</li>
            <li className="country-fact"><span className="country-fact-label">Capital:</span>{capital}</li>
            <li className="country-fact"><span className="country-fact-label">Subregion:</span>{subregion}</li>
        </ul>
        </Link>
     </div>
 )

 };

 
 
   
      
 export default Result;
