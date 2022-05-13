
import React from 'react';
import { Link } from 'react-router-dom';
import initialCountries from '../data/initialCountries';


const Region = () => {
  return (
    <section className='section'>
      <div className='region'>
        {/* {region.map((countries) => {
          return (
            <article key={region.id}>
              <h5>{SingleCountry.name}</h5>
              <Link to={`/region/${region.id}`}>more info</Link>
            </article>
          );
        })} */}
      </div>
    </section>
  );
};

export default Region;