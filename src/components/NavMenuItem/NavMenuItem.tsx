import { NavItemStyled, NavLinkStyled } from "./styles";

interface NavMenuItemProps {
  title: string;
  href: string;
}

const NavMenuItem = ({ href, title }: NavMenuItemProps) => {
  return (
    <NavItemStyled>
      <NavLinkStyled href={href}>{title}</NavLinkStyled>
    </NavItemStyled>
  );
};

export default NavMenuItem;
