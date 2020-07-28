import React from 'react';
import LOGO from '../../assets/Logo.png';

import ButtonLink from '../ButtonLink';

import './style.css';

const Menu = () => (
  <nav className="Menu">
    <a href="/">
      <img className="Logo" src={LOGO} alt="Logo TechFlix" />
    </a>

    <ButtonLink
      className="ButtonLink"
      href="/"
    />
  </nav>
);
export default Menu;
