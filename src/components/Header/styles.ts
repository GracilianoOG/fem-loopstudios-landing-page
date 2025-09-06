import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const HeaderStyled = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 40px var(--page-gutter) 0;
  top: 0px;
  width: 100%;
  z-index: 1;

  ${mediaQueries.laptop} {
    padding-top: 64px;
  }
`;
