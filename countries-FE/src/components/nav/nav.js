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
            <Link to='/'>Filter by Region</Link>
            <br></br>
            <Link to='/region/africa'>Africa</Link>
            <br></br>
            <Link to='/region/america'>America</Link>
            <br></br>
            <Link to='/region/asia'>Asia</Link>
            <br></br>
            <Link to='/region/europe'>Europe</Link>
            <br></br>
            <Link to='/region/oceania'>Oceania</Link>
          </nav>
          </>
        );
      };
    

export default Navigation;