import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const addr = site.contact.address;

  return (
    <footer className="mt-24 border-t border-green-800/60 bg-green-950/60">
      <Container>
        <div className="grid gap-12 md:grid-cols-4 py-16">
          <div className="md:col-span-1">
            <LogoMark />
            <p className="mt-6 text-sm text-cream-400 leading-relaxed max-w-xs">
              Advocacia preventiva e estratégica em Brasília — DF.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream-200 hover:text-gold-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">
              Escritório
            </h4>
            <address className="not-italic text-sm text-cream-200 leading-relaxed">
              {addr.street}
              <br />
              {addr.district} — {addr.city}/{addr.state}
              <br />
              CEP {addr.zip}
            </address>
            <p className="mt-4 text-sm text-cream-400">{site.contact.hours}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-cream-200">
              <li>WhatsApp: {site.contact.whatsappDisplay}</li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-gold-500 transition-colors"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-2 text-xs text-cream-400">
              <Link
                href="/politica-de-privacidade"
                className="hover:text-gold-500"
              >
                Política de privacidade
              </Link>
              <Link href="/termos" className="hover:text-gold-500">
                Termos de uso
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800/60 py-6 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-cream-400">
          <p>
            {site.firm.legalName} · CNPJ {site.firm.cnpj} ·{" "}
            {site.lawyer.name}, OAB {site.lawyer.oab}
          </p>
          <p>© {year} — Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
