import Logo from "../Logo";
import {
  FooterLeftBoxStyled,
  FooterStyled,
  FooterText,
  IconList,
} from "./styles";
import fbIcon from "../../assets/images/icon-facebook.svg";
import twIcon from "../../assets/images/icon-twitter.svg";
import ptIcon from "../../assets/images/icon-pinterest.svg";
import igIcon from "../../assets/images/icon-instagram.svg";
import FooterNavMenu from "../FooterNavMenu";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterLeftBoxStyled>
        <Logo small />
        <FooterNavMenu />
      </FooterLeftBoxStyled>
      <div>
        <IconList>
          <li>
            <a href="">
              <img src={fbIcon} alt="" />
            </a>
          </li>

          <li>
            <a href="">
              <img src={twIcon} alt="" />
            </a>
          </li>

          <li>
            <a href="">
              <img src={ptIcon} alt="" />
            </a>
          </li>

          <li>
            <a href="">
              <img src={igIcon} alt="" />
            </a>
          </li>
        </IconList>
        <FooterText>© 2021 Loopstudios. All rights reserved.</FooterText>
      </div>
    </FooterStyled>
  );
};

export default Footer;
