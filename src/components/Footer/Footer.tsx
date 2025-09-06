import Logo from "../Logo";
import { FooterLeftBoxStyled, FooterStyled, FooterText } from "./styles";
import FooterNavMenu from "../FooterNavMenu";
import IconList from "../IconList";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterLeftBoxStyled>
        <Logo small />
        <FooterNavMenu />
      </FooterLeftBoxStyled>
      <div>
        <IconList />
        <FooterText>© 2021 Loopstudios. All rights reserved.</FooterText>
      </div>
    </FooterStyled>
  );
};

export default Footer;
