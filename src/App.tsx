import GlobalStyles from "./components/styles/GlobalStyles.styled.tsx";
import heroImg from "./assets/images/mobile/image-hero.jpg";
import styled from "styled-components";

const Hero = styled.div`
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: min(100vh, 650px);
  position: relative;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;
