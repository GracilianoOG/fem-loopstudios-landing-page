import styled, { css } from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const HeaderStyled = styled.header<{ $scrolled: boolean }>`
  --time: 0.2s;
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 2.5rem var(--page-gutter) 2.5rem;
  top: 0;
  transition: background-color var(--time), backdrop-filter var(--time),
    padding var(--time);
  width: min(100%, var(--page-max-width));
  z-index: 3;

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      backdrop-filter: blur(2px);
      background-color: rgba(0, 0, 0, 0.8);
    `}

  ${mediaQueries.laptop} {
    padding-top: 4rem;

    ${({ $scrolled }) =>
      $scrolled &&
      css`
        padding: 3rem var(--page-gutter) 3rem;
      `}
  }
`;
