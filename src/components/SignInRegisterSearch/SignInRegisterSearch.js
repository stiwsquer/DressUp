import React from "react";
import { useLoginContext } from "../../context/LoginContext";
import NavItem from "../NavItem/NavItem";
import { UlContainer } from "./SignInRegisterSearch.style";

export default React.memo(function SignInRegisterSearch({
  setShowMenu,
  showMenu,
  setShowSerch,
  searchRef,
}) {
  const accessToken = useLoginContext()[0];
  const setAccessToken = useLoginContext()[1];

  const handleShowMenu = () => setShowMenu((prev) => !prev);

  const logOut = async () => {
    handleShowMenu();
    //logout from the server
    await fetch("http://localhost:4000/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        token: accessToken,
      }),
    });
    //set access token to null
    setAccessToken(null);
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
  if (accessToken) {
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
