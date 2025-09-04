import { HamburgerStyled, HeaderStyled } from "./styles";
import Logo from "../Logo";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <HamburgerStyled>
        <img src={hamburgerIcon} alt="" />
      </HamburgerStyled>
    </HeaderStyled>
  );
};

export default Header;
