import fbIcon from "../../assets/images/icon-facebook.svg";
import twIcon from "../../assets/images/icon-twitter.svg";
import ptIcon from "../../assets/images/icon-pinterest.svg";
import igIcon from "../../assets/images/icon-instagram.svg";
import { IconLinkStyled, IconListStyled } from "./styles";

const IconList = () => {
  return (
    <IconListStyled>
      <li>
        <IconLinkStyled href="">
          <img src={fbIcon} alt="" />
        </IconLinkStyled>
      </li>

      <li>
        <IconLinkStyled href="">
          <img src={twIcon} alt="" />
        </IconLinkStyled>
      </li>

      <li>
        <IconLinkStyled href="">
          <img src={ptIcon} alt="" />
        </IconLinkStyled>
      </li>

      <li>
        <IconLinkStyled href="">
          <img src={igIcon} alt="" />
        </IconLinkStyled>
      </li>
    </IconListStyled>
  );
};

export default IconList;
