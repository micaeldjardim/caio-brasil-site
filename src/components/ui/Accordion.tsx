"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/cn";

export function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-green-800/60 border-y border-green-800/60">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-xl text-cream-50 group-hover:text-gold-300 transition-colors">
                {item.q}
              </span>
              <span className="shrink-0 mt-1 h-8 w-8 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-500 group-hover:border-gold-500 transition-colors">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-out",
                isOpen ? "max-h-[400px] opacity-100 pb-6" : "max-h-0 opacity-0",
              )}
            >
              <p className="text-cream-200 leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
