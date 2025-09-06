import fbIcon from "../../assets/images/icon-facebook.svg";
import twIcon from "../../assets/images/icon-twitter.svg";
import ptIcon from "../../assets/images/icon-pinterest.svg";
import igIcon from "../../assets/images/icon-instagram.svg";
import { IconListStyled } from "./styles";
import IconLink from "../IconLink";

const IconList = () => {
  return (
    <IconListStyled>
      <IconLink icon={fbIcon} href="#" alt="Facebook" />
      <IconLink icon={twIcon} href="#" alt="Twitter" />
      <IconLink icon={ptIcon} href="#" alt="Pinterest" />
      <IconLink icon={igIcon} href="#" alt="Instagram" />
    </IconListStyled>
  );
};

export default IconList;
