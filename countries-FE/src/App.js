import SingleCountry from './pages/feature/singleCountry';
import Region from './pages/Region';
import Error from './pages/Error';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/home';
import Navigation from './components/Nav/nav';
import Search from './components/Search/search';
import SharedCountriesLayout from './pages/SharedCountriesLayout';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='search' element={<Search />} />

          <Route path='countries' element={<SharedCountriesLayout />}>
            <Route index element={<Region />} />
            <Route path=':countryId' element={<SingleCountry />} />
          </Route>

          <Route path='nav' element={<Navigation />}>
          </Route>
       
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;