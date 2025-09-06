import GlobalStyles from "./styles/GlobalStyles.styled";
import InteractiveSection from "./components/InteractiveSection";
import CreationSection from "./components/CreationSection";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
};

export default App;
