import styled from "styled-components";
import { CreationSectionStyled, MainHeadingStyled } from "./styles";
import CreationCard from "../CreationCard";

export const CardsContainerStyled = styled.div`
  display: grid;
  gap: 24px;
`;

const CreationSection = () => {
  return (
    <CreationSectionStyled>
      <MainHeadingStyled>Our creations</MainHeadingStyled>
      <CardsContainerStyled>
        <CreationCard>Deep earth</CreationCard>
        <CreationCard>Night arcade</CreationCard>
        <CreationCard>Soccer team VR</CreationCard>
        <CreationCard>The grid</CreationCard>
        <CreationCard>From up above VR</CreationCard>
        <CreationCard>Pocket borealis</CreationCard>
        <CreationCard>The curiosity</CreationCard>
        <CreationCard>Make it fisheye</CreationCard>
      </CardsContainerStyled>
    </CreationSectionStyled>
  );
};

export default CreationSection;
