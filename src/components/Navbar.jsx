import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
  ];

  return (
    <nav>
      <ul className="navbar-ul">
        {links.map((link) => (
          <li className="d-flex" key={link.id}>
            <NavLink className="btn btn-light" to={link.path} />
            <img src="apple.svg" alt="apple logo" />
            <h1>Financial Statements</h1>
            <img src="mic-fill.svg" alt="microphone" />
            <img src="gear-fill.svg" alt="gear" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
