import useMobileNavMenu from "../../hooks/useMobileNavMenu";
import NavMenuItem from "../NavMenuItem";
import {
  FooterListStyled,
  HeaderListStyled,
  HeaderNavMenuStyled,
} from "../styles/NavStyled";

export const HeaderNavMenu = () => {
  const { isToggled } = useMobileNavMenu();

  return (
    <HeaderNavMenuStyled $hidden={!isToggled}>
      <HeaderListStyled>
        <NavMenuItem title="About" href="#" />
        <NavMenuItem title="Careers" href="#" />
        <NavMenuItem title="Events" href="#" />
        <NavMenuItem title="Products" href="#" />
        <NavMenuItem title="Support" href="#" />
      </HeaderListStyled>
    </HeaderNavMenuStyled>
  );
};

export const FooterNavMenu = () => {
  return (
    <nav>
      <FooterListStyled>
        <NavMenuItem title="About" href="#" />
        <NavMenuItem title="Careers" href="#" />
        <NavMenuItem title="Events" href="#" />
        <NavMenuItem title="Products" href="#" />
        <NavMenuItem title="Support" href="#" />
      </FooterListStyled>
    </nav>
  );
};
