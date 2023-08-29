"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

import logo from "../../public/logo.svg";
import dark_logo from "../../public/dark-logo.svg";
import dark from "../../public/dark.svg";
import light from "../../public/light.svg";

const Navbar = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-5 flex justify-between">
      <Image
        src={theme === "light" ? logo : dark_logo}
        width={100}
        height={100}
        alt="POSTGEN"
      />
      <div className="cursor-pointer">
        {theme === "light" ? (
          <Image
            src={light}
            width={30}
            height={30}
            alt="light"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <Image
            src={dark}
            width={30}
            height={30}
            alt="dark"
            onClick={() => setTheme("light")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
