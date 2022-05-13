import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/search'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Search
      </NavLink>
      <NavLink
        to='/region'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Region
      </NavLink>
    </nav>
  );
};
export default Navbar;