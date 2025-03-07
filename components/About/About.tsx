import Image from "next/image";
import me from "../../public/me.jpg";
import { technologies } from "@/constants/Technologies";
import SectionContainer from "../SectionContainer";

export default function About() {
  return (
    <SectionContainer>
      <div className="relative pb-1">
        <div className=" pt-2 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-8">
          <div className="mt-5 w-full h-px bg-zinc-800" />

          <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
            <div className="flex justify-center md:justify-start md:w-full sm:h-1/2">
              <Image
                src={me}
                alt="Furqan Ahmad"
                height={350}
                width={350}
                className="object-cover w-auto"
                quality={100}
                priority={true}
              />
            </div>
            <div className="flex flex-col space-y-6">
              <article className="flex flex-col space-y-2">
                <h2 className="text-3xl font-bold tracking-tight  self-center md:self-start">
                  Furqan Ahmad
                </h2>
                <h3 className="text-sm font-semibold self-center md:self-start">
                  Software Developer
                </h3>
              </article>
              <article className="flex flex-col space-y-2 w-full ">
                <p className=" text-sm leading-7 text-center md:text-start">
                  I&apos;m a cybersecurity master&apos;s student passionate about keeping
                  digital spaces safe. I also have some experience with web
                  development.
                </p>
                <p className="text-sm leading-7 text-center md:text-start">
                  I love solving tough security problems and want to use my
                  skills in both cybersecurity and web development to make the
                  internet safer and better for everyone. I&apos;m excited to learn
                  and grow in this fast-changing field
                </p>
              </article>
            </div>
          </div>

          {/* <div>
            <article className="flex flex-col space-y-2">
              <h3 className="pt-18 text-3xl font-bold tracking-tight self-center md:self-start">
                Technologies I use
              </h3>
              <div className="flex justify-center">
                <div className="pt-5 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-2 justify-center md:justify-start text-sm">
                  {technologies.map((category) =>
                    category.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center flex-col"
                      >
                        {tech.icon}
                        <span className="mt-2">{tech.name}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </article>
          </div> */}
          
        </div>
      </div>
    </SectionContainer>
  );
}
