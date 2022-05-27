
import React, { useState } from 'react';
import Results from '../Results/results';
import initialCountries from '../../data/initialCountries';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header/header';
import SearchBar from '../SearchBar/searchBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const Search = () => {

  const [searchField, setSearchField] = useState(' ');
  const {region, search} = useParams();


  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#b5533f',
      },
      secondary: {
        main: '#f50057',
      },
    },
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            width: 300
          }
        }
      }
    }
  });
  

  let filteredList = initialCountries.filter((item) => {
    if (region){
      return region === item.region
    } else if (search){
         return item.name.toLowerCase().includes(search)
      
    } else {
         return true;
    }
    
});


   

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <SearchBar />
        <Results results={filteredList}/>
      </ThemeProvider>
    </>
  );
};

export default Search;