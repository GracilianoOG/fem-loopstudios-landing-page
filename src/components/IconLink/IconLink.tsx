import { IconLinkStyled } from "./styles";

interface IconLinkProps {
  icon: string;
  href: string;
  alt?: string;
}

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
