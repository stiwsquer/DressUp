import React, { useState, createContext, useContext } from "react";
import useCookie from "../hooks/useCookie/useCookie";
import Cookies from "js-cookie";

const LoginContext = createContext();

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export const LoginContextProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function updateUserStatus(isUserLoggedIn) {
    // if (
    //   Cookies.get("access_token") != undefined &&
    //   Cookies.get("refresh_token") != undefined
    // ) {
    setIsUserLoggedIn(isUserLoggedIn);
    // } else {
    // setIsUserLoggedIn(false);
    // }
  }

  return (
    <LoginContext.Provider value={[isUserLoggedIn, updateUserStatus]}>
      {children}
    </LoginContext.Provider>
  );
};
