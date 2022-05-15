
import React, { useEffect, useState } from 'react';
import {getCountries} from '../api/countryFinder';
import { useParams } from 'react-router-dom';
import Search from '../components/Search/search';


const SingleCountry = () => {
    const [data, setData] = useState;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {type, id} = useParams(); //use hook instead of hard coding bc of API call

    useEffect(() => {
        async function getCountriesData() {
            try {
                const countriesData = await getCountriesData(data);
                setData(countriesData);
                setError(false);
            } catch (e) {
                setError(true);
            }
            setLoading(false)
        }
        getCountriesData();
    }, [id]);

    return (
        <div className="featurePage">
        <Search />
        
            <span className="country-label">{type ? `${type}s` : `${id}`}</span>{' '}

        {data.length ? (
            <div className="grid">
            {data.map((id) => (
                <SingleCountry
                key={id}
                to={`/${id.type.toLowerCase()}/${id}`}
                className="country"
                >
                <article>
                    <div className="country-flag-container">
                    {
                        <div>
                        className="flag-image"
                        src={}
                        alt=""
                        </div>
                    }
                    </div>
                        <h2>{id.name}</h2>
                        <p>population: {id.population}</p>
                        <p>region: {id.region}</p>
                        <p>capital: {id.capital}</p>
                </article>
                </SingleCountry> // changed from a tag to Link
            ))}
            </div>
        ) : (
            <p className="prompt">No {id} by that name.</p>
        )}
        </div>
    );
    };

    export default SingleCountry;