import React, { useEffect, useState } from 'react';
import Search from '../Search/search';
import { Link } from 'react-router-dom';


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
          <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/africa'>Africa</Link>
            <Link to='/america'>America</Link>
            <Link to='/asia'>Asia</Link>
            <Link to='/europe'>Europe</Link>
            <Link to='/oceania'>Oceania</Link>
          </nav>
        );
      };
    

export default Navigation;