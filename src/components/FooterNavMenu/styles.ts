import styled from "styled-components";
import {
  navListDefault,
  navListDesktopDefault,
  NavListStyled,
} from "../../styles/nav.styled";
import { mediaQueries } from "../../utils/mediaQueries";

export const FooterListStyled = styled(NavListStyled)`
  ${navListDefault};
  margin-top: 2.125rem;

  ${mediaQueries.tablet} {
    flex-direction: row;
  }

  ${mediaQueries.laptop} {
    ${navListDesktopDefault};
    margin-top: 1.625rem;
  }
`;
