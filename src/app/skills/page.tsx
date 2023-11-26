import { BaseSection } from "@/components/my-ui/Section";
import { SkillsMain } from "./(components)/skills-main";
import { skillsConfig } from "@/config/skills";

export default function SkillsPage() {
  return (
    <section className="pt-[60px] lg:pl-[300px]">
      <BaseSection className="border-none">
        <SkillsMain config={skillsConfig} />
      </BaseSection>
    </section>
  );
}
