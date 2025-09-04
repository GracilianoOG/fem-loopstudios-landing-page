import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  padding: 40px var(--page-gutter) 0;
  top: 0px;
  z-index: 1;

  @media screen and (min-width: 992px) {
    padding-top: 64px;
  }
`;
