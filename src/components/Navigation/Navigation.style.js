import styled, { keyframes } from "styled-components";
import { flex } from "../../GlobalStyles";

const logoAnimation = keyframes`
  0% {
    transform: translateX(-50%) translateY(-200%);
  }
  100% {
    transform: translateX(-50%) translateY(35%);
  }
  
`;

export const NavLinks = styled.nav`
  min-height: 15vh;
  position: relative;
  width: 95%;
  margin: auto;
  ${flex({ justify: "space-between", align: "center" })};
  li,
  .cart {
    font-size: 1.6rem;
    margin: 2rem 1rem;
    text-align: center;
    white-space: nowrap;
    list-style: none;
  }

  li a,
  .cart a {
    transition: all 0.4s ease-in-out;
    transform: scale(1);
  }
  li a:hover,
  .cart a:hover {
    transform: scale(1.2);
    padding: 1rem;
    border-radius: 1.5rem;
    background: rgba(20, 20, 20, 1);
    color: white;
    font-weight: 900;
  }

  .logo {
    font-size: 6rem;
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translateX(-50%) translateY(30%);
    transform: translateX(-50%) translateY(-200%);
    animation: ${logoAnimation} 1s ease-in-out 0.5s forwards;
  }

  @media screen and (max-width: 1000px) {
    .logo a {
      font-size: 2.5rem;
    }
  }
`;

export const Burger = styled.span`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    font-size: 2rem;
    font-size: 1.6rem;
    z-index: 2;
  }
`;
