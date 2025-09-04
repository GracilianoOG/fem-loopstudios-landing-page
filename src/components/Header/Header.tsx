import { HamburgerStyled, HeaderStyled } from "./styles";
import Logo from "../Logo";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";

const Hamburger = () => {
  return (
    <HamburgerStyled>
      <img src={hamburgerIcon} alt="" />
    </HamburgerStyled>
  );
};

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Hamburger />
    </HeaderStyled>
  );
};

export default Header;
