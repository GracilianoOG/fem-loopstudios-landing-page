import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const InteractiveSectionStyled = styled.section`
  padding: 6rem var(--page-gutter) 0;

  img {
    width: 100%;
  }

  ${mediaQueries.laptop} {
    position: relative;
    padding-top: 10rem;

    img {
      max-width: 45.625rem;
      width: 100%;
    }
  }
`;

export const TextBoxStyled = styled.div`
  margin-top: 3rem;
  text-align: center;

  ${mediaQueries.laptop} {
    background-color: var(--color-white);
    bottom: 0;
    max-width: 33.875rem;
    margin: 0;
    position: absolute;
    padding: 2.8125rem 0 0 3rem;
    right: var(--page-gutter);
    text-align: left;
  }

  ${mediaQueries.desktop} {
    padding: 3.75rem 0 0 4.0625rem;
  }

  ${mediaQueries.largeDesktop} {
    padding: 5.8125rem 0 0 6rem;
  }
`;

export const MainHeadingStyled = styled.h2`
  text-align: center;
  font-size: 2rem;
  line-height: 1;

  ${mediaQueries.laptop} {
    font-size: 2.375rem;
    text-align: left;
  }

  ${mediaQueries.desktop} {
    font-size: 3rem;
    text-align: left;
  }
`;

export const StudioDescriptionStyled = styled.p`
  color: var(--color-grey);
  font-family: var(--font-secondary);
  font-size: 0.9563rem;
  line-height: 1.62;
  margin-top: 1rem;
  padding: 0 1rem;

  ${mediaQueries.laptop} {
    margin-top: 1.5625rem;
    padding: 0;
  }
`;
