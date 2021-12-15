import React from 'react';
import { Link } from 'react-router-dom';

export default React.memo(({ linkTo, iconClass, text }) => (
  <Link to={linkTo}>
    <i className={iconClass} />
    {iconClass && ' '}
    {text}
  </Link>
));
