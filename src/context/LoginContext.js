import React, { useState, createContext, useContext } from "react";

const LoginContext = createContext();

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export const LoginContextProvider = ({ children }) => {
  const [accesToken, setAccesToken] = useState();
  const [refreshToken, setRefreshToken] = useState();

  return (
    <LoginContext.Provider
      value={[accesToken, setAccesToken, refreshToken, setRefreshToken]}
    >
      {children}
    </LoginContext.Provider>
  );
};
