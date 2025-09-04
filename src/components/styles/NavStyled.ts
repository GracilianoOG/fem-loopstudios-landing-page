import styled, { css } from "styled-components";

const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;

const navListDefault = css`
  font-family: "Alata", sans-serif;
  font-size: 15px;
  list-style: none;
  text-align: center;
`;

const navListDesktopDefault = css`
  flex-direction: row;
  gap: 34px;
`;

export const NavItemStyled = styled.li``;

export const NavLinkStyled = styled.a`
  color: white;
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
`;

export const HeaderNavMenuStyled = styled.nav`
  @media screen and (max-width: 991px) {
    height: 100vh;
    inset: 0;
    position: absolute;
    width: 100%;
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

export const FooterListStyled = styled(NavListStyled)`
  ${navListDefault};
  margin-top: 34px;

  @media screen and (min-width: 992px) {
    ${navListDesktopDefault};
    margin-top: 26px;
  }
`;
