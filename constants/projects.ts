import { Project } from "@/Interface/projects";

export const projects: Project[] = [
  {
    slug: "ai-image-generator",
    title: "MERN - AI Image Generator",
    brief: "A full-stack web application built with the MERN stack that allows users to generate and explore AI-generated images based on text prompts. It features user-friendly search functionality, real-time loading indicators, and responsive UI. If the OpenAI API is unavailable, the app gracefully falls back to sample images for a smooth experience.",
    description:
      "A web application that generates images using OpenAI and displays all the generated images.",
    images: [
      "AIIG-1.png",
      "AIIG-2.png",
      "AIIG-3.png",
      "AIIG-4.png",
    ],
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Tailwind",
      "Material UI",
      "Typescript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI DALL·E API",
      "Cloudinary",
    ],
    url: "",
    repository: "https://github.com/furqanahmad03/MERN-AI-Image-Generation",
  },
  {
    slug: "issue-tracker",
    title: "Next.js Issue Tracker",
    brief: "Developed an issue-tracking application using Next.js and TypeScript, featuring user authentication and a dashboard with visual charts like pie and bar graphs. The app enables users to create, edit, assign, and categorize issues as OPEN, IN_PROGRESS, or CLOSED. It uses MySQL for data management, ensuring reliable storage and seamless data handling.",
    description:
      "A web application that helps you to organize your issues.",
    images: [
      "issue-1.png",
      "issue-2.png",
      "issue-3.png",
      "issue-4.png",
      "issue-5.png",
    ],
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Tailwind",
      "Radix.UI",
      "Typescript",
      "Node.js",
      "Next.js",
      "MySQL",
      "NextAuth.js"
    ],
    url: "",
    repository: "https://github.com/furqanahmad03/java-gorcery-store",
  },
  {
    slug: "grocery-store",
    title: "Java Grocery Store",
    brief: "Developed a Java-based online grocery store with user authentication, product management, and order tracking. Features include admin and customer login, product search, cart management, order placement, and session handling. Admins manage products, while customers browse, add to cart, and track orders.",
    description:
      "A grocery store with all the functionalities of User and Admin tasks.",
    images: [
      "grocery-store-1.png",
      "grocery-store-2.png",
      "grocery-store-3.png",
      "grocery-store-4.png",
      "grocery-store-5.png",
      "grocery-store-6.png",
      "grocery-store-7.png",
      "grocery-store-8.png",
    ],
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Java",
    ],
    url: "",
    repository: "https://github.com/furqanahmad03/java-gorcery-store",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    brief: "Developed a weather app with enhanced UI to display every sort of information regarding weather. Developed using HTML, CSS, Tailwind and JavaScript. The app displays current weather conditions and stores previous searches for easy comparison.",
    description:
      "A platform for searching the current weather.",
    images: [
      "weather-app-1.png",
      "weather-app-2.png",
    ],
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "Tailwind",
    ],
    url: "https://weather-forecast2-by-furqan.vercel.app/",
    repository: "https://github.com/furqanahmad03/weather-app",
  },
  {
    slug: "weather-forecast",
    title: "Weather Forecast",
    brief: "Developed a weather app using HTML, CSS, Tailwind and JavaScript. The app displays current weather conditions and stores previous searches for easy comparison.",
    description:
      "A platform for searching the current weather.",
    images: [
      "weather-forecast-1.png",
      "weather-forecast-2.png",
      "weather-forecast-3.png",
    ],
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "Tailwind",
    ],
    url: "https://weather-forecast-by-furqan.vercel.app/",
    repository: "https://github.com/furqanahmad03/weather-forecast",
  },
];
