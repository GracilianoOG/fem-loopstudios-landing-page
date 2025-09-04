import styled from "styled-components";

export const HeaderStyled = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 40px var(--page-gutter) 0;
  top: 0px;
  width: 100%;
  z-index: 1;

  @media screen and (min-width: 992px) {
    padding-top: 64px;
  }
`;

export const HamburgerStyled = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
