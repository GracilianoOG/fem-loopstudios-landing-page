import styled from "styled-components";
import heroImgMobile from "../../assets/images/mobile/image-hero.jpg";
import heroImgDesktop from "../../assets/images/desktop/image-hero.jpg";

export const HeroStyled = styled.section`
  background-image: url(${heroImgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: min(100vh, 650px);
  padding: var(--page-gutter);
  position: relative;

  @media screen and (min-width: 992px) {
    background-image: url(${heroImgDesktop});
  }
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

  @media screen and (min-width: 992px) {
    font-size: 72px;
    max-width: 652px;
    padding: 30px 40px;
    top: 62%;
  }
`;
