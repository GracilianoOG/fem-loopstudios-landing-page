import useMobileNavMenu from "../../hooks/useMobileNavMenu";
import NavMenuItem from "../NavMenuItem";
import { HeaderListStyled, HeaderNavMenuStyled } from "./styles";

const HeaderNavMenu = () => {
  const { isToggled } = useMobileNavMenu();

  return (
    <HeaderNavMenuStyled id="main-nav" $hidden={!isToggled}>
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

export default HeaderNavMenu;
