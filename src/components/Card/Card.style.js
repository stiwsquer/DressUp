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

export const CardBody = styled.div``;

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

export const CardSwatches = styled.div`
  align-self: center;
  margin: 0.5rem;
  display: flex;
  .radio {
    input[type="radio"] {
      position: absolute;
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 1rem;
      opacity: 0;
      cursor: pointer;
      + .radio-label {
        span {
          margin: 1rem;
          content: "";
          background: grey;
          border-radius: 100%;
          border: 0.1px solid rgba($color: #000000, $alpha: 0.3);
          display: inline-block;
          width: 2.5rem;
          height: 2.5rem;
          position: relative;
          top: -1rem;
          margin-right: 1rem;
          vertical-align: top;

          text-align: center;
          pointer-events: none;
          transition: all 0.25s ease;
        }
      }
      &:checked {
        + .radio-label {
          span {
            border: 0.3px solid rgba($color: black, $alpha: 0.5);
            box-shadow: 0 0 1rem rgba($color: red, $alpha: 0.6);
          }
        }
      }
      &:focus {
        + .radio-label {
          span {
            border: 0.3px solid rgba($color: black, $alpha: 0.5);
            box-shadow: 0 0 1rem rgba($color: red, $alpha: 0.6);
          }
        }
      }
      &:disabled {
        + .radio-label {
          span {
            box-shadow: inset 0 0 0 4px red;
            border-color: darken(red, 25%);
            background: darken(red, 25%);
          }
        }
      }
      + .radio-label {
        &:empty {
          span {
            margin-right: 0;
          }
        }
      }
    }
  }
`;
