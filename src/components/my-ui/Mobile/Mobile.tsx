import { HeaderNavConfig } from "@/config/nav";
import { SocialConfig } from "@/config/social";
import { HeaderMobile } from "./(components)/header-mobile";

export const Mobile = () => {
  return (
    <header className="lg:hidden fixed left-0 right-0 border-b-[1px] bg-black-primary p-3">
      <HeaderMobile config={HeaderNavConfig} social={SocialConfig} />
    </header>
  );
};
