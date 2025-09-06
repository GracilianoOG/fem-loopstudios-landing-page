import { createGlobalStyle } from "styled-components";
import { mediaQueries } from "../utils/mediaQueries";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: hsl(0, 0%, 0%);
    --color-grey: hsl(0, 0%, 50%);
    --color-light-grey: hsl(0, 0%, 85%);
    --color-white: hsl(0, 0%, 100%);

    --page-gutter: 23px;
    --page-max-width: 1440px;

    ${mediaQueries.tablet} {
      --page-gutter: 60px;
    }

    ${mediaQueries.laptop} {
      --page-gutter: 100px;
    }

    ${mediaQueries.desktop} {
      --page-gutter: 132px;
    }

    ${mediaQueries.largeDesktop} {
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

  #root {
    max-width: var(--page-max-width);
    margin: 0 auto;
    position: relative;
  }

  img {
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    text-transform: uppercase;
  }

  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyles;
