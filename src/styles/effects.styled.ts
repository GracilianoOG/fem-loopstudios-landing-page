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

export const backgroundSlideEffect = css`
  overflow: hidden;

  &:hover::before {
    --scale-value: 1;
    transform-origin: left;
  }

  &::before {
    --scale-value: 0;
    background-color: var(--color-black);
    content: "";
    height: 140%;
    left: 50%;
    position: absolute;
    top: 50%;
    transition: transform 0.4s;
    transform: skewX(-30deg) translate(-60%, -50%) scaleX(var(--scale-value));
    transform-origin: right;
    width: 140%;
    z-index: -1;
  }
`;

export const overlayEffect = css`
  position: relative;

  &::before {
    content: "";
    display: block;
    inset: 0;
    position: absolute;
  }

  &:hover::before {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;
