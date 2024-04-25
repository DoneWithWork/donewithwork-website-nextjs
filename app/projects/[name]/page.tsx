import Navbar from "@/app/components/Navbar";
import posts from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Page({ params }: { params: { name: string } }) {
  const post = posts.find((post) => post.id === params.name);
  return (
    <div className="w-full relative h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto  p-5 ">
        <div className="w-full flex flex-col items-center">
          <p className="text-3xl font-semibold">{post?.title}</p>
          <div className="mx-auto">
            <Image
              src={post?.picture || ""}
              className="mt-5 border-2 border-blue-500 rounded-md"
              alt={post?.title || "some picture"}
              width={600}
              height={600}
            />
          </div>
          <p className="font-semibold text-md m-5 max-w-[50ch]">
            {post?.description}
          </p>
          <div>
            {post?.texts.map((text, index) => (
              <p key={index} className="text-left max-w-[70ch] leading-10">
                {text}
              </p>
            ))}
          </div>
          <div>
            {" "}
            <Button className="m-2 w-35">
              <Link
                href={post?.link || "/"}
                referrerPolicy="no-referrer"
                target="_blank"
              >
                View Project
              </Link>
            </Button>
            <Button className="m-2 w-35">
              <Link
                href={post?.github || "https://github.com/DoneWithWork"}
                referrerPolicy="no-referrer"
                target="_blank"
              >
                View Code
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
