import styled from "styled-components";
import type { BackgroundImageType } from "./props";

export const CardStyled = styled.div<{ $bgImage: BackgroundImageType }>`
  --bg-image-url: url(${({ $bgImage }) => $bgImage[0]});

  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.55) 10%,
      transparent 70%
    ),
    var(--bg-image-url);
  background-repeat: no-repeat;
  background-size: cover;
  height: 120px;
  position: relative;
  width: 100%;

  @media screen and (min-width: 992px) {
    --bg-image-url: url(${({ $bgImage }) => $bgImage[1]});
    height: 450px;
  }
`;

export const CardTitleStyled = styled.h3`
  font-size: 24px;
  color: white;
  position: absolute;
  bottom: 20px;
  left: 20px;
  // max-width: 110px;
  line-height: 1;

  @media screen and (min-width: 992px) {
    bottom: 32px;
    font-size: 32px;
    left: 40px;
  }
`;
