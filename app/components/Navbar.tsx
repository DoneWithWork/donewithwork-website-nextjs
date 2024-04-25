"use client";
import { ModeToggle } from "@/components/Toggle";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
import { IoDocumentOutline } from "react-icons/io5";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar() {
  const logo = "<DoneWithWork>";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full animate-fade2 relative">
      <nav className="flex p-5 sm:hidden flex-row item-center justify-between  mx-auto">
        <Link href={"/"}>
          <h1 className="text-2xl font-semibold">{logo}</h1>
        </Link>
        <div className="flex flex-row items-center gap-5">
          <ModeToggle />
          <RxHamburgerMenu
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl"
          ></RxHamburgerMenu>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col animate-fade2 items-center z-10 p-2 gap-8 dark:bg-black bg-gray-300 absolute w-full top-20">
          <Link href={"/projects"} className="flex flex-row items-center gap-5">
            <IoDocumentOutline className="text-3xl " />
            <p className="text-white text-sm font-semibold ">Projects</p>
          </Link>
          <Link
            href={"mailto:donewithworkyt@gmail.com"}
            className="flex flex-row items-center gap-5"
          >
            <MdOutlineEmail className="text-3xl " />
            <p className="text-white text-sm font-semibold ">Email</p>
          </Link>
          <Link
            href={"https://github.com/DoneWithWork"}
            referrerPolicy="no-referrer"
            target="_blank"
            className="flex flex-row items-center gap-5"
          >
            <FaGithub className="text-3xl" />
            <p className="text-white text-sm font-semibold ">Github</p>
          </Link>

          <Link
            href={"https://www.fiverr.com/donewithwork"}
            referrerPolicy="no-referrer"
            target="_blank"
            className="flex flex-row items-center gap-5"
          >
            <TbBrandFiverr className="text-3xl text-green-500" />
            <p className="text-white text-sm font-semibold ">Fiverr</p>
          </Link>
        </div>
      )}
      <nav className="max-w-7xl hidden sm:flex mx-auto py-5  flex-row items-center px-5 justify-between">
        <Link href={"/"}>
          <h1 className="text-2xl font-semibold">{logo}</h1>
        </Link>
        <div className="flex flex-row items-center gap-8 ">
          <Link
            href={"/projects"}
            className="underline font-semibold text-blue-500"
          >
            Projects
          </Link>
          <Link href={"mailto:donewithworkyt@gmail.com"}>
            <MdOutlineEmail className="text-3xl " />
          </Link>
          <Link
            href={"https://github.com/DoneWithWork"}
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <FaGithub className="text-3xl" />
          </Link>
          <Link
            href={"https://www.fiverr.com/donewithwork"}
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <TbBrandFiverr className="text-3xl text-green-500" />
          </Link>

          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
