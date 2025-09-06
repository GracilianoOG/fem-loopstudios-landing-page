export type BackgroundImageType = [string, string];

export interface CreationCardProps {
  children: React.ReactNode;
  bgImage: BackgroundImageType;
  href: string;
}
