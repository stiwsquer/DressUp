/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useLayoutEffect, useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { UlContainer } from './SignInRegisterSearch.style';
import { verifyToken } from '../../context/LoginContext';

export default React.memo(
  ({ setShowMenu, showMenu, setShowSerch, searchRef }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleShowMenu = () => setShowMenu((prev) => !prev);

    useLayoutEffect(() => {
      (async () => {
        setLoggedIn(await verifyToken());
      })();
    }, []);

    const logOut = async () => {
      handleShowMenu();
      // logout from the server
      await fetch('http://localhost:3001/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
    };

    const searchBox = (
      <li
        onClick={() => {
          setShowMenu(!showMenu);
          setShowSerch((prev) => !prev);
        }}
        ref={searchRef}
      >
        <NavItem linkTo="#" iconClass="fas fa-search" text="Search" />
      </li>
    );

    let menu;
    if (loggedIn) {
      menu = (
        <>
          <li onClick={logOut}>
            <NavItem linkTo="/signIn" text="Log out" />
          </li>
          <li className="vertical-line">|</li>
          {searchBox}
        </>
      );
    } else {
      menu = (
        <>
          <li onClick={handleShowMenu}>
            <NavItem
              linkTo="/signIn"
              iconClass="fas fa-sign-in-alt"
              text="Sign in"
            />
          </li>
          <li className="vertical-line">|</li>
          <li onClick={handleShowMenu}>
            <NavItem linkTo="/register" text="Register" />
          </li>
          <li className="vertical-line">|</li>

          {searchBox}
        </>
      );
    }

    return <UlContainer showMenu={showMenu}>{menu}</UlContainer>;
  },
);
