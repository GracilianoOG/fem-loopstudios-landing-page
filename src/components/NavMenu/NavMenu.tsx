import { useContext } from "react";
import NavMenuItem from "../NavMenuItem";
import {
  FooterListStyled,
  HeaderListStyled,
  HeaderNavMenuStyled,
} from "../styles/NavStyled";
import MobileNavMenuContext from "../../contexts/MobileNavMenuContext";

export const HeaderNavMenu = () => {
  const context = useContext(MobileNavMenuContext);

  if (!context) {
    throw new Error(
      "MobileNavMenuContext is not within a MobileNavMenuProvider."
    );
  }

  const { isToggled } = context;

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
