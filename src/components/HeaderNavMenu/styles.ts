import styled, { css } from "styled-components";
import {
  navListDefault,
  navListDesktopDefault,
  NavListStyled,
} from "../../styles/nav.styled";
import { mediaQueries, mediaQueriesMax } from "../../utils/mediaQueries";

export const HeaderNavMenuStyled = styled.nav<{ $hidden: boolean }>`
  ${mediaQueriesMax.laptop} {
    height: 100vh;
    inset: 0;
    position: absolute;
    transition: left 0.25s, opacity 0.2s, visibility 0.25s;
    visibility: visible;
    width: 100%;

    ${({ $hidden }) =>
      $hidden &&
      css`
        left: 100%;
        opacity: 0;
        visibility: hidden;
      `}
  }

  ${mediaQueries.laptop} {
    display: initial;
  }
`;

export const HeaderListStyled = styled(NavListStyled)`
  ${mediaQueriesMax.laptop} {
    align-items: start;
    background-color: black;
    font-size: 1.5rem;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    height: 100%;
    justify-content: center;
    padding-left: var(--page-gutter);
    text-transform: uppercase;
    width: 100%;
  }

  ${mediaQueries.laptop} {
    ${navListDefault};
    ${navListDesktopDefault};
  }
`;
