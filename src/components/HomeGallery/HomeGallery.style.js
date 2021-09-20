import styled from "styled-components";
import { flex } from "../../GlobalStyles";

export const HomeGallerySection = styled.section`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(3, 1fr);
  width: 95%;
  margin: auto;

  p {
    margin: 0rem 6rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .gallery1 {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  .gallery2 {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  .gallery3 {
    grid-column: 3/4;
    grid-row: 1/2;
  }
  .gallery-new-shoes {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  .gallery-accessories {
    grid-column: 3/4;
    grid-row: 2/3;
  }

  .gallery-accessories,
  .gallery-new-shoes {
    ${flex({ direction: "column", justify: "center", align: "center" })}
    text-align: center;
    font-size: 1.5rem;
  }
  .gallery-accessories h2,
  .gallery-new-shoes h2 {
    margin: 2rem;
    letter-spacing: 0.2rem;
  }

  button {
    margin-top: 2rem;
  }

  @media screen and (max-width: 900px) {
    img,
    div {
      grid-row: auto;
      grid-column: auto;
    }
    p {
      margin: 1rem;
    }
    .gallery1 {
      display: none;
    }
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
`;
