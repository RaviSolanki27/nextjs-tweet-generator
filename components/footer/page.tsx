import Image from "next/image";
import fork from "../../public/fork.svg";
import star from "../../public/star.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center p-2 mt-4">
      Add this repository a star
      <Link
        href={"https://github.com/RaviSolanki27/nextjs-tweet-generator"}
        className="flex gap-1 bg-red-900 rounded-sm p-1 ml-2 hover:cursor-pointer"
        target="_blank"
      >
        <Image alt="" src={fork} /> <Image alt="" src={star} />
      </Link>
    </div>
  );
};

export default Footer;
