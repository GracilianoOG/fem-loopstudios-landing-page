import headerLogo from "../../assets/images/logo.svg";
import { LogoStyled } from "./styles";

const Logo = ({ small }: { small?: boolean }) => {
  return <LogoStyled $small={small} src={headerLogo} alt="loopstudios" />;
};

export default Logo;
