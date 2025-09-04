import styled from "styled-components";
import heroImg from "../../assets/images/mobile/image-hero.jpg";

export const HeroStyled = styled.div`
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: min(100vh, 650px);
  padding: var(--page-gutter);
  position: relative;
`;

export const HeroTextStyled = styled.div`
  border: 2px solid white;
  color: white;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  font-size: 40px;
  padding: 16px;
  position: relative;
  top: 50%;
  line-height: 1;
  padding: 18px 23px;
  transform: translateY(-50%);
  text-transform: uppercase;
  width: 100%;
`;
