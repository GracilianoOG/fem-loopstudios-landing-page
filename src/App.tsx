import GlobalStyles from "./components/styles/GlobalStyles.styled.tsx";
import heroImg from "./assets/images/mobile/image-hero.jpg";
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
`;

const HeroTextStyled = styled.div`
  border: 2px solid white;
  color: white;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  padding: 16px;
  text-transform: uppercase;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Hero>
          <HeroTextStyled>Immersive experiences that deliver</HeroTextStyled>
        </Hero>
      </main>
    </>
  );
};

export default App;
