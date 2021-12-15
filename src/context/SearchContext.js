import React, { useState, createContext, useContext } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchContextProvider = ({ children }) => {
  const [input, setInput] = useState('');

  const setSearchInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <SearchContext.Provider value={[input, setSearchInput]}>
      {children}
    </SearchContext.Provider>
  );
};
