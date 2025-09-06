import type { IconLinkProps } from "./props";
import { IconLinkStyled } from "./styles";

const IconLink = ({ icon, href, alt }: IconLinkProps) => {
  return (
    <li>
      <IconLinkStyled href={href}>
        <img src={icon} alt={alt ?? ""} />
      </IconLinkStyled>
    </li>
  );
};

export default IconLink;
