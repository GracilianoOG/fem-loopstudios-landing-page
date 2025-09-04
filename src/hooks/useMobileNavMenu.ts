import { useContext } from "react";
import MobileNavMenuContext from "../contexts/MobileNavMenuContext";

const useMobileNavMenu = () => {
  const context = useContext(MobileNavMenuContext);

  if (!context) {
    throw new Error(
      "MobileNavMenuContext is not within a MobileNavMenuProvider."
    );
  }

  return context;
};

export default useMobileNavMenu;
