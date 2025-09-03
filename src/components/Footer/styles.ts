import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: var(--color-black);
  display: flex;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  margin-top: 95px;
  padding: 56px var(--page-gutter);

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 44px;
  }
`;

export const IconList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 992px) {
    justify-content: end;
  }
`;

export const FooterText = styled.p`
  font-family: "Alata", sans-serif;
  font-size: 15.5px;
  margin-top: 18px;
  color: var(--color-grey);

  @media screen and (min-width: 992px) {
    font-size: 15.6px;
    margin-top: 26px;
  }
`;
