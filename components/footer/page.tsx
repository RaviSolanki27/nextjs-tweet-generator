"use client";
import Image from "next/image";
import fork from "../../public/fork.svg";
import fork_dark from "../../public/fork-dark.svg";
import star from "../../public/star.svg";
import star_dark from "../../public/star-dark.svg";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center p-2 h-10  relative bottom-0 w-full">
      Add a star to this Repository
      <Link
        href={"https://github.com/RaviSolanki27/nextjs-tweet-generator"}
        className="flex gap-1 rounded-sm p-1 ml-2 hover:cursor-pointer bg-black dark:bg-white"
        target="_blank"
      >
        <Image alt="" src={theme === "light" ? fork : fork_dark} />
        <Image alt="" src={theme === "light" ? star : star_dark} />
      </Link>
    </div>
  );
};

export default Footer;
