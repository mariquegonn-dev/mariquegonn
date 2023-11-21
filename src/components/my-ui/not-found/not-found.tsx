import { BugIcon } from "@/components/icons";
import { HeaderNavConfig } from "@/config/nav";
import Link from "next/link";

export const NotFound = () => {
  return (
    <div className="absolute top-0 bottom-0 left-[15vw] right-0 pt-[400px] backdrop-blur-[8px] ">
      <div className="flex flex-col mx-auto max-w-max gap-2">
        <div className="flex gap-1 items-center animate-fade-in-up">
          <BugIcon size={24} />
          <p className="font-geist text-x5 font-semibold">404</p>
        </div>
        <div>
          <p>Esta página não foi encontrada.</p>
          <p>Deixo alguns links que podem ser úteis :) </p>
        </div>
        <ul className="flex gap-3 items-center">
          {HeaderNavConfig.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="text-gray-400 hover:text-white">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
