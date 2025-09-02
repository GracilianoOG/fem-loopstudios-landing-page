import GlobalStyles from "./components/styles/GlobalStyles.styled.tsx";
import heroImg from "./assets/images/mobile/image-hero.jpg";
import headerLogo from "./assets/images/logo.svg";
import styled from "styled-components";
import InteractiveSection from "./components/InteractiveSection";

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
        <InteractiveSection />
      </main>
    </>
  );
};

export default App;
