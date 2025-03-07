import { Project } from "@/Interface/projects";
import Link from "next/link";
import { BsEye } from "react-icons/bs";

type Props = {
  project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="w-full  text-xs flex justify-end items-center gap-1">
            <BsEye className="w-4 h-4" />{" "}
          </span>
        </div>
        <h2 className="z-20 text-xl font-medium duration-300 lg:text-3xl font-display">
          {project.title}
        </h2>
        <p className="z-20 mt-4 text-sm duration-300 ">
          {project.brief}
        </p>
      </article>
    </Link>
  );
};

export default Article;
