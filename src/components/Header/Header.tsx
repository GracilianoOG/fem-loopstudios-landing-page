import { HeaderStyled } from "./styles";
import Logo from "../Logo";
import MobileNavMenuProvider from "../../providers/MobileNavMenuProvider";
import HeaderNavMenu from "../HeaderNavMenu";
import Hamburger from "../Hamburger";

const Header = () => {
  return (
    <MobileNavMenuProvider>
      <HeaderStyled>
        <Logo />
        <Hamburger />
        <HeaderNavMenu />
      </HeaderStyled>
    </MobileNavMenuProvider>
  );
};

export default Header;
