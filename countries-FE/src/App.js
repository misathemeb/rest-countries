import SingleCountry from './pages/SingleCountry';
import SharedLayout from './pages/SharedLayout';
import Error from './pages/Error';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Nav/nav';
import Search from './components/Search/search';
import SharedCountriesLayout from './pages/SharedCountriesLayout';
import './App.css';
import React, {useState} from 'react';

function App() {
  
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Search />} />
        
          {/* <Route path='/:countryId' element={<SingleCountry />} /> */}
          <Route path=':region' element={<Search />} />
      
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;