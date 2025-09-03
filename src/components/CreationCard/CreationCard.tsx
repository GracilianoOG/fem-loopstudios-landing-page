import { CardStyled, CardTitleStyled } from "./styles";

interface CreationCardProps {
  children: React.ReactNode;
  bgImage: [string, string];
}

const CreationCard = ({ children, bgImage }: CreationCardProps) => {
  return (
    <CardStyled $bgImage={bgImage}>
      <CardTitleStyled>{children}</CardTitleStyled>
    </CardStyled>
  );
};

export default CreationCard;
