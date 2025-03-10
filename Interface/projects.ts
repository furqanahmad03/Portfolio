import { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  title: string;
  brief: string;
  description: string;
  images?: string[];
  url?: string;
  repository: string;
  stack: string[];
}
