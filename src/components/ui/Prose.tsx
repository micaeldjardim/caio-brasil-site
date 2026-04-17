import Image from "next/image";
import type { Block } from "@/content/types";

function slug(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 text-cream-100">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={slug(b.text)}
                className="font-serif text-3xl md:text-4xl text-cream-50 mt-12 mb-2 leading-tight scroll-mt-24"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={slug(b.text)}
                className="font-serif text-2xl text-cream-50 mt-8 mb-1 scroll-mt-24"
              >
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="text-[1.0625rem] leading-[1.75] text-cream-200"
              >
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3 pl-0">
                {b.items.map((item, j) => (
                  <li
                    key={j}
                    className="relative pl-6 text-cream-200 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.8em] before:w-3 before:h-px before:bg-gold-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3 counter-reset:list">
                {b.items.map((item, j) => (
                  <li
                    key={j}
                    className="relative pl-10 text-cream-200 leading-relaxed"
                  >
                    <span className="absolute left-0 top-0 inline-flex items-center justify-center h-6 w-6 rounded-full border border-gold-500/60 text-gold-500 text-xs font-serif">
                      {j + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-gold-500 pl-6 italic font-serif text-xl text-cream-50 my-8"
              >
                {b.text}
                {b.cite && (
                  <footer className="mt-2 text-sm not-italic font-sans text-cream-400">
                    — {b.cite}
                  </footer>
                )}
              </blockquote>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="rounded-xl border border-gold-500/40 bg-gold-500/5 p-6 my-8 text-cream-100 leading-relaxed"
              >
                {b.text}
              </aside>
            );
          case "image":
            return (
              <figure key={i} className="my-10 -mx-2 md:-mx-8">
                <div className="relative overflow-hidden rounded-2xl border border-green-800/60 bg-green-950">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={b.width}
                    height={b.height}
                    sizes="(min-width: 768px) 720px, 100vw"
                    className="w-full h-auto"
                  />
                </div>
                {(b.caption || b.credit) && (
                  <figcaption className="mt-3 text-sm text-cream-400 leading-relaxed text-center">
                    {b.caption}
                    {b.caption && b.credit && " · "}
                    {b.credit && (
                      <span className="text-cream-400/70">{b.credit}</span>
                    )}
                  </figcaption>
                )}
              </figure>
            );
        }
      })}
    </div>
  );
}
