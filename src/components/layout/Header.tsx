"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/ui/LogoMark";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-800/60 bg-green-950/70 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group" aria-label="Caio Brasil Advocacia">
            <LogoMark />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cream-200 hover:text-gold-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href={whatsappLink()} external variant="primary" size="md">
              Fale comigo
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="lg:hidden p-2 text-cream-50"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-green-800/60",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container>
          <nav className="flex flex-col py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-cream-200 hover:text-gold-500 border-b border-green-800/40 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <ButtonLink
                href={whatsappLink()}
                external
                variant="primary"
                size="md"
                className="w-full"
              >
                Fale comigo
              </ButtonLink>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
