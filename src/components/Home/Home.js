import React, { useEffect, useState } from "react";
// import "./style.scss";
import { HomeIntro } from "./Home.style";

import HomeDescription from "../HomeDescription/HomeDescription";
import HomeGallery from "../HomeGallery/HomeGallery";
import HomeProducts from "../HomeProducts/HomeProducts";
import Button from "../Button/Button";

export default React.memo(function Home() {
  const [name, setName] = useState("");

  const refreshToken = async () => {
    try {
      let res = await fetch("http://localhost:3002/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch("http://localhost:3001/user", {
          headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${accessToken}`,
          },
          credentials: "include",
        });

        res = await res.json();
        setName(res.map((user) => user.email));
        console.log(...res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  let button;
  if (name) {
    button = <Button onClick={refreshToken}>REFRESH ACCESS TOKEN</Button>;
  }

  return (
    <>
      {button}
      <h1>{name ? `Hi ${name}` : "You are not logged in"}</h1>
      <HomeIntro />
      <HomeDescription />
      <HomeGallery />
      <HomeProducts />
    </>
  );
});
