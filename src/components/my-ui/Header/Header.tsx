import { HeaderNavConfig } from "@/config/nav";
import { HeaderNav } from "./(components)/header-nav";
import { SocialConfig } from "@/config/social";

export const Header = () => {
  return (
    <header className="hidden lg:block fixed bottom-0 left-0 top-0 w-[300px] lg:border-r-[1px] bg-black-primary">
      <HeaderNav config={HeaderNavConfig} social={SocialConfig} />
    </header>
  );
};
