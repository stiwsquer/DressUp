import styled from "styled-components";
import { flex } from "../../GlobalStyles";

export const HomeDescriptionSection = styled.section`
  min-height: 40vh;
  width: 95%;
  margin: auto;
  text-align: center;
  line-height: 3rem;

  ${flex({ direction: "column", justify: "center", align: "center" })}

  h2 {
    font-size: 2.5rem;
    margin: 4rem;
  }
  p {
    font-size: 1.5rem;
  }
  button {
    margin: 4rem;
  }
`;
