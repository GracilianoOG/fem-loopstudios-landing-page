import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const HamburgerStyled = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;

  ${mediaQueries.laptop} {
    display: none;
  }
`;
