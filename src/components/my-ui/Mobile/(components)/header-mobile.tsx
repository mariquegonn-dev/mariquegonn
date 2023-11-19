"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HeaderProps } from "@/config/nav/header-nav.type";
import { ListIcon } from "@/components/icons";
import { HeaderNav } from "../../Header/(components)/header-nav";
import { useMenuMobileStore } from "@/store/menu-mobile.store";

export const HeaderMobile = ({ config, social }: HeaderProps) => {
  const { open, addOpen } = useMenuMobileStore();
  return (
    <Sheet open={open} onOpenChange={addOpen}>
      <SheetTrigger>
        <ListIcon size={32} weight="light" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-black-secundary p-0">
        <HeaderNav config={config} social={social} />
      </SheetContent>
    </Sheet>
  );
};
