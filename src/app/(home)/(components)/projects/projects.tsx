import { ProjectsProps } from "@/config/projects/projects.type";
import Image from "next/image";
import Link from "next/link";

export const Projects = ({ config }: ProjectsProps) => {
  return (
    <div>
      <h1 className="text-x3">Projetos</h1>
      <ul className="lg:flex gap-6 mt-6 md:grid md:grid-cols-2">
        {config.map((item) => (
          <li key={item.title} className="mb-6">
            <Link
              href={`/projects/${item.title
                .replace(/[^a-zA-Z0-9 ]/g, "")
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="group"
            >
              <div className="xl:max-h-[313px] xl:max-w-[448px] overflow-hidden mb-2">
                <Image
                  width={2132}
                  height={1431}
                  alt={item.title}
                  src={item.src}
                  className="group-hover:scale-[1.03] transition-all duration-300"
                />
              </div>
              <span className="text-gray-400 uppercase font-medium tracking-wide text-xs">
                {item.category}
              </span>
              <h2 className="text-x5 group-hover:text-blue-primary transition-colors">
                {item.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
