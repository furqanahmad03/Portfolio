import React from "react";
import SectionContainer from "./SectionContainer";
import Link from "next/link";
import social from "@/constants/Social";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaSpotify } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <SectionContainer>
      <footer>
        <div className="mb-0 flex flex-col justify-start space-y-1.5 space-x-0 py-10 text-black dark:text-gray-400">
          <div className="flex flex-col items-center space-x-2 text-sm sm:flex-row sm:justify-between sm:text-base">
            <ul className="flex space-x-2">
              <li> © 2025 </li>
              <li>{` • `}</li>
              <li className="transform transition-transform duration-200 ease-out hover:scale-110">
                <Link href="/"> {social.title} </Link>
              </li>
            </ul>
            <ul className="flex cursor-pointer items-center space-x-5 mt-4 sm:mt-0">
              <li className="transform transition-transform duration-200 ease-out hover:scale-125 hover:text-[#0078D7]">
                <a
                  href={social.linkedin}
                  rel="noreferer"
                  target="_blank"
                  aria-label="linkedIn"
                >
                  <AiFillLinkedin className="sm:text-2xl text-xl" />
                </a>
              </li>
              <li className="transform transition-transform duration-200 ease-out hover:scale-125 hover:text-[#6E5494]">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <FaGithub className="sm:text-xl text-lg" />
                </a>
              </li>
              <li className="transform transition-transform duration-200 ease-out hover:scale-125 hover:text-[#D14836]">
                <a
                  href={social.email}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="spotify"
                >
                  <IoMail className="sm:text-2xl text-xl" />
                </a>
              </li>
              <li className="transform transition-transform duration-200 ease-out hover:scale-125 hover:text-[#1877F2]">
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook"
                >
                  <AiFillFacebook className="sm:text-2xl text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
