import { HamburgerStyled, HeaderStyled } from "./styles";
import Logo from "../Logo";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import { useState } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <HamburgerStyled onClick={handleClick}>
      <img src={isOpen ? hamburgerIcon : closeIcon} alt="" />
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
