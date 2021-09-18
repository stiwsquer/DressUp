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
`;

export const flex = ({ direction, justify, align }) => `
    display: flex;
    flex-direction:${direction || "row"} ;
    justify-content: ${justify || "stretch"};
    align-items: ${align || "stretch"};
`;
