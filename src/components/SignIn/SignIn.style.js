import styled from "styled-components";
import { flex } from "../../GlobalStyles";
import { InputWrapper } from "../Input/Input.style";

export const SignInSection = styled.section`
  ${flex({ justify: "center", align: "center" })}
  min-height: 55vh;
  flex-wrap: wrap;
  font-size: 1.5rem;
  margin: 4rem 0rem;
`;

export const SignInForm = styled.form`
  ${flex({ direction: "column", justify: "center", align: "flex-start" })}
  flex: 0 1 40rem;
  margin: 5rem;
  button {
    margin: 1rem 0rem;
  }
  .remind-password {
    text-decoration: underline;
  }
  .remind-password:hover {
    opacity: 0.5;
  }
  ${InputWrapper} {
    margin-bottom: 2rem;
  }
  ${InputWrapper} input {
    width: 50rem;
  }
  @media screen and (max-width: 990px) {
    ${InputWrapper} input {
      width: 80vw;
    }
  }
  @media screen and (max-width: 515px) {
    align-items: center;
    margin: 5rem;
  }
`;
