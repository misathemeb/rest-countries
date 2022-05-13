

import { Outlet } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <>
      <h2>countries</h2>
      <Outlet />
    </>
  );
};
export default Home;