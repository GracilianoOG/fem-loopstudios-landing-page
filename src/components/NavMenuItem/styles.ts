import styled from "styled-components";
import { bottomUnderlineEffect } from "../../styles/effects.styled";
import { mediaQueries } from "../../utils/mediaQueries";

export const NavItemStyled = styled.li``;

export const NavLinkStyled = styled.a`
  color: var(--color-white);
  font-family: inherit;
  font-size: inherit;

  ${mediaQueries.laptop} {
    ${bottomUnderlineEffect};
  }
`;
