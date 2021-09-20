import styled from "styled-components";
import { flex } from "../../GlobalStyles";

export const SelectWrapper = styled.div`
  ${flex({ direction: "column", align: "flex-start" })};

  label {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  select {
    padding: 1rem;
    height: 4rem;
    background: white;
    outline: none;
    border: 0.1rem solid rgba($color: #000000, $alpha: 0.7);
    width: 30vw;
    font-size: 1.5rem;
  }
`;
