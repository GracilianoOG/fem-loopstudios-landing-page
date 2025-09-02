import vrImg from "../../assets/images/mobile/image-interactive.jpg";
import {
  InteractiveSectionStyled,
  StudioDescriptionStyled,
  TextBoxStyled,
} from "./styles";

const InteractiveSection = () => {
  return (
    <InteractiveSectionStyled>
      <img src={vrImg} alt="" />
      <TextBoxStyled>
        <h2>The leader in interactive VR</h2>
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
