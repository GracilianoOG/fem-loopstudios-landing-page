import GlobalStyles from "./components/styles/GlobalStyles.styled.tsx";
import heroImg from "./assets/images/mobile/image-hero.jpg";
import headerLogo from "./assets/images/logo.svg";
import vrImg from "./assets/images/mobile/image-interactive.jpg";
import styled from "styled-components";

const Hero = styled.div`
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: min(100vh, 650px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px;
`;

const HeroTextStyled = styled.div`
  border: 2px solid white;
  color: white;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  font-size: 40px;
  padding: 16px;
  line-height: 1;
  padding: 18px 23px;
  text-transform: uppercase;
`;

const HeaderStyled = styled.header`
  position: fixed;
  padding: 40px 23px 0;
  top: 0px;
`;

const LogoStyled = styled.img`
  display: block;
  width: 145px;
`;

const InteractiveSectionStyled = styled.section`
  padding: 96px 23px 0;

  img {
    width: 100%;
  }
`;

const TextBoxStyled = styled.div`
  font-size: 21px;
  margin-top: 48px;
  text-align: center;
`;

const StudioDescriptionStyled = styled.p`
  color: var(--color-grey);
  font-family: "Alata", sans-serif;
  font-size: 15.3px;
  line-height: 1.62;
  margin-top: 16px;
  padding: 0 16px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HeaderStyled>
        <LogoStyled src={headerLogo} alt="" />
      </HeaderStyled>
      <main>
        <Hero>
          <HeroTextStyled>Immersive experiences that deliver</HeroTextStyled>
        </Hero>
        <InteractiveSectionStyled>
          <img src={vrImg} alt="" />
          <TextBoxStyled>
            <h2>The leader in interactive VR</h2>
            <StudioDescriptionStyled>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </StudioDescriptionStyled>
          </TextBoxStyled>
        </InteractiveSectionStyled>
      </main>
    </>
  );
};

export default App;
