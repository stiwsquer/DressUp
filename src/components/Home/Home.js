import React from "react";
// import "./style.scss";
import { HomeIntro } from "./Home.style";

import HomeDescription from "../HomeDescription/HomeDescription";
import HomeGallery from "../HomeGallery/HomeGallery";
import HomeProducts from "../HomeProducts/HomeProducts";

export default React.memo(function Home() {
  return (
    <>
      <HomeIntro />
      <HomeDescription />
      <HomeGallery />
      <HomeProducts />
    </>
  );
});
