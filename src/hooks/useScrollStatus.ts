import { useCallback, useEffect, useState } from "react";

const useScrollStatus = (minYOffset: number) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    setHasScrolled(window.pageYOffset >= minYOffset);
  }, [minYOffset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return hasScrolled;
};

export default useScrollStatus;
