import { createContext } from "react";

interface MobileNavMenuContextProps {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavMenuContext = createContext<
  MobileNavMenuContextProps | undefined
>(undefined);

export default MobileNavMenuContext;
