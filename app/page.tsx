import GithubContribution from "@/components/GithubContribution";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <GithubContribution />
    </div>
  );
}
