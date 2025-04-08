import Certifications from "@/components/certifications/Certifications";
import MainLayout from "@/components/layouts/MainLayout";

export const metadata = {
  title: "Certifications - Furqan Ahmad",
  description: "Certifications - Furqan Ahmad",
};

export default function page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-2 pb-8 md:space-y-5 ">
        <h1 className="flex items-center justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          My Certifications
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Each certificate marks a milestone in my learning journey. From mastering new technologies to refining my skills, these achievements reflect my dedication to growth. Explore my certifications below!
        </p>
      </div>
      <Certifications />
    </MainLayout>
  );
}
