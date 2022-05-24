
import React, { useEffect, useState } from 'react';
import {getCountries} from '../api/countryFinder';
import { useParams } from 'react-router-dom';
import initialCountries from '../data/initialCountries';
import './singleCountry.css'



const SingleCountry = () => {
    const { countryUrl } = useParams();

    let singleCountry = initialCountries.find((item) =>  {  
       return countryUrl === item.url
    });

    const { id, name, population, region, subregion, capital, topleveldomain, currencies, languages, bordercountries } = singleCountry;

console.log(singleCountry)
   return (
        <div className='card-wrapper'><img src="https://images.unsplash.com/photo-1562884328-39da45501a9c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071"></img>
           
            <article className='country-facts-container'>
                <h1 className='country-title'>{id}</h1>
                <ul className='country-list-facts'>
                    <li className='country-list-fact'><b>Native Name:</b> {name}</li>
                    <li className='country-list-fact'><b>Population:</b> {population}</li>
                    <li className='country-list-fact'><b>Region:</b> {region}</li>
                    <li className='country-list-fact'><b>Sub Region:</b> {subregion}</li>
                    <li className='country-list-fact'><b>Capital:</b> {capital}</li>
                    <li className='country-list-fact'><b>Top Level Domain:</b> {topleveldomain}</li>
                    <li className='country-list-fact'><b>Currencies:</b> {currencies}</li>
                    <li className='country-list-fact'><b>Languages:</b> {languages}</li>
                    <li className='country-list-fact'><b>Border Countries:</b> {bordercountries}</li>
                </ul>
            </article>
        </div>
       
   )
            
    };

export default SingleCountry;