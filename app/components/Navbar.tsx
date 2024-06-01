import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="xl:min-w-[40rem]  sm:min-w-full xl:pr-0 sm:pr-10 fixed top-0 pt-10 bg-white flex items-center justify-between">
      <div className={josefin.className}>
        <h1 className="text-[1.7rem] font-[600]">Az</h1>
      </div>

      <div className="bg-[#1b1c1d] shiny-button hover:translate-y-[-2px] cursor-pointer transition-all p-1 rounded-[50px] text-[0.75rem] work">
        <a
          href="mailto:azeezalhameen@gmail.com"
          className="flex items-center gap-1"
        >
          Available for work
          <FaAngleRight className="text-[#99999a] font-[700] " />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
