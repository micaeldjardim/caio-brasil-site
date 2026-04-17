"use client";

import { useActionState, useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/cn";
import {
  subscribeNewsletter,
  initialNewsletterState,
  type NewsletterState,
} from "@/app/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide px-7 py-3 text-sm transition-all duration-200 whitespace-nowrap",
        "bg-gold-500 text-green-950 hover:bg-gold-400 hover:shadow-[0_0_24px_-6px_rgba(212,175,55,0.6)]",
        "disabled:opacity-60 disabled:cursor-not-allowed",
      )}
    >
      {pending ? "Inscrevendo..." : "Inscrever"}
    </button>
  );
}

export function NewsletterForm() {
  const [state, formAction] = useActionState<NewsletterState, FormData>(
    subscribeNewsletter,
    initialNewsletterState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row gap-3" noValidate>
      <div className="flex-1">
        <input
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          autoComplete="email"
          className={cn(
            "w-full rounded-md bg-green-900/40 border border-green-800/60 px-4 py-3 text-cream-50 placeholder:text-cream-400/60 focus:outline-none focus:border-gold-500/70 focus:ring-1 focus:ring-gold-500/40 transition-colors text-sm",
          )}
        />
        {state.errors?.email && (
          <p className="mt-2 text-xs text-red-300">{state.errors.email}</p>
        )}
      </div>
      <SubmitButton />
      {state.status !== "idle" && (
        <p
          aria-live="polite"
          className={cn(
            "text-xs self-center",
            state.status === "success" ? "text-gold-500" : "text-red-300",
          )}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
