export default function Project({ params }: { params: { id: string } }) {
  return (
    <section className="pt-[60px]  lg:pl-[300px]">
      <div className="bg-red-400">{params.id}</div>
    </section>
  );
}
