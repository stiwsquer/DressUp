import styled from "styled-components";

export const NewCustomerInfoInner = styled.div`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 515px) {
    text-align: center;
    width: 100vw;
  }
`;

export const NewCustomerInfoOuter = styled.div`
  flex: 0 1 40rem;
  padding: 3rem;

  margin-bottom: 3rem;
  button {
    margin: 2rem 0rem 0rem 0rem;
  }

  li {
    margin: 0.5rem 4rem;
  }
  h3 {
    margin: 2rem 0rem;
  }
  border: 0.1rem solid rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 515px) {
    border: none;
    margin: 0;
    padding: 0;
  }
`;
