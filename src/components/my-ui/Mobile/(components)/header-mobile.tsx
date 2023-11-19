"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HeaderProps } from "@/config/nav/header-nav.type";
import { ListIcon } from "@/components/icons";
import { HeaderNav } from "../../Header/(components)/header-nav";

export const HeaderMobile = ({ config, social }: HeaderProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <ListIcon size={32} weight="light" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-black-secundary p-0">
        <HeaderNav config={config} social={social} />
      </SheetContent>
    </Sheet>
  );
};
