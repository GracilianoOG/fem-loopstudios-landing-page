import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const FooterStyled = styled.footer`
  background-color: var(--color-black);
  display: flex;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  margin-top: 95px;
  padding: 56px var(--page-gutter);

  ${mediaQueries.laptop} {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 44px;
    margin-top: 109px;
  }
`;

export const IconList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 16px;

  ${mediaQueries.laptop} {
    justify-content: end;
  }
`;

export const FooterText = styled.p`
  font-family: "Alata", sans-serif;
  font-size: 15.5px;
  margin-top: 18px;
  color: var(--color-grey);

  ${mediaQueries.laptop} {
    font-size: 15.6px;
    margin-top: 26px;
  }
`;
