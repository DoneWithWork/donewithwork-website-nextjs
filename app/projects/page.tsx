import React from "react";
import posts from "@/lib/constants";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className="w-full relative h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto  p-5 ">
        <h1 className="text-4xl font-semibold text-center mt-5">Projects</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 space-evenly mt-5">
          {posts &&
            posts.map((post, index) => (
              <Link
                href={`/projects/${post.id}`}
                key={index}
                className="border-2 border-blue-500 py-2 px-3  shadow-sm shadow-blue-200 rounded-lg"
              >
                <p className="text-2xl font-bold text-blue-500">{post.title}</p>
                <p className="m-5">{post.description}</p>

                <Image
                  className="mx-auto object-contain rounded-sm"
                  src={post.picture}
                  alt={post.title}
                  width={500}
                  height={500}
                  priority
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
