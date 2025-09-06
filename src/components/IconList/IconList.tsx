import fbIcon from "../../assets/images/icon-facebook.svg";
import twIcon from "../../assets/images/icon-twitter.svg";
import ptIcon from "../../assets/images/icon-pinterest.svg";
import igIcon from "../../assets/images/icon-instagram.svg";
import { IconListStyled } from "./styles";

const IconList = () => {
  return (
    <IconListStyled>
      <li>
        <a href="">
          <img src={fbIcon} alt="" />
        </a>
      </li>

      <li>
        <a href="">
          <img src={twIcon} alt="" />
        </a>
      </li>

      <li>
        <a href="">
          <img src={ptIcon} alt="" />
        </a>
      </li>

      <li>
        <a href="">
          <img src={igIcon} alt="" />
        </a>
      </li>
    </IconListStyled>
  );
};

export default IconList;
