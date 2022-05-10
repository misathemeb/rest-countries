import featureCountry from './pages/feature/featureCountry';
import countryList from './pages/home/countryList';
import { Route, Routes, useHistory } from 'react-router-dom';
import Home from './components/Home/home';
import Navigation from './components/Nav/nav';
import Search from './components/Search/search';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  return (
    
    <main>
      <Routes>
        <Route 
          path='/search'
          element={
          <Search countries={countries} setCountries={setCountries}/>
          }

        />

        <Route path='/:type?'
          element={<Home/>}
        />

      </Routes>
      </main>

   
  );
}

export default App;