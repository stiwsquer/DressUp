import styled from "styled-components";
import { flex } from "../../GlobalStyles";

export const FooterSection = styled.footer`
  background: #202020;

  color: white;
`;

export const FooterWrapper = styled.div`
  min-height: 15vh;
  width: 95%;
  margin: auto;
  font-size: 2.5rem;

  ${flex({ justify: "space-between", align: "center" })}
  flex-wrap: wrap;

  h1 {
    flex: 2 1 40rem;
    margin: 2rem 0rem;
  }

  ul {
    flex: 1 2 40rem;
    ${flex({ justify: "space-around", align: "center" })}
    list-style: none;
  }

  a {
    color: white;
  }

  .social-media {
    color: white;
    font-size: 3rem;
    opacity: 0.5;
    margin: 2rem;
    &:hover {
      color: #f8bb99;
    }
  }

  @media screen and (max-width: 850px) {
    h1 {
      text-align: center;
    }
  }
`;
