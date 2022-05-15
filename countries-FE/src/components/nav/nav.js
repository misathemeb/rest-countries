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
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/africa'>Africa</Link>
            <br></br>
            <Link to='/america'>America</Link>
            <br></br>
            <Link to='/asia'>Asia</Link>
            <br></br>
            <Link to='/europe'>Europe</Link>
            <br></br>
            <Link to='/oceania'>Oceania</Link>
          </nav>
          <SearchBar />
          </>
        );
      };
    

export default Navigation;