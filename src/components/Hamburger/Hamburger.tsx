import useMobileNavMenu from "../../hooks/useMobileNavMenu";
import { HamburgerStyled } from "./styles";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";

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

export default Hamburger;
