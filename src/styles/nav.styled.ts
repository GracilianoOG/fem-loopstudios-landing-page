import styled, { css } from "styled-components";

export const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  list-style: none;
`;

export const navListDefault = css`
  font-family: "Alata", sans-serif;
  font-size: 0.9375rem;
  list-style: none;
  text-align: center;
`;

export const navListDesktopDefault = css`
  flex-direction: row;
  gap: 2.125rem;
`;
