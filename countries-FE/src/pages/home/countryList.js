import React, { useEffect, useState } from 'react';
import { getCountries } from '../../api/countryFinder'; 
import Home from '../home/countryList';
import { useParams } from 'react-router-dom';

const HomePage = () => {
  const [data, setData] = useState(null);
  const {type, id} = useParams(); // updated var from empty string to destructured obj and hook

  useEffect(() => {
    async function getHomePageData() {
      const homePageData = await getHomePageData(data);
      setData(homePageData);
    }

    getHomePageData();
  }, [type]);

  if (!data) {
    return <h2>Loading...</h2>;
  }
}

  

export default HomePage;