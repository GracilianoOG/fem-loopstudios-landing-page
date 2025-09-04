import { HamburgerStyled, HeaderStyled } from "./styles";
import Logo from "../Logo";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import MobileNavMenuProvider from "../../providers/MobileNavMenuProvider";
import useMobileNavMenu from "../../hooks/useMobileNavMenu";
import HeaderNavMenu from "../HeaderNavMenu";

const Hamburger = () => {
  const { setIsToggled, isToggled } = useMobileNavMenu();

  const handleClick = () => {
    setIsToggled(prev => !prev);
  };

  return (
    <HamburgerStyled
      onClick={handleClick}
      aria-label="Toggle navigation menu"
      aria-expanded={isToggled}
    >
      <img src={isToggled ? closeIcon : hamburgerIcon} alt="" />
    </HamburgerStyled>
  );
};

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
