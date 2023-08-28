"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

import logo from "../../public/logo.svg"

const Navbar = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
    setTheme("light")
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-5">
      <Image
        src={logo}
        width={100}
        height={100}
        alt="POSTGEN"
      />
      {/* Tweet Post Maker */}
      {/* <i>{theme}</i>
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setTheme("light")}>Light</button> */}
    </div>
  );
};

export default Navbar;
