import type { IconLinkProps } from "./props";
import { IconLinkStyled } from "./styles";

const IconLink = ({ icon, href, alt }: IconLinkProps) => {
  return (
    <li>
      <IconLinkStyled href={href} aria-label={alt}>
        <img src={icon} alt={alt ?? ""} aria-hidden />
      </IconLinkStyled>
    </li>
  );
};

export default IconLink;
