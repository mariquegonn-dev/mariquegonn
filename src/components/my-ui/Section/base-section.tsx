type BaseSectionProps = {
  children: React.ReactNode;
};

export const BaseSection = ({ children }: BaseSectionProps) => {
  return (
    <section className="p-5 lg:p-10 lg:first:pt-0 border-b-[1px]">
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </section>
  );
};
