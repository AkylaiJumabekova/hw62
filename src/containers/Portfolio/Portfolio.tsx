import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1 className="main-title">Portfolio</h1>
      <ul>
        <li>
          <NavLink to="random-number-generator">Random Number Generator</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Portfolio;
