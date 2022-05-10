import React, { useEffect, useState } from 'react';
import Search from '../Search/search';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    const [id, type] = useState([]);
  
  
      const [token, setToken] = useState('');

      useEffect(() => {
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        if (!token) {
            getToken();
        }
      }, []);
    
      const getToken = async () => {
        const headers = {
          Authorization: id.Token // using Cognito authorizer
        };
        const response = await response .post(
          "https://restcountries.com/v3.1/all",  
          { headers }
        );
        const data = await response.json();
        setToken(data.access_token);
      };
  
    return (
      <nav>
        <div className="nav">
          <h1>Filter By Region alt=dropdown menu </h1>
          <Search />
        </div>
        <ul className="drop-down-links">
          <li key="all">
            {/* This link should have an activeClassName and exact prop */}
            <NavLink 
              exact to="/"
              activeClassName="nav-link-active"
              className="nav-link"
            >
              
          </NavLink>
          </li>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
          {getToken 
            ? id.map((type) => (
                <li key={type.name}>
                  {/* These links should have an activeClassName prop */}
                  <NavLink
                    to={`/${type._links.self.href.split('/').pop()}`}
                    key={type.name}
                    activeClassName="nav-link-active"
                    className="nav-link"
                  >
                    {id.name}s
                  </NavLink>{' '}
                </li>
              ))
            : 'Loading...'}
        </ul>
      </nav>
    );
  };
  
  export default Navigation;