import { CardStyled, CardTitleStyled } from "./styles";

interface CreationCardProps {
  children: React.ReactNode;
}

const CreationCard = ({ children }: CreationCardProps) => {
  return (
    <CardStyled>
      <CardTitleStyled>{children}</CardTitleStyled>
    </CardStyled>
  );
};

export default CreationCard;
