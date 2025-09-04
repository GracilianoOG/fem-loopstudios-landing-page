import {
  FooterListStyled,
  HeaderListStyled,
  NavItemStyled,
  NavLinkStyled,
} from "../styles/NavStyled";

export const HeaderNavMenu = () => {
  return (
    <HeaderListStyled>
      <NavItemStyled>
        <NavLinkStyled href="">About</NavLinkStyled>
      </NavItemStyled>

      <NavItemStyled>
        <NavLinkStyled href="">Careers</NavLinkStyled>
      </NavItemStyled>

      <NavItemStyled>
        <NavLinkStyled href="">Events</NavLinkStyled>
      </NavItemStyled>

      <NavItemStyled>
        <NavLinkStyled href="">Products</NavLinkStyled>
      </NavItemStyled>

      <NavItemStyled>
        <NavLinkStyled href="">Support</NavLinkStyled>
      </NavItemStyled>
    </HeaderListStyled>
  );
};

export const FooterNavMenu = () => {
  return (
    <FooterListStyled>
      <NavItemStyled>
        <NavLinkStyled href="">About</NavLinkStyled>
      </NavItemStyled>

      <NavItemStyled>
        <NavLinkStyled href="">Careers</NavLinkStyled>
      </NavItemStyled>

      <NavItemStyled>
        <NavLinkStyled href="">Events</NavLinkStyled>
      </NavItemStyled>

      <NavItemStyled>
        <NavLinkStyled href="">Products</NavLinkStyled>
      </NavItemStyled>

      <NavItemStyled>
        <NavLinkStyled href="">Support</NavLinkStyled>
      </NavItemStyled>
    </FooterListStyled>
  );
};
