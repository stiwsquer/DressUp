import React, { useEffect, useMemo, useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "../Card/Card";
import { ProductsSection, ProductsTitle } from "./HomeProducts.style";

export default React.memo(function HomeProducts() {
  const [cards, setCards] = useState([]);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
    { width: 2100, itemsToShow: 6 },
    { width: 3000, itemsToShow: 7 },
    { width: 3500, itemsToShow: 8 },
  ];

  const getProducts = async () => {
    try {
      let res = await fetch("/products.json");
      res = await res.json();
      const cards = res.map((card, index) => (
        <Card
          key={index}
          linkTo="#"
          title={card.title}
          text={card.text}
          imagesSources={card.images}
          imgAlt={card.imgAlt}
        ></Card>
      ));
      setCards(cards);
      return cards;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(getProducts, []);

  return (
    <ProductsSection>
      <ProductsTitle>
        <span className="horizontal-line"></span>
        <h2>NEW PRODUCTS</h2>
        <span className="horizontal-line"></span>
      </ProductsTitle>

      <Carousel breakPoints={breakPoints}>{cards}</Carousel>
    </ProductsSection>
  );
});
