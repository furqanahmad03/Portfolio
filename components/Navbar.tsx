"use client";

import React from "react";
import NavLinks from "@/constants/NavLinks";
import { usePathname } from "next/navigation";
import SectionContainer from "./SectionContainer";
import Link from "next/link";
import classNames from "classnames";
import ThemeSwitch from "./ThemeSwitch";
import MobileNav from "./MobileNav";
import logo from "./../public/favicon.ico";
import Image from "next/image";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <SectionContainer>
      <header className="z-40 bg-transparent py-5 md:py-10 sticky">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <Link
              href="/"
              className={classNames("md:text-3xl font-extrabold block text-2xl", {
                "": pathName === "/",
              })}
              aria-label="Logo"
            >
              {/* FA. */}
              <Image
                src={logo}
                alt="Logo"
                height={32}
                width={32}
                className="dark:border dark:border-gray-700 rounded-full"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-base leading-5">
            <div className="hidden space-x-5 sm:flex">
              {NavLinks.map(({ title, href }) => {
                const isActive = pathName === href;
                return (
                  <Link
                    key={title}
                    href={href}
                    className={classNames("horizontal-underline text-base", {
                      "horizontal-underline-active": isActive,
                    })}
                    aria-label={title}
                  >
                    <span className="font-semibold tracking-wide text-gray-900 dark:text-gray-100">
                      {title}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center">
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </SectionContainer>
  );
}
