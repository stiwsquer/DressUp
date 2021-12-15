import React, { useLayoutEffect, useState, useRef } from 'react';
import NavItem from '../NavItem/NavItem';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import SearchBox from '../SearchBox/SearchBox';
import SignInRegisterSearch from '../SignInRegisterSearch/SignInRegisterSearch';
import { NavLinks, Burger } from './Navigation.style';

export default React.memo(() => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSerch] = useState(false);
  const searchRef = useRef();

  const handleShowMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      <NavLinks>
        <Burger onClick={handleShowMenu}>
          <i
            style={{ position: showMenu ? 'fixed' : '' }}
            className={showMenu ? 'fas fa-times' : 'fas fa-bars'}
          />
        </Burger>
        <SignInRegisterSearch
          searchRef={searchRef}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          setShowSerch={setShowSerch}
          showSearch={showSearch}
        />

        <h1 className="logo">
          <NavItem linkTo="/" text="DressUp" />
        </h1>

        <div className="cart">
          <NavItem linkTo="#" iconClass="fas fa-shopping-cart" text="Cart" />
        </div>
      </NavLinks>
      {showSearch ? (
        <OutsideAlerter setShowElement={setShowSerch} searchRef={searchRef}>
          <SearchBox />
        </OutsideAlerter>
      ) : null}
    </>
  );
});
