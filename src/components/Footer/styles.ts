import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const FooterStyled = styled.footer`
  background-color: var(--color-black);
  display: flex;
  align-items: center;
  gap: 3.125rem;
  flex-direction: column;
  margin-top: 5.9375rem;
  padding: 3.5rem var(--page-gutter);

  ${mediaQueries.laptop} {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2.75rem;
    margin-top: 6.8125rem;
  }
`;

export const FooterLeftBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries.laptop} {
    align-items: start;
  }
`;

export const FooterText = styled.p`
  font-family: var(--font-secondary);
  font-size: 0.9688rem;
  margin-top: 1.125rem;
  color: var(--color-grey);

  ${mediaQueries.laptop} {
    font-size: 0.975rem;
    margin-top: 1.625rem;
  }
`;
