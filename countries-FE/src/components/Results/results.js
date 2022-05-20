
import Result from "../Result/result";
import React from 'react';
import CardWrap from "../CardWrap/ cardWrap";
import './results.css';


const Results = (props) => {
    let list = props.results.map((item)=> {
        return <Result 
        id={item.id}
        name={item.name}
        population={item.population}
        region={item.region}
        capital={item.capital}
        subregion={item.subregion}/>
    });
    
  




    return (
        <div className="results-wrap">
            <CardWrap />

            {list}
        </div>
    )

};

export default Results;