import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

export const SocialConfig: SocialType = [
  {
    icon: (
      <GithubIcon
        size={24}
        weight="light"
        className="text-gray-400 hover:text-white transition-all"
      />
    ),
    href: "https://github.com/mariquegonn-dev",
  },
  {
    icon: (
      <LinkedinIcon
        size={24}
        weight="light"
        className="text-gray-400 hover:text-white transition-all"
      />
    ),
    href: "https://www.linkedin.com/in/mariquegonn-dev/",
  },
  {
    icon: (
      <WhatsappIcon
        size={24}
        weight="light"
        className="text-gray-400 hover:text-white transition-all"
      />
    ),
    href: "https://wa.me/5571987510739?text=Ol%C3%A1+Henrique%21",
  },
];
