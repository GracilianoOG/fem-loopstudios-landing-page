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
