import {
  FooterListStyled,
  HeaderListStyled,
  HeaderNavMenuStyled,
  NavItemStyled,
  NavLinkStyled,
} from "../styles/NavStyled";

export const HeaderNavMenu = () => {
  return (
    <HeaderNavMenuStyled>
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
    </HeaderNavMenuStyled>
  );
};

export const FooterNavMenu = () => {
  return (
    <nav>
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
    </nav>
  );
};
