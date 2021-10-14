import React, { useEffect, useState } from "react";
// import "./style.scss";
import { HomeIntro } from "./Home.style";

import HomeDescription from "../HomeDescription/HomeDescription";
import HomeGallery from "../HomeGallery/HomeGallery";
import HomeProducts from "../HomeProducts/HomeProducts";
import { useLoginContext } from "../../context/LoginContext";

export default React.memo(function Home() {
  const accessToken = useLoginContext()[0];
  const [name, setName] = useState("");

  useEffect(() => {
    const res = (async () => {
      try {
        let res = await fetch("http://localhost:3000/posts", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
          credentials: "include",
        });

        res = await res.json();
        setName(res[0].username);
        console.log(`username: ${res[0].username}`);
        console.log(`Post title: ${res[0].title}`);
      } catch (e) {
        console.log(e);
      }
    })();
  });

  return (
    <>
      <h1>{name ? `Hi ${name}` : "You are not logged in"}</h1>
      <HomeIntro />
      <HomeDescription />
      <HomeGallery />
      <HomeProducts />
    </>
  );
});
