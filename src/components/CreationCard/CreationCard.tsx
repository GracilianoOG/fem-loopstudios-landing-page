import type { CreationCardProps } from "./props";
import { CardStyled, CardTitleStyled } from "./styles";

const CreationCard = ({ children, bgImage }: CreationCardProps) => {
  return (
    <CardStyled $bgImage={bgImage}>
      <CardTitleStyled>{children}</CardTitleStyled>
    </CardStyled>
  );
};

export default CreationCard;
