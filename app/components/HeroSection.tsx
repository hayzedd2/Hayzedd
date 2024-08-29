"use client";

import React from "react";
import { useState } from "react";
import { HiOutlineCursorClick } from "react-icons/hi";
const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!open);
  };
  return (
    <section>
      <div className="pt-10 mt-10">
        <div>
          <h1 className="text-[2rem]">Frontend engineer</h1>
          <h6 className="text-[1.1rem] text-gray-400">Azeez Alhameen</h6>
        </div>
        <div className="xl:max-w-[35rem] sm:max-w-none mt-[16px] xl:text-[1.02rem] sm:text-base  ">
          <p className="leading-[30px]">
            Hi there, I am
            Alhameen
            .I&apos;m a creative frontend engineer with extensive experience
            crafting responsive and intuitive web applications.
          </p>
          <p className="mt-4 leading-[30px]">
            On the side, i am also interested in micro interactions.I
            craft/recreate wonderful interactions on the web{" "}
            <a href="https://azplayground.vercel.app" target="_blank" className="underline underline-offset-2">
              (see my playground)
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
