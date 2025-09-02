import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    text-transform: uppercase;
  }
`;

export default GlobalStyles;
