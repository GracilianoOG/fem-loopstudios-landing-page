import styled from "styled-components";
import {
  navListDefault,
  navListDesktopDefault,
  NavListStyled,
} from "../../styles/NavStyled";

export const FooterListStyled = styled(NavListStyled)`
  ${navListDefault};
  margin-top: 34px;

  @media screen and (min-width: 992px) {
    ${navListDesktopDefault};
    margin-top: 26px;
  }
`;
