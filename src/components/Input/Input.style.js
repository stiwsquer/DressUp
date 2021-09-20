import styled from "styled-components";
import { flex } from "../../GlobalStyles";

export const InputWrapper = styled.div`
  ${flex({ direction: "column", align: "flex-start" })};

  label {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  input {
    outline: none;
    border: 0.1rem solid rgba($color: #000000, $alpha: 0.7);
    padding: 1rem;
    width: 30vw;
    height: 4rem;
    font-size: 1.5rem;
  }
`;
