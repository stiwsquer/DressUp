import styled from "styled-components";

export const StyledCardSwatches = styled.div`
  align-self: center;
  margin: 0.5rem;
  display: flex;
  .radio input[type="radio"] {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1rem;
    opacity: 0;
    cursor: pointer;
  }

  .radio input[type="radio"] + .radio-label span {
    margin: 1rem;
    content: "";
    background: grey;
    border-radius: 100%;
    border: 0.1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    position: relative;
    top: -1rem;
    margin-right: 1rem;
    vertical-align: top;

    text-align: center;
    pointer-events: none;
    transition: all 0.25s ease;
  }

  .radio input[type="radio"]:checked + .radio-label span,
  .radio input[type="radio"]:focus + .radio-label span,
  .radio input[type="radio"]:hover + .radio-label span {
    border: 0.3px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1rem rgba(255, 0, 0, 0.7);
  }
  .radio input[type="radio"]:disabled + .radio-label span {
    box-shadow: inset 0 0 0 4px red;
    border-color: darken(red, 25%);
    background: darken(red, 25%);
  }
  .radio input[type="radio"] + .radio-label:empty span {
    margin-right: 0;
  }
`;
