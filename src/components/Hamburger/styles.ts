import styled, { css, keyframes } from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

const clickAnim = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const HamburgerStyled = styled.button<{ $animate: boolean }>`
  border: none;
  background-color: transparent;
  z-index: 2;

  ${mediaQueries.laptop} {
    display: none;
  }

  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${clickAnim} 0.2s;
    `}
`;
