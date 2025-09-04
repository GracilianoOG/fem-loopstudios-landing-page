import type { NavMenuItemProps } from "./props";
import { NavItemStyled, NavLinkStyled } from "./styles";

const NavMenuItem = ({ href, title }: NavMenuItemProps) => {
  return (
    <NavItemStyled>
      <NavLinkStyled href={href}>{title}</NavLinkStyled>
    </NavItemStyled>
  );
};

export default NavMenuItem;
