import styled from "styled-components";
import cardImg from "../../assets/images/mobile/image-deep-earth.jpg";

export const CardStyled = styled.div`
  background-image: url(${cardImg});
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
