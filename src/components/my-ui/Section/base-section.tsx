import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";

type BaseSectionProps = {
  children: React.ReactNode;
  className?: ClassNameValue;
};

export const BaseSection = ({ children, className }: BaseSectionProps) => {
  return (
    <section
      className={cn("p-5 lg:p-10 lg:first:pt-0 border-b-[1px]", className)}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
};
