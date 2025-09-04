import styled, { css } from "styled-components";

export const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;

export const navListDefault = css`
  font-family: "Alata", sans-serif;
  font-size: 15px;
  list-style: none;
  text-align: center;
`;

export const navListDesktopDefault = css`
  flex-direction: row;
  gap: 34px;
`;

export const FooterListStyled = styled(NavListStyled)`
  ${navListDefault};
  margin-top: 34px;

  @media screen and (min-width: 992px) {
    ${navListDesktopDefault};
    margin-top: 26px;
  }
`;
