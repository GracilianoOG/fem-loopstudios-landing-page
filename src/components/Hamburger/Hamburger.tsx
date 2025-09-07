import useMobileNavMenu from "../../hooks/useMobileNavMenu";
import { HamburgerStyled } from "./styles";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import { useState } from "react";

const Hamburger = () => {
  const { setIsToggled, isToggled } = useMobileNavMenu();
  const [animate, setAnimate] = useState<boolean>(false);

  const handleClick = () => {
    setIsToggled(prev => !prev);
    setAnimate(true);
  };

  const handleAnimationEnd = () => {
    setAnimate(false);
  };

  return (
    <HamburgerStyled
      $animate={animate}
      onClick={handleClick}
      aria-label="Toggle navigation menu"
      aria-expanded={isToggled}
      aria-controls="main-nav"
      onAnimationEnd={handleAnimationEnd}
    >
      <img src={isToggled ? closeIcon : hamburgerIcon} alt="" />
    </HamburgerStyled>
  );
};

export default Hamburger;
