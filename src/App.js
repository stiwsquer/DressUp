import React from "react";
import Layout from "./components/Layout/Layout";
import { SearchContextProvider } from "./context/SearchContext";

function App() {
  return (
    <>
      <SearchContextProvider>
        <Layout />
      </SearchContextProvider>
    </>
  );
}

export default App;
