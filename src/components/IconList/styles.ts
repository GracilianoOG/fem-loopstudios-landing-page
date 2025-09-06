import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const IconListStyled = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 1rem;

  ${mediaQueries.laptop} {
    justify-content: end;
  }
`;
