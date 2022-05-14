
import Result from "../Result/result";
import React from 'react';


const Results = (props) => {
    let list = props.results.map((item)=> {
        return <Result 
        name={item.name}
        population={item.population}/>
    });
    
  




    return (
        <>
            {list}
        </>
    )

};

export default Results;