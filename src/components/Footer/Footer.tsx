import styled from "styled-components";
import Logo from "../Logo";
import { FooterStyled } from "./styles";

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
      <div></div>
    </FooterStyled>
  );
};

export default Footer;
