import React from "react";
import Layout from "./components/Layout/Layout";
import { SearchContextProvider } from "./context/SearchContext";
import { GlobalStyles } from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <SearchContextProvider>
        <Layout />
      </SearchContextProvider>
    </>
  );
}

export default App;
