import styled, { css } from "styled-components";
import {
  navListDefault,
  navListDesktopDefault,
  NavListStyled,
} from "../styles/NavStyled";

export const HeaderNavMenuStyled = styled.nav<{ $hidden: boolean }>`
  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}

  @media screen and (max-width: 991px) {
    height: 100vh;
    inset: 0;
    position: absolute;
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    display: initial;
  }
`;

export const HeaderListStyled = styled(NavListStyled)`
  @media screen and (max-width: 991px) {
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

  @media screen and (min-width: 992px) {
    ${navListDefault};
    ${navListDesktopDefault};
  }
`;
