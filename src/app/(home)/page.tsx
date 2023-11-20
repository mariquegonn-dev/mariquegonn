import { BaseSection } from "@/components/my-ui/Section";
import { Hero } from "./(components)/hero";
import { heroConfig } from "@/config/hero";

export default function Home() {
  return (
    <main className="pt-[60px]  lg:pl-[300px]">
      <BaseSection>
        <Hero config={heroConfig} />
      </BaseSection>
    </main>
  );
}
