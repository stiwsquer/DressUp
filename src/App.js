import React from "react";
import Layout from "./components/Layout/Layout";
import { SearchContextProvider } from "./context/SearchContext";
import { LoginContextProvider } from "./context/LoginContext";
import { GlobalStyles } from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <LoginContextProvider>
        <SearchContextProvider>
          <Layout />
        </SearchContextProvider>
      </LoginContextProvider>
    </>
  );
}

export default App;
