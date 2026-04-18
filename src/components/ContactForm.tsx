"use client";

import { cn } from "@/lib/cn";

const fieldBase =
  "w-full rounded-md bg-green-900/40 border border-green-800/60 px-4 py-3 text-cream-50 placeholder:text-cream-400/60 focus:outline-none focus:border-gold-500/70 focus:ring-1 focus:ring-gold-500/40 transition-colors";

export function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mkokrpdj"
      method="POST"
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nome"
            className="block text-xs uppercase tracking-[0.2em] text-gold-500 mb-2"
          >
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            className={fieldBase}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-[0.2em] text-gold-500 mb-2"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldBase}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="telefone"
          className="block text-xs uppercase tracking-[0.2em] text-gold-500 mb-2"
        >
          Telefone{" "}
          <span className="text-cream-400/70 normal-case tracking-normal">
            (opcional)
          </span>
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          autoComplete="tel"
          className={fieldBase}
        />
      </div>

      <div>
        <label
          htmlFor="mensagem"
          className="block text-xs uppercase tracking-[0.2em] text-gold-500 mb-2"
        >
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={6}
          placeholder="Descreva brevemente o caso. Confidencialidade garantida."
          className={cn(fieldBase, "resize-y min-h-[140px]")}
        />
      </div>

      <button
        type="submit"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide px-7 py-3.5 text-base transition-all duration-200",
          "bg-gold-500 text-green-950 hover:bg-gold-400 hover:shadow-[0_0_24px_-6px_rgba(212,175,55,0.6)]",
        )}
      >
        Enviar mensagem
      </button>
    </form>
  );
}
