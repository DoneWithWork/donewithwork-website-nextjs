import React from "react";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
export default function page() {
  return (
    <>
      <div className="w-full relative h-screen">
        <Navbar />
        <div className="max-w-6xl mx-auto p-5 ">
          <section id="main " className="  relative h-screen ">
            <p className=" animate-fade  text-center font-semibold text-5xl w-full absolute left-[50%] top-1/4 translate-x-[-50%] ">
              Student, Web Dev, Freelancer
            </p>
          </section>
          <section id="main " className=" relative h-screen animate">
            <div className="w-full text-center absolute left-[50%] top-1/6 translate-x-[-50%] leading-10">
              <p className=" font-semibold text-5xl mb-5 ">Who am I</p>
              <p className="text-2xl font-semibold ">
                Hello. I am Joshua Kong. An avid 18 year old self-taught web
                developer.
              </p>
              <p className="text-md">
                I am currently enrolled in the MUFY program at Sunway College
                Malaysia
              </p>
              <div className="mx-auto">
                <Button>
                  <Link href={"mailto:donewithworkyt@gmail.com"}>
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </section>
          <section id="main " className="  relative h-screen ">
            <div className="w-full text-center absolute left-[50%]  translate-x-[-50%] leading-10">
              <p className="text-3xl font-semibold">My Tech Stack</p>
              <div className="grid md:grid-cols-5 grid-cols-2 gap-8 space-evenly mt-5 ">
                <div className="flex flex-col items-center gap-5">
                  <p className="text-2xl">React Js</p>
                  <FaReact size={50} className="text-blue-400" />
                </div>
                <div className="flex flex-col items-center gap-5">
                  <p className="text-2xl">Node Js</p>
                  <FaNodeJs size={50} className="text-green-500" />
                </div>
                <div className="flex flex-col items-center gap-5">
                  <p className="text-2xl">Next Js</p>
                  <TbBrandNextjs size={50} className="text-gray-400" />
                </div>
                <div className="flex flex-col items-center gap-5">
                  <p className="text-2xl">Express Js</p>
                  <SiExpress size={50} className="text-red-400" />
                </div>
                <div className="flex flex-col items-center gap-5">
                  <p className="text-2xl">Mongo DB</p>
                  <SiMongodb size={50} className="text-green-400" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="relative">
          <p className=" absolute bottom-1 left-1">© DoneWithWork 2024 </p>
        </footer>
      </div>
    </>
  );
}
