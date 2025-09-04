import { HamburgerStyled, HeaderStyled } from "./styles";
import Logo from "../Logo";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import { HeaderNavMenu } from "../NavMenu/NavMenu";
import { useContext } from "react";
import MobileNavMenuContext from "../../contexts/MobileNavMenuContext";
import MobileNavMenuProvider from "../../providers/MobileNavMenuProvider";

const Hamburger = () => {
  const context = useContext(MobileNavMenuContext);

  if (!context) {
    throw new Error(
      "MobileNavMenuContext is not within a MobileNavMenuProvider."
    );
  }

  const { setIsToggled, isToggled } = context;

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
