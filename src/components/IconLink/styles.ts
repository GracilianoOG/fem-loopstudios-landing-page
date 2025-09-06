import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { bottomUnderlineEffect } from "../../styles/effects.styled";

export const IconLinkStyled = styled.a`
  ${mediaQueries.laptop} {
    ${bottomUnderlineEffect};
  }
`;
