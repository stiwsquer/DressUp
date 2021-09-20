import styled from "styled-components";
import { flex } from "../../GlobalStyles";

export const UlContainer = styled.ul`
  flex: 0;
  ${flex({ justify: "space-between" })}
  a {
    transition: all 0.4s ease-in-out;
    translate: scale(1);
  }
  a:hover {
    translate: scale(1.2);
    padding: 1rem;
    border-radius: 1.5rem;
    background: rgba($color: #202020, $alpha: 1);
    // background: #161616;
    color: white;
    font-weight: 900;
  }

  .vertical-line {
    opacity: 0.3;
  }

  @media screen and (max-width: 1000px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 110vh;
    background: white;
    z-index: 1;
    ${flex({ direction: "column", justify: "center", align: "center" })}
    display: ${(props) => (props.showMenu ? "flex" : "none")};
    .vertical-line {
      display: none;
    }
    li {
      padding: 6rem;
      font-size: 2rem;
    }
  }
`;
