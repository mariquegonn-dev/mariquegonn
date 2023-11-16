import { CodeIcon, DisketIcon, HouseIcon, MailIcon } from "@/components/icons";
import { HeaderNavType } from "./header-nav.type";

export const HeaderNavConfig: HeaderNavType = [
  {
    title: "Início",
    icon: (
      <HouseIcon
        size={24}
        weight="light"
        className="text-gray-400 group-hover:text-white transition-all"
      />
    ),
    href: "/",
  },
  {
    title: "Projetos",
    icon: (
      <DisketIcon
        size={24}
        weight="light"
        className="text-gray-400 group-hover:text-white transition-all"
      />
    ),
    href: "/projects",
  },
  {
    title: "Conhecimentos",
    icon: (
      <CodeIcon
        size={24}
        weight="light"
        className="text-gray-400 group-hover:text-white transition-all"
      />
    ),
    href: "/skills",
  },
  {
    title: "Contato",
    icon: (
      <MailIcon
        size={24}
        weight="light"
        className="text-gray-400 group-hover:text-white transition-all"
      />
    ),
    href: "/contact",
  },
];
