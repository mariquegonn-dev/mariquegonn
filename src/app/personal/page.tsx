import { BaseSection } from "@/components/my-ui/Section";
import { Paragraphs, PersonalMain } from "./(components)/personal-main";
import { personalConfig } from "@/config/personal";

export default function PersonalPage() {
  return (
    <section className="pt-[60px] lg:pl-[300px]">
      <BaseSection>
        <PersonalMain />
      </BaseSection>

      <BaseSection>
        <Paragraphs config={personalConfig} />
      </BaseSection>
    </section>
  );
}
