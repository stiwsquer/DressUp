import React from "react";
import { useSearchContext } from "../../context/SearchContext";
import Navigation from "../Navigation/NavigationV2";

import { Sections } from "./Header.style";

export default React.memo(function Header() {
  return (
    <header className="main-head">
      <Navigation />

      <Sections></Sections>
    </header>
  );
});
