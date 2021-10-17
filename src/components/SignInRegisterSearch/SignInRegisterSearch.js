import React, { useRef, useState } from "react";
import NavItem from "../NavItem/NavItem";
import { UlContainer } from "./SignInRegisterSearch.style";
import Cookies from "js-cookie";
import { useLoginContext } from "../../context/LoginContext";

export default React.memo(function SignInRegisterSearch({
  setShowMenu,
  showMenu,
  setShowSerch,
  searchRef,
}) {
  const [isUserLoggedIn, updateUserStatus] = useLoginContext();

  const handleShowMenu = () => setShowMenu((prev) => !prev);

  const logOut = async () => {
    handleShowMenu();
    //logout from the server
    await fetch("http://localhost:3002/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    updateUserStatus(false);
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
  if (isUserLoggedIn) {
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
});
