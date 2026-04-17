"use client";

import { useActionState, useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/cn";
import {
  sendContact,
  initialContactState,
  type ContactState,
} from "@/app/contato/actions";

const fieldBase =
  "w-full rounded-md bg-green-900/40 border border-green-800/60 px-4 py-3 text-cream-50 placeholder:text-cream-400/60 focus:outline-none focus:border-gold-500/70 focus:ring-1 focus:ring-gold-500/40 transition-colors";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide px-7 py-3.5 text-base transition-all duration-200",
        "bg-gold-500 text-green-950 hover:bg-gold-400 hover:shadow-[0_0_24px_-6px_rgba(212,175,55,0.6)]",
        "disabled:opacity-60 disabled:cursor-not-allowed",
      )}
    >
      {pending ? "Enviando..." : "Enviar mensagem"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState<ContactState, FormData>(
    sendContact,
    initialContactState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5" noValidate>
      <div
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Não preencha: <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

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
          {state.errors?.nome && (
            <p className="mt-2 text-sm text-red-300">{state.errors.nome}</p>
          )}
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
          {state.errors?.email && (
            <p className="mt-2 text-sm text-red-300">{state.errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="telefone"
          className="block text-xs uppercase tracking-[0.2em] text-gold-500 mb-2"
        >
          Telefone <span className="text-cream-400/70 normal-case tracking-normal">(opcional)</span>
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
        {state.errors?.mensagem && (
          <p className="mt-2 text-sm text-red-300">{state.errors.mensagem}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton />
        {state.status !== "idle" && (
          <p
            aria-live="polite"
            className={cn(
              "text-sm",
              state.status === "success" ? "text-gold-500" : "text-red-300",
            )}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
