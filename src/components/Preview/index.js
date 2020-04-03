import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Icon from 'components/Icon';

import './Preview.scss';

const Preview = ({ frontmatter: { path, thumbnail, innerThumb, title, description, icon, logo }, fields: { slug } }) => (
  <div
    className='ProjectPreview'
  >
    <Link to={slug}></Link>
    {icon && (
      <Icon
        name={icon}
        attrs={{ height: 48, width: 48, 'stroke-width': '1px' }}
        className={`ProjectPreview__Icon ProjectPreview__Icon--${icon}`}
      />
    )}
    <div className="ProjectPreview__Mask" />
    {title && <div className="ProjectPreview__Title"><h2>{title}</h2></div>}
    {thumbnail && (
      <Img
        className="ProjectPreview__Thumbnail"
        {...thumbnail.childImageSharp}
        objectFit="cover"
      />
    )}
    {false && thumbnail && <div className="ProjectPreview__Thumbnail" style={{ backgroundImage: thumbnail ? `url(${thumbnail.childImageSharp ? thumbnail.childImageSharp.fluid.src : thumbnail})` : '' }} />}
  </div>
);

export default Preview;
