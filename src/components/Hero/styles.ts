import styled from "styled-components";
import heroImgMobile from "../../assets/images/mobile/image-hero.jpg";
import heroImgDesktop from "../../assets/images/desktop/image-hero.jpg";
import { mediaQueries } from "../../utils/mediaQueries";

export const HeroStyled = styled.section`
  background-image: url(${heroImgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: min(100vh, 40.625rem);
  padding: var(--page-gutter);
  position: relative;

  ${mediaQueries.laptop} {
    background-image: url(${heroImgDesktop});
  }
`;

export const HeroTextStyled = styled.h2`
  border: 0.125rem solid var(--color-white);
  color: var(--color-white);
  font-family: var(--font-primary);
  font-weight: 300;
  font-size: 2.5rem;
  padding: 1rem;
  position: relative;
  top: 50%;
  line-height: 1;
  padding: 1.125rem 1.4375rem;
  transform: translateY(-50%);
  text-transform: uppercase;
  width: 100%;

  ${mediaQueries.tablet} {
    font-size: 3rem;
    max-width: 24.5rem;
  }

  ${mediaQueries.laptop} {
    font-size: 4.5rem;
    max-width: 40.75rem;
    padding: 1.875rem 2.5rem;
    top: 62%;
  }
`;
