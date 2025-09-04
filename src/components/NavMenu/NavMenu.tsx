import NavMenuItem from "../NavMenuItem";
import { FooterListStyled } from "../styles/NavStyled";

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
