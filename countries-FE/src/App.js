
import Error from './pages/Error';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Search from './components/Search/search';
import './App.css';
import React, {useState} from 'react';

function App() {
  
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />}>
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