import { ModeToggle } from "@/components/Toggle";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  const logo = "<DoneWithWork>";
  return (
    <div className="w-full animate-fade2">
      <nav className="max-w-7xl mx-auto py-5 flex flex-row items-center px-5 justify-between">
        <Link href={"/"}>
          <h1 className="text-2xl font-semibold">{logo}</h1>
        </Link>
        <div className="sm:flex flex-row items-center gap-8 hidden">
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
