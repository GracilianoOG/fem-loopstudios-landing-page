import { HeaderStyled, LogoStyled } from "./styles";
import headerLogo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled src={headerLogo} alt="" />
    </HeaderStyled>
  );
};

export default Header;
