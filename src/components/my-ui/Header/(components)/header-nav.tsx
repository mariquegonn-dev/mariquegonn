"use client";

import { HeaderProps } from "@/config/nav/header-nav.type";
import Link from "next/link";
import { AvatarCustom } from "../../Avatar";
import useMedia from "@/hooks/use-media";
import { useMenuMobileStore } from "@/store/menu-mobile.store";

export const HeaderNav = ({ config, social }: HeaderProps) => {
  const media = useMedia("(max-width: 1024px)");
  const { addOpen } = useMenuMobileStore();

  function clickInLinkMobile() {
    if (media) {
      addOpen(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <Link
        className="flex gap-3 items-center py-6 px-5 border-b-[1px]"
        href="/"
      >
        <AvatarCustom src="https://github.com/shadcn.png" alt="perfil image" />
        <div className="flex flex-col group">
          <p className="text-x5 font-medium group-hover:text-blue-primary transition-colors duration-300 ">
            Henrique Gonçalves
          </p>
          <span className="text-base text-gray-400">
            Desenvolvedor Front-end
          </span>
        </div>
      </Link>
      <nav className="flex-1">
        <ul>
          {config.map((item) => (
            <li
              key={item.title}
              className="border-b-[1px] bg-black-primary hover:bg-black-secundary transition-all group"
            >
              <Link
                href={item.href}
                className="flex gap-3 items-center py-5 px-5"
                onClick={clickInLinkMobile}
              >
                {item.icon}{" "}
                <span className="text-base font-light tracking-wide text-gray-400 group-hover:text-white transition-all">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="py-6 px-5 border-t-[1px]">
        <ul className="flex gap-3 justify-center">
          {social.map((item) => (
            <li key={item.href}>
              <Link target="_blank" href={item.href}>
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
