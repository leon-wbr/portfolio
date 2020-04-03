import React from 'react';
import Feather from 'feather-icons';

import './Icon.scss';

const Icon = ({ name, attrs, className }) => {
  return (
    <div
      className={`Icon ${className ? className : ''}`}
      dangerouslySetInnerHTML={{ __html: Feather.icons[name].toSvg(attrs) }}
    />
  );
};

export default Icon;
