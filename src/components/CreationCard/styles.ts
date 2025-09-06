import styled from "styled-components";
import type { BackgroundImageType } from "./props";
import { mediaQueries } from "../../utils/mediaQueries";
import { overlayEffect } from "../../styles/effects.styled";

export const CardStyled = styled.li<{ $bgImage: BackgroundImageType }>`
  --bg-image-url: url(${({ $bgImage }) => $bgImage[0]});

  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.55) 10%,
      transparent 70%
    ),
    var(--bg-image-url);
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--color-white);
  cursor: pointer;
  height: clamp(120px, 30vw, 170px);
  position: relative;
  width: 100%;

  ${overlayEffect};

  &:hover {
    color: var(--color-black);
  }

  ${mediaQueries.mobile} {
    height: max(120px, 20vw);
  }

  ${mediaQueries.laptop} {
    --bg-image-url: url(${({ $bgImage }) => $bgImage[1]});
    height: 450px;
  }
`;

export const CardTitleStyled = styled.h3`
  font-size: clamp(24px, 2.6vw, 32px);
  position: absolute;
  bottom: 20px;
  left: 20px;
  // max-width: 110px;
  line-height: 1;

  ${mediaQueries.largeDesktop} {
    bottom: 32px;
    left: 40px;
  }
`;

export const CardLinkStyled = styled.a`
  color: inherit;
  display: block;
  height: 100%;
  width: 100%;
`;
