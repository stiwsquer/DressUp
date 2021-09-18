import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const CustomCarousel = styled(Carousel)`
  .rec.rec-arrow {
    background: transparent !important;
    border: none !important;
    border-radius: 50% !important;
    box-shadow: none !important;
    font-size: 3rem !important;
    font-weight: 200 !important;
  }

  .rec.rec-arrow.rec-arrow-right:hover,
  .rec.rec-arrow.rec-arrow-left:hover {
    background: transparent !important;
    border: none !important;
    border-radius: 50% !important;
    box-shadow: 0rem 1rem 1rem rgba($color: #000000, $alpha: 0.2) !important;
    color: #000000 !important;
    font-size: 3rem !important;
  }

  .rec.rec-arrow.rec-arrow-left:focus,
  .rec.rec-arrow.rec-arrow-right:focus {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
    color: black !important;
  }

  .rec.rec-arrow.rec-arrow-left:focus:hover,
  .rec.rec-arrow.rec-arrow-right:focus:hover {
    box-shadow: 0rem 1rem 1rem rgba($color: #000000, $alpha: 0.2) !important;
  }

  .rec-arrow.eRmJbc:disabled {
    cursor: context-menu !important;
  }

  .gQIqMI {
    box-shadow: none !important;
    border: 0.1px solid black !important;
    width: 2rem !important;
    height: 2rem !important;
  }
  .gQIqMI:hover {
    cursor: pointer;
    background-color: rgba($color: #000000, $alpha: 0.2) !important;
    box-shadow: none !important;
    border: 0.1px solid black !important;
    width: 2rem !important;
    height: 2rem !important;
  }
  .rec.rec-dot.rec-dot_active {
    background-color: rgba($color: #000000, $alpha: 1) !important;
    box-shadow: none !important;
    border: 0.1px solid black !important;
    width: 2rem !important;
    height: 2rem !important;
  }
`;

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
