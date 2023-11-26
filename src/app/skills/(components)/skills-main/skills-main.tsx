import { SkillsProps } from "@/config/skills/skills.type";
import Image from "next/image";

export const SkillsMain = ({ config }: SkillsProps) => {
  return (
    <div>
      <h1 className="text-x3 mb-3">Tecnologias e Conhecimentos</h1>
      <ul className="grid xl:grid-cols-4 gap-4 md:grid-cols-2">
        {config.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-3 border bg-black-primary hover:bg-black-secundary transition-all grou p-4 rounded-[4px]"
          >
            <Image
              width={skill.name === "Figma" ? 24 : 36}
              height={36}
              alt={skill.name}
              src={skill.icon}
            />

            <div>
              <p className="font-bold text-x5">{skill.name}</p>
              <p className="text-gray-400">{skill.tech}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
