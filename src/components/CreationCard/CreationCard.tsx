import type { CreationCardProps } from "./props";
import { CardLinkStyled, CardStyled, CardTitleStyled } from "./styles";

const CreationCard = ({ children, bgImage, href }: CreationCardProps) => {
  return (
    <CardStyled $bgImage={bgImage}>
      <CardLinkStyled href={href}>
        <CardTitleStyled>{children}</CardTitleStyled>
      </CardLinkStyled>
    </CardStyled>
  );
};

export default CreationCard;
