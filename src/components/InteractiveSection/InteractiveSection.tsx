import vrImgMobile from "../../assets/images/mobile/image-interactive.jpg";
import vrImgDesktop from "../../assets/images/desktop/image-interactive.jpg";
import {
  InteractiveSectionStyled,
  MainHeadingStyled,
  StudioDescriptionStyled,
  TextBoxStyled,
} from "./styles";

const InteractiveSection = () => {
  return (
    <InteractiveSectionStyled>
      <picture>
        <source
          media="(min-width: 992px)"
          srcSet={vrImgDesktop}
          type="image/jpeg"
        />
        <img
          src={vrImgMobile}
          alt="A man wearing VR classes mimicking a monster."
        />
      </picture>
      <TextBoxStyled>
        <MainHeadingStyled>The leader in interactive VR</MainHeadingStyled>
        <StudioDescriptionStyled>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </StudioDescriptionStyled>
      </TextBoxStyled>
    </InteractiveSectionStyled>
  );
};

export default InteractiveSection;
