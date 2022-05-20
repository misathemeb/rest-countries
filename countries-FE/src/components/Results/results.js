
import Result from "../Result/result";
import React from 'react';
import CardWrap from "../CardWrap/ cardWrap";


const Results = (props) => {
    let list = props.results.map((item)=> {
        return <Result 
        name={item.name}
        population={item.population}/>
    });
    
  




    return (
        <>
            <CardWrap />

            {list}
        </>
    )

};

export default Results;