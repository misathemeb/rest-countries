
import Error from './pages/Error';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Search from './components/Search/search';
import './App.css';
import React, {useState} from 'react';
import Title from './components/Title/title';
import SingleCountry from './pages/SingleCountry';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search />} />  
          
          <Route path='country/:countryUrl' element={<SingleCountry />} />
          <Route path='/region/:region' element={<Search />} />
          <Route path='/search/:search' element={<Search />} /> 

          <Route path='*' element={<Error />} />
        
        </Routes>
      </BrowserRouter>
  );
}

export default App;