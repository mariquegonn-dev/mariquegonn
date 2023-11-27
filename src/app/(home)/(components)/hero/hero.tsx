import { HeroProps } from "@/config/hero/hero.type";
import Link from "next/link";

export const Hero = ({ config }: HeroProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-[900px]">
      <h1 className="text-x3">
        Olá! Me chamo Henrique, prazer, e sou desenvolvedor Front-end; versado
        em <span className="text-blue-primary">React</span> e{" "}
        <span className="text-blue-primary">Typescript</span>
      </h1>

      <p className=" text-gray-400">
        Estou ansioso por uma oportunidade que me permita demonstrar minhas
        habilidades. Tenho facilidade em aprender e transmitir conhecimento, sou
        proativo e estou em constante aperfeiçoamento. Posso garantir que
        entregarei o meu melhor, com muita dedicação e empenho!
      </p>

      <ul className="flex gap-3">
        {config.map((item) => (
          <li key={item.href}>
            <Link href={item.href} target="_blank">
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
