import styled from "styled-components";
import type { BackgroundImageType } from "./props";
import { mediaQueries } from "../../utils/mediaQueries";
import { overlayEffect } from "../../styles/effects.styled";

export const CardStyled = styled.li<{ $bgImage: BackgroundImageType }>`
  --bg-image-url: url(${({ $bgImage }) => $bgImage[0]});
  --gradient-position: to right;
  --gradient-color-1: rgba(0, 0, 0, 0.55);
  --gradient-color-2: transparent;
  --gradient: linear-gradient(
    var(--gradient-position),
    var(--gradient-color-1) 10%,
    var(--gradient-color-2) 70%
  );

  background-image: var(--gradient), var(--bg-image-url);
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--color-white);
  height: clamp(7.5rem, 30vw, 10.625rem);
  position: relative;
  width: 100%;

  ${mediaQueries.mobile} {
    height: max(7.5rem, 20vw);
  }

  ${mediaQueries.laptop} {
    --bg-image-url: url(${({ $bgImage }) => $bgImage[1]});
    --gradient-position: to top;
    height: 28.125rem;

    &:focus-within,
    &:hover {
      color: var(--color-black);
    }

    ${overlayEffect};
  }
`;

export const CardTitleStyled = styled.h3`
  font-size: clamp(1.5rem, 2.6vw, 2rem);
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  line-height: 1;

  ${mediaQueries.largeDesktop} {
    bottom: 2rem;
    left: 2.5rem;
  }
`;

export const CardLinkStyled = styled.a`
  color: inherit;
  display: block;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 1;
`;
