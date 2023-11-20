type BaseSectionProps = {
  children: React.ReactNode;
};

export const BaseSection = ({ children }: BaseSectionProps) => {
  return (
    <section className="lg:pl-10 p-5 border-b-[1px] border-gray-400s">
      {children}
    </section>
  );
};
