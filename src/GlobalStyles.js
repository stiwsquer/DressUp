import styled, { createGlobalStyle } from "styled-components";
import Karla200 from "./static/fonts/karla/Karla-ExtraLight.ttf";
import Karla300 from "./static/fonts/karla/Karla-Light.ttf";
import Karla400 from "./static/fonts/karla/Karla-Regular.ttf";
import Karla800 from "./static/fonts/karla/Karla-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Karla-200";
  src: url(${Karla200});
}

@font-face {
  font-family: "Karla-400";
  src: url(${Karla400});
}

@font-face {
  font-family: "Karla-300";
  src: url(${Karla300});
}

@font-face {
  font-family: "Karla-800";
  src: url(${Karla800});
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Karla-300", sans-serif;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}
body {
  animation: opening 1s ease-in-out;
}

a {
  text-decoration: none;
  color: black;
}

a,
p {
  font-family: "Karla-300", sans-serif;
}
h1,
h2,
h3 {
  font-family: "Karla-400", sans-serif;
}

h1 {
  font-size: $header1;
}

.fas {
  cursor: pointer;
}



@keyframes opening {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

nav {
  @include flex(row, space-between, center);
  width: 95%;
  margin: auto;

  li {
    list-style: none;
  }
}



.rec.rec-arrow {
    background: transparent;
    border: none;
    border-radius: 50%;
    box-shadow: none;
    font-size: 3rem;
    font-weight: 200;
  }

  .rec.rec-arrow.rec-arrow-right:hover,
  .rec.rec-arrow.rec-arrow-left:hover {
    background: transparent;
    border: none;
    border-radius: 50%;
    box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.2);
    color: #000000;
    font-size: 3rem;
  }

  .rec.rec-arrow.rec-arrow-left:focus,
  .rec.rec-arrow.rec-arrow-right:focus {
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: black;
  }

  .rec.rec-arrow.rec-arrow-left:focus:hover,
  .rec.rec-arrow.rec-arrow-right:focus:hover {
    box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.2);
  }

  .rec.rec-arrow.rec-arrow-left:disabled,
  .rec.rec-arrow.rec-arrow-right:disabled {
    cursor: context-menu;
  }

  .rec.rec-dot {
    box-shadow: none;
    border: 0.1px solid black;
    width: 2rem;
    height: 2rem;
  }
  .rec.rec-dot:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: none;
    border: 0.1px solid black;
    width: 2rem;
    height: 2rem;
  }
  .rec.rec-dot.rec-dot_active {
    background-color: rgba(0, 0, 0, 1);
    box-shadow: none;
    border: 0.1px solid black;
    width: 2rem;
    height: 2rem;
  }
`;

export const flex = ({
  direction = "row",
  justify = "stretch",
  align = "stretch",
}) => `
    display: flex;
    flex-direction:${direction} ;
    justify-content: ${justify};
    align-items: ${align};
`;
