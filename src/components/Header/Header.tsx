import { HamburgerStyled, HeaderStyled } from "./styles";
import Logo from "../Logo";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import { useState } from "react";
import { HeaderNavMenu } from "../NavMenu/NavMenu";

const Hamburger = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

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
    <HeaderStyled>
      <Logo />
      <Hamburger />
      <HeaderNavMenu />
    </HeaderStyled>
  );
};

export default Header;
