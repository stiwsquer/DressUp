import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../Card/Card';
import { ProductsSection, ProductsTitle } from './HomeProducts.style';

export default React.memo(() => {
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
      let res = await fetch('/products.json');
      res = await res.json();
      const cardList = res.map((card) => (
        <Card
          key={card.images.src}
          linkTo="#"
          title={card.title}
          text={card.text}
          imagesSources={card.images}
          imgAlt={card.imgAlt}
        />
      ));
      setCards(cardList);
      return cardList;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  useEffect(getProducts, []);

  return (
    <ProductsSection>
      <ProductsTitle>
        <span className="horizontal-line" />
        <h2>NEW PRODUCTS</h2>
        <span className="horizontal-line" />
      </ProductsTitle>

      <Carousel breakPoints={breakPoints}>{cards}</Carousel>
    </ProductsSection>
  );
});
