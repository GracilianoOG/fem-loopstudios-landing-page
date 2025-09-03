import GlobalStyles from "./components/styles/GlobalStyles.styled.tsx";
import InteractiveSection from "./components/InteractiveSection";
import CreationSection from "./components/CreationSection";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <InteractiveSection />
        <CreationSection />
      </main>
    </>
  );
};

export default App;
