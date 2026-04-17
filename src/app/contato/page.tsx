import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle, GoldRule } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { ContactForm } from "@/components/ContactForm";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Agende uma conversa com Caio Brasil Advocacia em Brasília. WhatsApp, e-mail e escritório no Lago Norte.",
};

const channels = [
  {
    icon: Phone,
    label: "WhatsApp",
    primary: site.contact.whatsappDisplay,
    href: whatsappLink(),
    external: true,
    note: "Resposta em horário comercial. Para assuntos urgentes, indicar na mensagem.",
  },
  {
    icon: Mail,
    label: "E-mail",
    primary: site.contact.email,
    href: `mailto:${site.contact.email}`,
    external: false,
    note: "Indicado para envio de documentos e casos que exigem histórico escrito.",
  },
  {
    icon: MapPin,
    label: "Escritório",
    primary: `${site.contact.address.district}, Brasília — DF`,
    href: "#endereco",
    external: false,
    note: "Atendimento presencial com agendamento prévio.",
  },
  {
    icon: Clock,
    label: "Horário",
    primary: site.contact.hours,
    href: null,
    external: false,
    note: "Fora do horário, mensagens são respondidas no próximo dia útil.",
  },
];

const steps = [
  {
    n: "01",
    title: "Mensagem inicial",
    body:
      "Pelo WhatsApp ou e-mail, com um resumo breve do caso. Confidencialidade garantida desde o primeiro contato.",
  },
  {
    n: "02",
    title: "Conversa preliminar",
    body:
      "Encontro presencial ou por vídeo para entender o caso, esclarecer dúvidas e apontar os caminhos possíveis.",
  },
  {
    n: "03",
    title: "Proposta de atuação",
    body:
      "Definição do escopo, formato de acompanhamento e condições financeiras, registrado por escrito antes do início dos trabalhos.",
  },
];

export default function ContatoPage() {
  const addr = site.contact.address;
  const mapsQuery = encodeURIComponent(
    `${addr.street}, ${addr.district}, ${addr.city} - ${addr.state}, ${addr.zip}`,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Caio Brasil Advocacia",
    image: "https://caiobrasil.adv.br/logo.jpg",
    description:
      "Advocacia preventiva e estratégica em direito trabalhista, cível, criminal e tributário.",
    address: {
      "@type": "PostalAddress",
      streetAddress: addr.street,
      addressLocality: addr.city,
      addressRegion: addr.state,
      postalCode: addr.zip,
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Legal Services",
      telephone: "+55-61-98181-1620",
      email: site.contact.email,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
    url: "https://caiobrasil.adv.br/contato",
    telephone: "+55-61-98181-1620",
    email: site.contact.email,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Contato"
        title="As portas do escritório estão abertas."
        lead="Uma primeira conversa não gera compromisso. Serve para entender o caso, alinhar expectativas e definir, se for o caso, o formato mais adequado de atuação."
      />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => {
              const Icon = c.icon;
              const inner = (
                <>
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-500">
                    <Icon size={20} />
                  </span>
                  <span className="block mt-5 text-xs uppercase tracking-[0.2em] text-gold-500">
                    {c.label}
                  </span>
                  <span className="block mt-2 font-serif text-xl text-cream-50">
                    {c.primary}
                  </span>
                  <span className="block mt-4 text-sm text-cream-400 leading-relaxed">
                    {c.note}
                  </span>
                </>
              );
              const baseClass =
                "block rounded-2xl border border-green-800/60 bg-green-900/40 p-8 h-full transition-colors hover:border-gold-500/60";
              if (!c.href) {
                return (
                  <div key={c.label} className={baseClass}>
                    {inner}
                  </div>
                );
              }
              if (c.external) {
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={baseClass}
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <a key={c.label} href={c.href} className={baseClass}>
                  {inner}
                </a>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="grid gap-14 md:grid-cols-[1fr_1.2fr] items-start">
            <div>
              <SectionEyebrow>Como funciona o primeiro contato</SectionEyebrow>
              <SectionTitle>
                Três passos entre a mensagem e o início do trabalho.
              </SectionTitle>
              <GoldRule className="my-8 max-w-[6rem] mx-0" />
              <p className="text-cream-200 leading-relaxed">
                Nenhum compromisso é firmado antes da clareza sobre escopo e
                condições. A ideia é que ninguém começa a trabalhar no escuro —
                nem o cliente, nem o advogado.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={whatsappLink()} external variant="primary" size="lg">
                  Começar pelo WhatsApp
                </ButtonLink>
                <ButtonLink
                  href={`mailto:${site.contact.email}`}
                  variant="secondary"
                  size="lg"
                >
                  Enviar e-mail
                </ButtonLink>
              </div>
            </div>
            <ol className="space-y-6">
              {steps.map((step) => (
                <li
                  key={step.n}
                  className="rounded-2xl border border-green-800/60 bg-green-900/30 p-8"
                >
                  <span className="font-serif text-3xl text-gold-500">
                    {step.n}
                  </span>
                  <h3 className="font-serif text-xl mt-3 text-cream-50">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-cream-200 leading-relaxed">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <TestimonialsSection />

      <Section id="formulario">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
            <div>
              <SectionEyebrow>Envie uma mensagem</SectionEyebrow>
              <SectionTitle className="text-3xl md:text-4xl">
                Prefere escrever? Use o formulário.
              </SectionTitle>
              <GoldRule className="my-8 max-w-[6rem] mx-0" />
              <p className="text-cream-200 leading-relaxed">
                Descreva o caso com o máximo de detalhe que se sentir confortável.
                A mensagem chega diretamente ao escritório e será respondida
                pessoalmente. Confidencialidade garantida.
              </p>
            </div>
            <div className="rounded-2xl border border-green-800/60 bg-green-900/30 p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="endereco">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
            <div>
              <SectionEyebrow>Escritório</SectionEyebrow>
              <SectionTitle className="text-3xl md:text-4xl">
                Lago Norte, Brasília.
              </SectionTitle>
              <GoldRule className="my-8 max-w-[6rem] mx-0" />
              <address className="not-italic text-cream-200 leading-relaxed text-[1.0625rem]">
                {addr.street}
                <br />
                {addr.district}
                <br />
                {addr.city} — {addr.state}
                <br />
                CEP {addr.zip}
              </address>
              <p className="mt-6 text-cream-400 leading-relaxed">
                Atendimento presencial com agendamento prévio. Para clientes
                fora de Brasília, há também a opção de reuniões por vídeo.
              </p>
              <div className="mt-8">
                <ButtonLink
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  external
                  variant="secondary"
                  size="md"
                >
                  Abrir no Google Maps →
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-2xl border border-green-800/60 bg-green-900/40 overflow-hidden aspect-[4/3]">
              <iframe
                title="Mapa do escritório"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
