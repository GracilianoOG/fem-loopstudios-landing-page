import styled from "styled-components";
import Logo from "../Logo";
import { FooterStyled } from "./styles";
import fbIcon from "../../assets/images/icon-facebook.svg";
import twIcon from "../../assets/images/icon-twitter.svg";
import ptIcon from "../../assets/images/icon-pinterest.svg";
import igIcon from "../../assets/images/icon-instagram.svg";

const LinksListStyled = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin-top: 34px;
`;

const LinkItemStyled = styled.li``;

const LinkStyled = styled.a`
  color: white;
  font-family: "Alata", sans-serif;
  font-size: 15px;
  text-decoration: none;
`;

const IconList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const FooterText = styled.p`
  font-family: "Alata", sans-serif;
  font-size: 15.5px;
  margin-top: 18px;
  color: var(--color-grey);
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <Logo />
        <LinksListStyled>
          <LinkItemStyled>
            <LinkStyled href="">About</LinkStyled>
          </LinkItemStyled>

          <LinkItemStyled>
            <LinkStyled href="">Careers</LinkStyled>
          </LinkItemStyled>

          <LinkItemStyled>
            <LinkStyled href="">Events</LinkStyled>
          </LinkItemStyled>

          <LinkItemStyled>
            <LinkStyled href="">Products</LinkStyled>
          </LinkItemStyled>

          <LinkItemStyled>
            <LinkStyled href="">Support</LinkStyled>
          </LinkItemStyled>
        </LinksListStyled>
      </div>
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
