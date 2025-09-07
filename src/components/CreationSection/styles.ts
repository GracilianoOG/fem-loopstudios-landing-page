import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { backgroundSlideEffect } from "../../styles/effects.styled";

export const CreationSectionStyled = styled.section`
  padding: 6rem var(--page-gutter) 4.6875rem;
  position: relative;

  ${mediaQueries.laptop} {
    padding-top: 11.25rem;
  }
`;

export const HeadingContainerStyled = styled.div`
  margin-bottom: 2.625rem;

  ${mediaQueries.laptop} {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4.6875rem;
  }
`;

export const MainHeadingStyled = styled.h2`
  text-align: center;
  font-size: 2rem;

  ${mediaQueries.laptop} {
    font-size: 3rem;
  }
`;

export const CardsContainerStyled = styled.ul`
  display: grid;
  gap: 1.5rem;

  ${mediaQueries.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mediaQueries.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${mediaQueries.largeDesktop} {
    gap: 1.875rem;
  }
`;

export const MoreLinkStyled = styled.a`
  border: 0.125rem solid var(--color-black);
  bottom: 0px;
  color: black;
  font-size: 0.875rem;
  font-family: var(--font-secondary);
  font-weight: 300;
  letter-spacing: 0.3125rem;
  left: 50%;
  margin: 0 auto;
  padding: 0.625rem;
  position: absolute;
  transform: translateX(-50%);
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  width: min(100%, 10rem);

  ${mediaQueries.laptop} {
    inset: auto;
    margin: 0;
    position: relative;
    transform: none;

    &:focus-visible,
    &:hover {
      color: var(--color-white);
    }

    ${backgroundSlideEffect};
  }
`;
