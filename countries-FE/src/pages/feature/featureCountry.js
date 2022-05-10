
import React, { useEffect, useState } from 'react';
import { getCountries } from '../../api/countryFinder';
import Home from '../../components/Home/home';
import { useParams, Redirect } from 'react-router-dom';

const featureCountry = () => {
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
        <Home />
        
            <span className="country-label">{type ? `${type}s` : `${id}`}</span>{' '}

        {data.length ? (
            <div className="grid">
            {data.map((id) => (
                <featureCountry
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
                </featureCountry> // changed from a tag to Link
            ))}
            </div>
        ) : (
            <p className="prompt">No {id} by that name.</p>
        )}
        </div>
    );
    };

    export default featureCountry;