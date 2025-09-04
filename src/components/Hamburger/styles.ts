import styled from "styled-components";

export const HamburgerStyled = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;
