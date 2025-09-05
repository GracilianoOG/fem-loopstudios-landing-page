import styled from "styled-components";
import {
  navListDefault,
  navListDesktopDefault,
  NavListStyled,
} from "../../styles/NavStyled";
import { mediaQueries } from "../../utils/mediaQueries";

export const FooterListStyled = styled(NavListStyled)`
  ${navListDefault};
  margin-top: 34px;

  ${mediaQueries.laptop} {
    ${navListDesktopDefault};
    margin-top: 26px;
  }
`;
