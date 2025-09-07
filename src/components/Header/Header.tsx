import { HeaderStyled } from "./styles";
import Logo from "../Logo";
import MobileNavMenuProvider from "../../providers/MobileNavMenuProvider";
import HeaderNavMenu from "../HeaderNavMenu";
import Hamburger from "../Hamburger";
import useScrollStatus from "../../hooks/useScrollStatus";

const Header = () => {
  const hasScrolled = useScrollStatus(150);

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
