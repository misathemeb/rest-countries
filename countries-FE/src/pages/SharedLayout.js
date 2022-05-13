import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import StyledNavbar from '../components/Nav/StyledNavbar';

const Home = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default Home;