import { BiLogoSpringBoot } from "react-icons/bi";
import { DiDocker, DiMongodb } from "react-icons/di";
import { FaAngular, FaGitSquare, FaGithub, FaJava, FaJsSquare, FaLinux, FaPython, FaReact, FaWindows } from "react-icons/fa";
import { SiDocker, SiIntellijidea, SiMysql, SiOracle, SiPostman, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandVscode, TbBrandKotlin, TbBrandCpp } from "react-icons/tb";
import { FaApple } from "react-icons/fa6";
import { LiaNode } from "react-icons/lia";

export const technologies = [
  {
    category: "Programming Languges",
    items: [ 
      {name: "C/C++", icon: <TbBrandCpp size={32}/>},
      {name: "C#", icon: <FaPython size={32}/>},
      {name: "Kotlin", icon: <TbBrandKotlin size={32}/>},
      {name: "Java", icon: <FaJava size={32}/>},
      {name: "Python", icon: <FaPython size={32}/>},
      {name: "JavaScript" , icon: <FaJsSquare size={32}/>},
      {name: "TypeScript", icon: <SiTypescript size={32}/>},
    ]
  },
  {
    category: "Web Development",
    items: [ 
      {name: "Angular", icon: <FaAngular size={32}/>},
      {name: "React", icon: <FaReact size={32}/>},
      {name: "Node.js", icon: <LiaNode size={32}/>},
      {name: "Next.js" , icon: <TbBrandNextjs size={32}/>},
      {name: "TailwindCSS", icon: <SiTailwindcss  size={32}/>},
    ]
  },
  {
    category: "Tools",
    items: [ 
      {name: "Git", icon: <FaGitSquare size={32}/>},
      {name: "GitHub", icon: <FaGithub size={32}/>},
      {name: "Postman" , icon: <SiPostman size={32}/>},
      {name: "VsCode", icon: <TbBrandVscode size={32}/>},
      {name: "IntelliJ", icon: <SiIntellijidea size={32}/>},
      {name: "Docker" , icon: <SiDocker size={32}/>},
    ]
  },
  {
    category: "OS",
    items: [ 
      {name: "MacOS", icon: <FaApple size={32}/>},
      {name: "Windows", icon: <FaWindows size={32}/>},
      {name: "Linux", icon: <FaLinux size={32}/>},
    ]
  },
  {
    category: "Database",
    items: [ 
      {name: "MongoDB", icon: <DiMongodb  size={32}/>},
      {name: "MySql", icon: <SiMysql size={32}/>},
      {name: "Oracle" , icon: <SiOracle size={32}/>},
    ]
  },

];