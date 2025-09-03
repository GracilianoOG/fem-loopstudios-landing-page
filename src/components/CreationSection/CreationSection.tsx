import styled from "styled-components";
import { CreationSectionStyled, MainHeadingStyled } from "./styles";
import CreationCard from "../CreationCard";
// Deep earth
import earthMobile from "../../assets/images/mobile/image-deep-earth.jpg";
import earthDesktop from "../../assets/images/desktop/image-deep-earth.jpg";
// Night arcade
import arcadeMobile from "../../assets/images/mobile/image-night-arcade.jpg";
import arcadeDesktop from "../../assets/images/desktop/image-night-arcade.jpg";
// Soccer team VR
import soccerMobile from "../../assets/images/mobile/image-soccer-team.jpg";
import soccerDesktop from "../../assets/images/desktop/image-soccer-team.jpg";
// The grid
import gridMobile from "../../assets/images/mobile/image-grid.jpg";
import gridDesktop from "../../assets/images/desktop/image-grid.jpg";
// From up above VR
import vrMobile from "../../assets/images/mobile/image-from-above.jpg";
import vrDesktop from "../../assets/images/desktop/image-from-above.jpg";
// Pocket borealis
import borealisMobile from "../../assets/images/mobile/image-pocket-borealis.jpg";
import borealisDesktop from "../../assets/images/desktop/image-pocket-borealis.jpg";
// The curiosity
import curiosityMobile from "../../assets/images/mobile/image-curiosity.jpg";
import curiosityDesktop from "../../assets/images/desktop/image-curiosity.jpg";
// Make it fisheye
import fishEyeMobile from "../../assets/images/mobile/image-fisheye.jpg";
import fishEyeDesktop from "../../assets/images/desktop/image-fisheye.jpg";

export const CardsContainerStyled = styled.div`
  display: grid;
  gap: 24px;
`;

const CreationSection = () => {
  return (
    <CreationSectionStyled>
      <MainHeadingStyled>Our creations</MainHeadingStyled>
      <CardsContainerStyled>
        <CreationCard bgImage={[earthMobile, earthDesktop]}>
          Deep earth
        </CreationCard>
        <CreationCard bgImage={[arcadeMobile, arcadeDesktop]}>
          Night arcade
        </CreationCard>
        <CreationCard bgImage={[soccerMobile, soccerDesktop]}>
          Soccer team VR
        </CreationCard>
        <CreationCard bgImage={[gridMobile, gridDesktop]}>
          The grid
        </CreationCard>
        <CreationCard bgImage={[vrMobile, vrDesktop]}>
          From up above VR
        </CreationCard>
        <CreationCard bgImage={[borealisMobile, borealisDesktop]}>
          Pocket borealis
        </CreationCard>
        <CreationCard bgImage={[curiosityMobile, curiosityDesktop]}>
          The curiosity
        </CreationCard>
        <CreationCard bgImage={[fishEyeMobile, fishEyeDesktop]}>
          Make it fisheye
        </CreationCard>
      </CardsContainerStyled>
    </CreationSectionStyled>
  );
};

export default CreationSection;
