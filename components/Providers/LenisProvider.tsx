"use client";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LenisProvider({ children }: Props) {
  return <ReactLenis root
  options={{
    smooth: true,
    duration: 0.05,
    easing: (t:any) => t,
    smoothTouch: false,
    direction: "vertical",
    gestureDirection: "vertical",
  }}
  >{children}</ReactLenis>;
}
