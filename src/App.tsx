import GlobalStyles from "./components/styles/GlobalStyles.styled.tsx";
import headerLogo from "./assets/images/logo.svg";
import styled from "styled-components";
import InteractiveSection from "./components/InteractiveSection";
import CreationSection from "./components/CreationSection";
import Hero from "./components/Hero";

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
        <Hero />
        <InteractiveSection />
        <CreationSection />
      </main>
    </>
  );
};

export default App;
