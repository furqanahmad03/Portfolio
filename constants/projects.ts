import { Project } from "@/Interface/projects";

export const projects: Project[] = [
  {
    slug: "issue-tracker",
    title: "Next.js Issue Tracker",
    brief: "Developed an issue-tracking application using Next.js and TypeScript, featuring user authentication and a dashboard with visual charts like pie and bar graphs. The app enables users to create, edit, assign, and categorize issues as OPEN, IN_PROGRESS, or CLOSED. It uses MySQL for data management, ensuring reliable storage and seamless data handling.",
    description:
      "A web application that helps you to organize your issues.",
    images: [
      "weather-app.png",
      "weather-forecast.png",
    ],
    stack: [
      "HTML",
      "CSS",
      "Javascript",
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
    title: "Grocery Store",
    brief: "Developed a Java-based online grocery store with user authentication, product management, and order tracking. Features include admin and customer login, product search, cart management, order placement, and session handling. Admins manage products, while customers browse, add to cart, and track orders.",
    description:
      "A grocery store with all the functionalities of User and Admin tasks.",
    images: [
      "weather-app.png",
      "weather-forecast.png",
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
      "weather-app.png",
      "weather-forecast.png",
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
      "weather-app.png",
      "weather-forecast.png",
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
