import styled from 'styled-components';
import { flex } from '../../GlobalStyles';
import InputWrapper from '../Input/Input.style';
import { SelectWrapper } from '../Select/Select.style';

export const RegisterSection = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: auto;
  font-size: 1.5rem;
  ${flex({ align: 'center', justify: 'center' })};

  ${InputWrapper},
  ${SelectWrapper} {
    margin-bottom: 2rem;
    padding: 0rem 1rem;
  }

  @media screen and (max-width: 800px) {
    ${InputWrapper} input,
    ${SelectWrapper} select {
      width: 80vw;
    }
  }
`;

export const RegisterForm = styled.form`
  ${flex({ direction: 'column', align: 'center', justify: 'center' })};
  margin-top: 10rem;
  margin-bottom: 5rem;
`;

export const FormWrapper = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  flex-wrap: wrap;
  margin: 1rem 0rem;
`;
