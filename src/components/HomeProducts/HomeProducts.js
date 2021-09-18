import React, { useEffect, useMemo, useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import "./style.scss";
import Card from "../Card/Card";
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
      let products = await fetch("/products.json");
      let json = await products.json();
      const cards = json.map((card, index) => {
        return (
          <Card
            key={index}
            linkTo="#"
            title={card[0].title}
            text={card[0].text}
            imagesSources={card}
          ></Card>
        );
      });
      setCards(cards);
      return cards;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(getProducts, []);

  return (
    <section className="home-products">
      <div className="products-title">
        <span className="horizontal-line"></span>
        <h2>NEW PRODUCTS</h2>
        <span className="horizontal-line"></span>
      </div>

      <div className="cards">
        <Carousel breakPoints={breakPoints}>{cards}</Carousel>
      </div>
    </section>
  );
});
