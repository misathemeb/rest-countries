import React, { useEffect, useState } from 'react';
import Search from '../Search/search';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/searchBar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


 const Navigation = () => {
    const [id, type] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
  //   const [token, setToken] = useState('');

  // useEffect(() => {
  //       // You need to restrict it at some point
  //       // This is just dummy code and should be replaced by actual
  //       if (!token) {
  //           getToken();
  //       }
  //     }, []);

      const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
      }

      const handleClose = () => {
        setAnchorEl(null);
      }
   
 
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
              

              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Filter by Region
              </Button>
              <Menu
                id="basic-menu"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}><Link to='/region/africa'>Africa</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/region/america'>America</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/region/asia'>Asia</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/region/europe'>Europe</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/region/oceania'>Oceania</Link></MenuItem>
              </Menu>
            </nav>
          </>
        );
      };
    

export default Navigation;