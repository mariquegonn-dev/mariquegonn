import { HeaderNavConfig } from "@/config/nav";
import { HeaderNav } from "./(components)/header-nav";
import { HomeIcon } from "lucide-react";
import { SocialConfig } from "@/config/social";

export const Header = () => {
  return (
    <header className="fixed bottom-0 left-0 top-0 w-[300px] border-r-[1px] bg-black-primary">
      <HeaderNav config={HeaderNavConfig} social={SocialConfig} />
    </header>
  );
};
