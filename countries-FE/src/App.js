
import Error from './pages/Error';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Search from './components/Search/search';
import './App.css';
import React, {useState} from 'react';
import Title from './components/Title/title';

function App() {
  
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />}>
          <Route index element={<Title />} />
        
          {/* <Route path='/:countryId' element={<SingleCountry />} /> */}
          <Route path=':region' element={<Search />} />
      
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;