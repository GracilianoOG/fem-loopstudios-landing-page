import { css } from "styled-components";

export const bottomUnderlineEffect = css`
  display: block;
  position: relative;

  &::before {
    --line-scale: 0;
    background-color: var(--color-white);
    bottom: -0.625rem;
    content: "";
    height: 0.125rem;
    left: 0;
    margin: 0 auto;
    right: 0;
    position: absolute;
    transition: transform 0.4s;
    transform: scaleX(var(--line-scale));
    transform-origin: center;
    width: 1.5rem;
  }

  &:hover::before {
    --line-scale: 1;
  }
`;
