import styled from "styled-components";
import { flex } from "../../GlobalStyles";
import Button from "../Button/Button";

export const StyledCard = styled.div`
  ${flex({ direction: "column" })}
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  padding: 1rem;
`;

export const FigCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  min-height: 10%;
  display: none;
  background: white;
`;

export const CardFigure = styled.figure`
  position: relative;
  .card-image-normal {
    display: block;
  }

  .card-image-alt {
    display: none;
  }
  &:hover {
    .card-image-alt {
      display: block;
    }

    .card-image-normal {
      display: none;
    }

    ${FigCaption} {
      display: block;
      button {
        &::after {
          content: "QUICK VIEW";
        }

        &:hover {
          opacity: 0.5;
        }
        display: block;
      }
    }
  }
`;

export const CardButton = styled(Button)`
  background: transparent;
  color: black;
  letter-spacing: 0.1rem;
  font-weight: normal;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateY(-50%) translateX(50%);
  padding: 0.5rem 1.5rem;
  border: 0.1rem solid black;
`;

export const CardTitle = styled.h4`
  font-size: 1.5rem;
  font-family: "Karla-200", sans-serif;
  margin: 2rem 0rem;
  &:hover {
    opacity: 0.5;
  }
`;

export const CardText = styled.p`
  font-size: 1.5rem;
  font-family: "Karla-800", sans-serif;
`;
