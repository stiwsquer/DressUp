import React, { useState, createContext, useContext } from 'react';

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

export const verifyToken = async () => {
  try {
    const res = await fetch('http://localhost:3002/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    return res.ok;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const LoginContextProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();

  async function updateUserStatus() {
    const res = await verifyToken();
    setIsUserLoggedIn(res);
  }

  return (
    <LoginContext.Provider value={[isUserLoggedIn, updateUserStatus]}>
      {children}
    </LoginContext.Provider>
  );
};

export const refreshTokenAndFetch = async (url, options) => {
  try {
    await fetch('http://localhost:3002/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    return await fetch(url, options);
  } catch (err) {
    console.log(err);
    return null;
  }
};
