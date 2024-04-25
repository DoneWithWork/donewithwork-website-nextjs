import React from "react";
import Navbar from "./components/Navbar";

export default function page() {
  return (
    <>
      <div className="w-full relative h-screen">
        <Navbar />
        <div className="max-w-6xl mx-auto p-5">
          <section id="main " className="  relative h-screen ">
            <p className="text-center font-semibold text-5xl w-full absolute left-[50%] top-1/4 translate-x-[-50%] ">
              Student, Web Dev, Freelancer
            </p>
          </section>
          <section id="main " className="  relative h-screen ">
            <div className="w-full text-center absolute left-[50%] top-1/4 translate-x-[-50%] ">
              <p className=" font-semibold text-5xl ">Who am I</p>
              <p className="text-2xl font-semibold">
                Hello. I am Joshua Kong. An avid 18 year old self-taught web
                developer.
              </p>
              <p>
                I am currently enrolled in the MUFY program at Sunway College
                Malaysia
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
