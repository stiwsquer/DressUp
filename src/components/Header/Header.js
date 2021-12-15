import React from 'react';
import Navigation from '../Navigation/NavigationV2';

import { Sections } from './Header.style';

export default React.memo(() => (
  <header className="main-head">
    <Navigation />

    <Sections />
  </header>
));
