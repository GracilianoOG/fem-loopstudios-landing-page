import styled, { css } from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const LogoStyled = styled.img<{ $small?: boolean }>`
  display: block;
  width: 9.0625rem;
  z-index: 2;

  ${mediaQueries.laptop} {
    ${({ $small }) =>
      !$small &&
      css`
        width: 12.0625rem;
      `}
`;
