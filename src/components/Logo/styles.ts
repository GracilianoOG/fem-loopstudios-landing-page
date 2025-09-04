import styled, { css } from "styled-components";

export const LogoStyled = styled.img<{ $small?: boolean }>`
  display: block;
  width: 145px;

  @media screen and (min-width: 992px) {
    ${({ $small }) =>
      !$small &&
      css`
        width: 193px;
      `}
`;
