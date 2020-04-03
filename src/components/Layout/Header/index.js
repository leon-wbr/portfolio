import React from 'react';
import { Link } from 'gatsby';

import './Header.scss';

const Header = ({ langKey }) => (
  <header className="Header">
    <h1><Link to="/">Leon Weber</Link></h1>
  </header>
)

export default Header
