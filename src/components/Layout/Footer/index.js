import React from 'react';
import { FormattedMessage } from 'react-intl';

import './Footer.scss';

const Footer = () => (
  <footer className='Footer'>
    <div>
      <h4>Leon Weber</h4>
      <span>Osterbekstr. 12</span>
      <span>DE-24367 Osterby</span>
    </div>
    <div>
      <h4>
        <FormattedMessage id="Footer__CallToAction" defaultMessage="Einfach mal anrufen." />
      </h4>
      <span>
        <a href="tel:004917644244633">+49 (0)176 442 446 33</a>
      </span>
      <span>
        <a href="mailto:lw.leonweber@gmail.com">lw.leonweber@gmail.com</a>
      </span>
    </div>
  </footer>
);

export default Footer;
