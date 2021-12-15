import React from 'react';
import NavItem from '../NavItem/NavItem';
import { FooterSection, FooterWrapper } from './Footer.style';

export default React.memo(() => (
  <FooterSection>
    <FooterWrapper>
      <h1>
        <NavItem text="DressUp" linkTo="/" /> &copy;
      </h1>
      <ul>
        <li>
          <NavItem iconClass="fab fa-twitter social-media" linkTo="#" />
        </li>
        <li>
          <NavItem iconClass="fab fa-instagram social-media" linkTo="#" />
        </li>
        <li>
          <NavItem iconClass="fab fa-youtube social-media" linkTo="#" />
        </li>
      </ul>
    </FooterWrapper>
  </FooterSection>
));
