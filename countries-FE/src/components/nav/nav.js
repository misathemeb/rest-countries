import React, { useEffect, useState } from 'react';
import Search from '../Search/search';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/searchBar';


 const Navigation = () => {
    const [id, type] = useState([]);
  
  //   const [token, setToken] = useState('');

  // useEffect(() => {
  //       // You need to restrict it at some point
  //       // This is just dummy code and should be replaced by actual
  //       if (!token) {
  //           getToken();
  //       }
  //     }, []);
   
 
      const getToken = async () => {
        const headers = {
          Authorization: id.Token // using Cognito authorizer
        };
        const response = await response .post(
          "https://restcountries.com/v3.1/all",  
          { headers }
        );
        const data = await response.json();
        // setToken(data.access_token);
      };
  
    
        return (
          <> 
          <nav className='nav'>
            <label for='touch'><Link to='/'></Link><span className='span-nav'>Filter by Region</span></label>
            <input type='checkbox' id='touch'></input>

            <ul className='slide'>
              <li className='dropdown'><Link to='/region/africa'>Africa</Link></li>
            
              <li className='dropdown'><Link to='/region/america'>America</Link></li>
              
              <li className='dropdown'><Link to='/region/asia'>Asia</Link></li>
            
              <li className='dropdown'><Link to='/region/europe'>Europe</Link></li>
            
              <li className='dropdown'><Link to='/region/oceania'>Oceania</Link></li>
            </ul>
          </nav>
          </>
        );
      };
    

export default Navigation;