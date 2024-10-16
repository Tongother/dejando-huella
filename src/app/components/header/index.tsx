'use client'

import useIsMobile from "../../hooks/useIsMobile";
import { Header } from "./header";
import { Navbar } from "./navbar";

const ResponsiveHeader = () => {

  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <Navbar /> : <Header />}
    </>
  );
};

export default ResponsiveHeader;
