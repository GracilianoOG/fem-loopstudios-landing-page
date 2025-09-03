import {
  CardsContainerStyled,
  CreationSectionStyled,
  MainHeadingStyled,
  MoreLinkStyled,
} from "./styles";
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

const CreationSection = () => {
  return (
    <CreationSectionStyled>
      <div>
        <MainHeadingStyled>Our creations</MainHeadingStyled>
        <MoreLinkStyled href="#">See all</MoreLinkStyled>
      </div>
      <CardsContainerStyled>
        <CreationCard bgImage={[earthMobile, earthDesktop]}>
          Deep
          <br /> earth
        </CreationCard>
        <CreationCard bgImage={[arcadeMobile, arcadeDesktop]}>
          Night
          <br /> arcade
        </CreationCard>
        <CreationCard bgImage={[soccerMobile, soccerDesktop]}>
          Soccer
          <br /> team VR
        </CreationCard>
        <CreationCard bgImage={[gridMobile, gridDesktop]}>
          The
          <br /> grid
        </CreationCard>
        <CreationCard bgImage={[vrMobile, vrDesktop]}>
          From up
          <br /> above VR
        </CreationCard>
        <CreationCard bgImage={[borealisMobile, borealisDesktop]}>
          Pocket
          <br /> borealis
        </CreationCard>
        <CreationCard bgImage={[curiosityMobile, curiosityDesktop]}>
          The
          <br /> curiosity
        </CreationCard>
        <CreationCard bgImage={[fishEyeMobile, fishEyeDesktop]}>
          Make it
          <br /> fisheye
        </CreationCard>
      </CardsContainerStyled>
    </CreationSectionStyled>
  );
};

export default CreationSection;
