import styled, { css } from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const LogoStyled = styled.img<{ $small?: boolean }>`
  display: block;
  width: 145px;
  z-index: 2;

  ${mediaQueries.laptop} {
    ${({ $small }) =>
      !$small &&
      css`
        width: 193px;
      `}
`;
