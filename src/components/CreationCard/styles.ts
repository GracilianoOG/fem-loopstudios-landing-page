import styled from "styled-components";
import type { BackgroundImageType } from "./props";

export const CardStyled = styled.div<{ $bgImage: BackgroundImageType }>`
  background-image: url(${({ $bgImage }) => $bgImage[0]});
  background-repeat: no-repeat;
  background-size: cover;
  height: 120px;
  position: relative;
  width: 100%;
`;

export const CardTitleStyled = styled.h3`
  font-size: 24px;
  color: white;
  position: absolute;
  bottom: 20px;
  left: 20px;
  // max-width: 110px;
  line-height: 1;
`;
