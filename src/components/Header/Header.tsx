import { HeaderStyled } from "./styles";
import Logo from "../Logo";
import MobileNavMenuProvider from "../../providers/MobileNavMenuProvider";
import HeaderNavMenu from "../HeaderNavMenu";
import Hamburger from "../Hamburger";
import { useEffect, useState } from "react";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    const offset = 150;
    setHasScrolled(window.pageYOffset >= offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MobileNavMenuProvider>
      <HeaderStyled $scrolled={hasScrolled}>
        <Logo />
        <Hamburger />
        <HeaderNavMenu />
      </HeaderStyled>
    </MobileNavMenuProvider>
  );
};

export default Header;
