import styled from "styled-components";

export const InteractiveSectionStyled = styled.section`
  padding: 96px var(--page-gutter) 0;

  img {
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    position: relative;

    img {
      max-width: 730px;
      width: 100%;
    }
  }
`;

export const TextBoxStyled = styled.div`
  margin-top: 48px;
  text-align: center;

  @media screen and (min-width: 992px) {
    background-color: var(--color-white);
    bottom: 0;
    max-width: 542px;
    margin: 0;
    position: absolute;
    padding: 93px 0 0 96px;
    right: var(--page-gutter);
    text-align: left;
  }
`;

export const MainHeadingStyled = styled.h2`
  text-align: center;
  font-size: 32px;
  line-height: 1;

  @media screen and (min-width: 992px) {
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

  @media screen and (min-width: 992px) {
    margin-top: 25px;
    padding: 0;
  }
`;
