import styled from "styled-components";
import { flex } from "../../GlobalStyles";
import Button from "../Button/Button";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Modal = styled.div`
  @media screen and (max-width: 1300px) {
    width: 90vw;
  }
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 900px;
  width: 1200px;
  z-index: 1000;
  overflow-y: scroll;

  ${flex({ direction: "row", justify: "center", align: "center" })}
  flex-wrap: wrap;
`;

export const Description = styled.div`
  flex: 1 1 20rem;
  height: 100%;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;
    margin: 2rem 0rem;
  }
  ${flex({
    direction: "column",
    justify: "space-between",
    align: "flex-start",
  })}
`;

export const Slider = styled.div`
  flex: 1 1 20rem;
  margin-right: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ModalCloseButton = styled(Button)`
  position: fixed;
  top: 0;
  right: 0;
  color: rgb(133, 129, 129);
  background-color: white;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  ${flex({
    direction: "row",
    justify: "space-between",
    align: "space-between",
  })}
  flex-wrap: wrap;
  width: 95%;
  margin: 2rem auto;
  height: 80%;
`;

export const Adjust = styled.div`
  form {
    ${flex({
      direction: "column",
      justify: "space-around",
      align: "flex-start",
    })}
    flex-wrap: wrap;
    border: 0.2rem solid rgba(0, 0, 0, 0.2);
    width: 100%;

    flex: 1 1 20rem;

    font-weight: 900;
    padding: 2rem;

    span {
      margin: 1rem 0rem;
      button {
        background-color: white;
        color: black;
        border: 0.1rem solid rgba(0, 0, 0, 0.2);
        width: 15rem;
        &:focus {
          border: 0.3rem solid pink;
        }
      }
    }
    .quantity {
      margin-bottom: 4rem;
      span {
        padding: 1rem 2rem;
        font-size: 2rem;
        border: 0.1rem solid black;
        @media screen and (max-width: 930px) {
          font-size: 1.3rem;
          padding: 0.5rem 1rem;
        }
      }
      button {
        width: 4rem;
      }
    }
  }
`;
