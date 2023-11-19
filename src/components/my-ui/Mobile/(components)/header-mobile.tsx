"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HeaderProps } from "@/config/nav/header-nav.type";
import { ListIcon } from "@/components/icons";
import { HeaderNav } from "../../Header/(components)/header-nav";
import { useMenuMobileStore } from "@/store/menu-mobile.store";
import Link from "next/link";

export const HeaderMobile = ({ config, social }: HeaderProps) => {
  const { open, addOpen } = useMenuMobileStore();
  return (
    <div className="flex justify-between">
      <Sheet open={open} onOpenChange={addOpen}>
        <SheetTrigger>
          <ListIcon size={32} weight="light" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] bg-black-secundary p-0">
          <HeaderNav config={config} social={social} />
        </SheetContent>
      </Sheet>

      <div>
        <Link
          href="/"
          className="text-x5 font-medium hover:text-blue-primary transition-colors duration-300 "
        >
          Henrique Gonçalves
        </Link>
      </div>
    </div>
  );
};
