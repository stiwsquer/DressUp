import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const CustomCarousel = styled(Carousel)``;

export const ProductsSection = styled.section`
  min-height: 0vh;
  width: 95%;
  margin: 5rem 2.5%;
  margin-top: 10rem;
`;

export const ProductsTitle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  h2 {
    flex: 1 1 auto;
    font-size: 2rem;
    letter-spacing: 0.5rem;
    opacity: 0.8;
  }
  span {
    flex: 6 1 auto;
    height: 1px;
    opacity: 0.2;
    background: black;
  }
`;
