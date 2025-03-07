"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import me from "../../public/me.jpg";
import SectionContainer from "../SectionContainer";
import TechStack from "../TechStack";

export default function About() {

  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsXL(window.innerWidth >= 1280);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <SectionContainer>
      <div className="relative pb-1">
        <div className=" pt-2 mx-auto space-y-8 max-w-5xl xl:max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-8">
          <div className="mt-5 w-full h-px bg-zinc-800" />

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12 p-6 max-w-7xl mx-auto">

            <div className="w-full md:w-1/2 flex justify-center md:justify-start rounded-full overflow-hidden">
              <Image
                src={me}
                alt="Furqan Ahmad"
                height={600}
                width={600}
                className="rounded-lg object-cover shadow-lg w-full max-w-[500px] md:max-w-[600px]"
                quality={100}
                priority={true}
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tight">
                  Furqan Ahmad
                </h2>
                <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                  Software Engineer | MERN & Next.js Developer
                </h3>
              </div>

              <div className="space-y-4 text-justify">
                <p className="text-base leading-7 text-gray-700 dark:text-gray-300">
                  Software Engineer specializing in web development using MERN stack, Next.js, MySQL, Java, C/C++, and Python, with experience in building scalable web applications. Passionate about problem-solving and delivering high-quality solutions.
                </p>

                {isXL && (
                  <div>
                    <p className="text-base leading-7 text-gray-700 dark:text-gray-300">
                      I am highly motivated to explore the world of Machine Learning and Artificial Intelligence, driven by a curiosity to understand and build intelligent systems that solve real-world problems. I am actively expanding my knowledge through hands-on projects, continuous learning, and exploring frameworks like TensorFlow and PyTorch. I’m excited to bridge my web development expertise with AI capabilities, creating innovative, data-driven applications that push the boundaries of technology.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-4">
                      <Link
                        href="/projects"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                      >
                        My Projects
                      </Link>
                      <Link
                        href="/contact"
                        className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
                      >
                        Contact Me
                      </Link>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {!isXL && (
            <div className=" text-justify !mt-0">
              <p className="text-base text-gray-700 dark:text-gray-300">
                I am highly motivated to explore the world of Machine Learning and Artificial Intelligence, driven by a curiosity to understand and build intelligent systems that solve real-world problems. I am actively expanding my knowledge through hands-on projects, continuous learning, and exploring frameworks like TensorFlow and PyTorch. I’m excited to bridge my web development expertise with AI capabilities, creating innovative, data-driven applications that push the boundaries of technology.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <Link
                  href="/projects"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  My Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          )}






          <TechStack />
        </div>
      </div>
    </SectionContainer>
  );
}
