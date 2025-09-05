import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const CreationSectionStyled = styled.section`
  padding: 96px var(--page-gutter) 75px;
  position: relative;

  ${mediaQueries.laptop} {
    padding-top: 180px;
  }
`;

export const HeadingContainerStyled = styled.div`
  margin-bottom: 42px;

  ${mediaQueries.laptop} {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 75px;
  }
`;

export const MainHeadingStyled = styled.h2`
  text-align: center;
  font-size: 32px;

  ${mediaQueries.laptop} {
    font-size: 48px;
  }
`;

export const CardsContainerStyled = styled.div`
  display: grid;
  gap: 24px;

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
    gap: 30px;
  }
`;

export const MoreLinkStyled = styled.a`
  border: 2px solid black;
  bottom: 0px;
  color: black;
  font-size: 14px;
  font-family: "Alata", sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
  left: 50%;
  margin: 0 auto;
  padding: 10px 38px;
  position: absolute;
  transform: translateX(-50%);
  text-transform: uppercase;
  text-decoration: none;

  ${mediaQueries.laptop} {
    margin: 0;
    position: static;
    transform: none;
  }
`;
