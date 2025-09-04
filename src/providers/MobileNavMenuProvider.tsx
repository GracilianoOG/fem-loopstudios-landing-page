import { useState } from "react";
import MobileNavMenuContext from "../contexts/MobileNavMenuContext";

interface MobileNavMenuProviderProps {
  children: React.ReactNode;
}

const MobileNavMenuProvider = ({ children }: MobileNavMenuProviderProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <MobileNavMenuContext value={{ isToggled, setIsToggled }}>
      {children}
    </MobileNavMenuContext>
  );
};

export default MobileNavMenuProvider;
