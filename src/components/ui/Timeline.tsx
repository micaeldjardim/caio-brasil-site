export function Timeline({
  items,
}: {
  items: { year: string; title: string; description: string }[];
}) {
  return (
    <ol className="relative border-l border-green-700 pl-8 space-y-10">
      {items.map((item, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[2.2rem] top-1 h-4 w-4 rounded-full bg-green-900 border-2 border-gold-500" />
          <span className="text-xs uppercase tracking-[0.2em] text-gold-500">
            {item.year}
          </span>
          <h3 className="font-serif text-xl text-cream-50 mt-2">
            {item.title}
          </h3>
          <p className="mt-2 text-cream-200 leading-relaxed">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
