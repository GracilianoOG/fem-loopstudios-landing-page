import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: hsl(0, 0%, 0%);
    --color-grey: hsl(0, 0%, 50%);
    --color-light-grey: hsl(0, 0%, 85%);
    --color-white: hsl(0, 0%, 100%);

    --page-gutter: 23px;

    @media screen and (min-width: 992px) {
      --page-gutter: 164px;
    }
  }

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
