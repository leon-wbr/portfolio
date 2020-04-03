import React from 'react';
import PropTypes from "prop-types"

import Header from './Header';
import Footer from './Footer';

import "./Layout.scss"

const Layout = ({ children, className, noHeader, smallHeader, noFooter }) => (
  <div className={`Layout ${smallHeader ? 'Layout--smallHeader' : ''}`}>
    {!noHeader && <Header />}
    <main className={className}>{children}</main>
    {!noFooter && <Footer />}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noHeader: PropTypes.bool,
  noFooter: PropTypes.bool,
};

Layout.defaultProps = {
  noHeader: false,
  noFooter: false,
};

export default Layout
