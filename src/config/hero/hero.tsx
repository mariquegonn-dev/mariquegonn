import {
  GithubIcon,
  LinkedinIcon,
  PdfIcon,
  WhatsappIcon,
} from "@/components/icons";
import { HeroType } from "./hero.type";

export const heroConfig: HeroType = [
  {
    icon: (
      <GithubIcon
        size={32}
        weight="light"
        className="text-gray-400 hover:text-white transition-all hover:scale-110"
      />
    ),
    href: "https://github.com/mariquegonn-dev",
  },
  {
    icon: (
      <LinkedinIcon
        size={32}
        weight="light"
        className="text-gray-400 hover:text-white transition-all hover:scale-110"
      />
    ),
    href: "https://www.linkedin.com/in/mariquegonn-dev/",
  },
  {
    icon: (
      <WhatsappIcon
        size={32}
        weight="light"
        className="text-gray-400 hover:text-white transition-all hover:scale-110"
      />
    ),
    href: "https://wa.me/5571987510739?text=Ol%C3%A1+Henrique%21",
  },
  {
    icon: (
      <PdfIcon
        size={32}
        weight="light"
        className="text-gray-400 hover:text-white transition-all hover:scale-110"
      />
    ),
    href: "/curriculum.pdf",
  },
];
