
import Result from "../Result/result";
import React from 'react';

import './results.css';


const Results = (props) => {
    let list = props.results.map((item) => {
        return <Result 
        key={item.id}
        id={item.id}
        countryData = {item}
        />
    });
    
  




    return (
        <div className="results-wrap">

            {list}
        </div>
    )

};

export default Results;