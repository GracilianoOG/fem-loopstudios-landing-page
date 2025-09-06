import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const InteractiveSectionStyled = styled.section`
  padding: 96px var(--page-gutter) 0;

  img {
    width: 100%;
  }

  ${mediaQueries.laptop} {
    position: relative;
    padding-top: 160px;

    img {
      max-width: 730px;
      width: 100%;
    }
  }
`;

export const TextBoxStyled = styled.div`
  margin-top: 48px;
  text-align: center;

  ${mediaQueries.laptop} {
    background-color: var(--color-white);
    bottom: 0;
    max-width: 542px;
    margin: 0;
    position: absolute;
    padding: 45px 0 0 48px;
    right: var(--page-gutter);
    text-align: left;
  }

  ${mediaQueries.desktop} {
    padding: 60px 0 0 65px;
  }

  ${mediaQueries.largeDesktop} {
    padding: 93px 0 0 96px;
  }
`;

export const MainHeadingStyled = styled.h2`
  text-align: center;
  font-size: 32px;
  line-height: 1;

  ${mediaQueries.laptop} {
    font-size: 38px;
    text-align: left;
  }

  ${mediaQueries.desktop} {
    font-size: 48px;
    text-align: left;
  }
`;

export const StudioDescriptionStyled = styled.p`
  color: var(--color-grey);
  font-family: "Alata", sans-serif;
  font-size: 15.3px;
  line-height: 1.62;
  margin-top: 16px;
  padding: 0 16px;

  ${mediaQueries.laptop} {
    margin-top: 25px;
    padding: 0;
  }
`;
