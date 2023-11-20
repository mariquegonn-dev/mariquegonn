import { Button } from "@/components/ui/button";
import { HeroProps } from "@/config/hero/hero.type";
import Link from "next/link";

export const Hero = ({ config }: HeroProps) => {
  return (
    <div className="grid grid-cols-[1fr_0.5fr] justify-items-end">
      <div className="flex flex-col gap-4">
        <h1 className="text-x1">
          Olá! Me chamo Henrique, prazer, e sou desenvolvedor Front-end; versado
          em <span className="text-blue-primary">React</span> e{" "}
          <span className="text-blue-primary">Typescript</span>
        </h1>

        <p className=" text-gray-400">
          Estou ansioso por uma oportunidade que me permita demonstrar minhas
          habilidades. Tenho facilidade em aprender e transmitir conhecimento,
          sou proativo e estou em constante aperfeiçoamento. Posso garantir que
          entregarei o meu melhor, com muita dedicação e empenho!
        </p>

        <ul className="flex gap-3">
          {config.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.icon}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-2">
        <Link href="/contact">
          <Button className="bg-green-950 text-green-300 rounded-[4px] animate-pulse hover:bg-green-950 flex gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            Open to work
          </Button>
        </Link>
      </div>
    </div>
  );
};
