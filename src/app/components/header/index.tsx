'use client'

import { useEffect, useState } from "react";
import { Header } from "./header";
import { Navbar } from "./navbar";

const ResponsiveHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setIsMobile(true); 
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <Navbar /> : <Header />}
    </>
  );
};

export default ResponsiveHeader;
