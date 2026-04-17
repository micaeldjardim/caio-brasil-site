import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle, GoldRule } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/NewsletterForm";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessDiagram } from "@/components/sections/ProcessDiagram";
import { site, whatsappLink } from "@/lib/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: "Caio Brasil",
    image: "https://caiobrasil.adv.br/logo.jpg",
    description:
      "Advogado especialista em direito trabalhista, cível, criminal e tributário em Brasília, DF.",
    url: "https://caiobrasil.adv.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SHIN CA 11, Bloco E, Junta B, Sala 307, Pavimento 3",
      addressLocality: "Brasília",
      addressRegion: "DF",
      postalCode: "71.503-511",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Legal Services",
      telephone: "+55-61-98181-1620",
      email: "contato@caiobrasil.adv.br",
      areaServed: "BR",
    },
    areaOfLaw: [
      "Direito Trabalhista",
      "Direito Cível",
      "Direito Criminal",
      "Direito Tributário",
    ],
    identifier: "DF 46.634",
    legalName: "Antonio Brasil Sociedade Individual de Advocacia",
    taxID: "48.166.125/0001-12",
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <Section className="pt-28 md:pt-32 pb-20 md:pb-28 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_60%)]"
        />
        <Container>
          <div className="relative max-w-3xl animate-fade-up">
            <SectionEyebrow>Advocacia · Brasília — DF</SectionEyebrow>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mt-6 text-cream-50">
              {site.tagline}
            </h1>
            <GoldRule className="my-8 max-w-[8rem] mx-0" />
            <p className="text-lg md:text-xl text-cream-200 leading-relaxed max-w-2xl">
              Atuação preventiva e estratégica em direito trabalhista, cível,
              criminal e tributário. Acompanhamento próximo, orientação clara
              e decisões bem fundamentadas para quem toca um negócio.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/atuacao" variant="primary" size="lg">
                Conhecer a atuação
              </ButtonLink>
              <ButtonLink href={whatsappLink()} external variant="secondary" size="lg">
                Falar pelo WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pilares */}
      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="max-w-2xl">
            <SectionEyebrow>Como trabalho</SectionEyebrow>
            <SectionTitle>
              Prevenir antes de remediar. Acompanhar antes de reagir.
            </SectionTitle>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-14">
            {[
              {
                n: "01",
                title: "Preventivo",
                body:
                  "Análise de contratos, estruturação de documentos e procedimentos que evitam litígios antes de eles existirem.",
              },
              {
                n: "02",
                title: "Estratégico",
                body:
                  "Leitura jurídica das decisões do dia-a-dia do negócio, não apenas resposta a problemas já instalados.",
              },
              {
                n: "03",
                title: "Próximo",
                body:
                  "Comunicação direta com o cliente, sem camadas. As portas do escritório estão sempre abertas.",
              },
            ].map((item) => (
              <article
                key={item.n}
                className="rounded-2xl border border-green-800/60 bg-green-900/40 p-8 hover:border-gold-500/60 transition-colors"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-500 font-serif text-lg">
                  {item.n}
                </span>
                <h3 className="font-serif text-2xl mt-5 text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-cream-200 leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Áreas de atuação */}
      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <SectionEyebrow>Áreas de atuação</SectionEyebrow>
              <SectionTitle>
                Duas frentes, uma mesma atenção ao detalhe.
              </SectionTitle>
            </div>
            <ButtonLink href="/atuacao" variant="ghost">
              Ver as áreas →
            </ButtonLink>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mt-12 max-w-2xl">
            {site.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="group rounded-xl border border-green-800/60 bg-green-900/40 p-6 transition-all hover:border-gold-500/60 hover:bg-green-900/70"
              >
                <h3 className="font-serif text-xl text-cream-50 group-hover:text-gold-300 transition-colors">
                  {area.label}
                </h3>
                <p className="mt-3 text-sm text-cream-400 group-hover:text-cream-200 transition-colors">
                  Saber mais →
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <ProcessDiagram />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Newsletter */}
      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <SectionEyebrow>Acompanhamento</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 text-cream-50 leading-tight">
                Fique por dentro das novidades.
              </h2>
              <p className="mt-5 text-cream-200 leading-relaxed">
                Textos, análises e atualizações sobre direito aplicado para quem toca um negócio — sem spam, sem compromisso.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Container>
      </Section>

      {/* CTA final */}
      <Section className="bg-green-950/60">
        <Container>
          <div className="rounded-2xl border border-gold-500/40 bg-gradient-to-br from-green-900 to-green-950 p-10 md:p-16 text-center">
            <SectionEyebrow>Conversemos</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-cream-50">
              As portas do escritório estão abertas.
            </h2>
            <p className="mt-5 text-cream-200 max-w-xl mx-auto">
              Agende uma conversa sem compromisso para entender como posso
              contribuir com a sua operação.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contato" variant="primary" size="lg">
                Ir para o contato
              </ButtonLink>
              <ButtonLink href={whatsappLink()} external variant="secondary" size="lg">
                WhatsApp direto
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
