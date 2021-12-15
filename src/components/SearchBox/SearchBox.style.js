import styled from 'styled-components';
import { flex } from '../../GlobalStyles';

export const SearchBoxWrapper = styled.div`
  ${flex({ align: 'center', justify: 'center' })};
  position: absolute;
  left: 0;
  top: 20vh;
  width: 100vw;
  min-height: 15vh;
  background: white;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);

  input {
    text-align: center;
    font-size: 1.8rem;
    padding: 1rem 1rem;
    width: 60rem;
    margin: 2rem;
    outline: none;
    border: 0.1rem solid black;
  }
`;
export default SearchBoxWrapper;
