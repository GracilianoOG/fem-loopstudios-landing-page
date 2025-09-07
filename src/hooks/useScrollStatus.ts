import { useCallback, useEffect, useRef, useState } from "react";

const useScrollStatus = (minYOffset: number) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const timer = useRef<number | null>(null);

  const throttle = (callback: () => void, delay: number) => {
    if (timer.current) return;

    timer.current = setTimeout(() => {
      callback();
      timer.current = null;
    }, delay);
  };

  const handleScroll = useCallback(() => {
    setHasScrolled(window.pageYOffset >= minYOffset);
  }, [minYOffset]);

  useEffect(() => {
    window.addEventListener("scroll", () => throttle(handleScroll, 200));

    return () =>
      window.removeEventListener("scroll", () => throttle(handleScroll, 200));
  }, [handleScroll]);

  return hasScrolled;
};

export default useScrollStatus;
