import { Hamburger, HeaderStyled } from "./styles";
import Logo from "../Logo";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Hamburger>
        <img src={hamburgerIcon} alt="" />
      </Hamburger>
    </HeaderStyled>
  );
};

export default Header;
