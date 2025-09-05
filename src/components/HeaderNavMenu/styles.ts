import styled, { css } from "styled-components";
import {
  navListDefault,
  navListDesktopDefault,
  NavListStyled,
} from "../../styles/NavStyled";
import { mediaQueries, mediaQueriesMax } from "../../utils/mediaQueries";

export const HeaderNavMenuStyled = styled.nav<{ $hidden: boolean }>`
  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}

  ${mediaQueriesMax.laptop} {
    height: 100vh;
    inset: 0;
    position: absolute;
    width: 100%;
  }

  ${mediaQueries.laptop} {
    display: initial;
  }
`;

export const HeaderListStyled = styled(NavListStyled)`
  ${mediaQueriesMax.laptop} {
    align-items: start;
    background-color: black;
    font-size: 24px;
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
