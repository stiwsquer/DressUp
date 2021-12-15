import styled from 'styled-components';
import { flex } from '../../GlobalStyles';
import { InputWrapper } from '../Input/Input.style';

export const NewsLetterFormWrapper = styled.form`
  ${flex({ justify: 'space-between', align: 'center' })};

  min-height: 10vh;
  width: 95%;
  margin: auto;
  flex-wrap: wrap;
  h4 {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  p {
    font-size: 1.5rem;
    margin-top: 2rem;
    text-align: center;
  }

  div {
    ${flex({ justify: 'center', align: 'center' })};
  }
  input {
    margin: 2rem 0rem;
  }

  button {
    letter-spacing: 0.2rem;
    padding: 1rem 5rem;
    border: 0.1rem solid rgba(0, 0, 0, 1);
    margin: 0;
    height: 4rem;
  }

  @media screen and (max-width: 678px) {
    div {
      flex-wrap: wrap;
      input,
      button {
        flex: 1 0 20rem;
      }

      button {
        margin-bottom: 2rem;
      }
    }

    ${InputWrapper} input {
      width: 90vw;
    }
  }

  @media screen and (max-width: 1378px) {
    ${flex({ direction: 'column', justify: 'space-between', align: 'center' })};
  }
`;
export default NewsLetterFormWrapper;
