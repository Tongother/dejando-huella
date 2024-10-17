import { useState, useEffect, useCallback } from "react";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    setIsMobile(width < breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return isMobile;
};

export default useIsMobile;
