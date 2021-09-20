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
`;

export const Description = styled.div`
  flex: 1 1 40rem;
`;

export const Slider = styled.div`
  flex: 1 1 40rem;
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
