import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle, GoldRule } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { site, whatsappLink } from "@/lib/site";
import { Accordion } from "@/components/ui/Accordion";
import { getArea } from "@/content/areas";

export const metadata: Metadata = {
  title: "Direito Cível",
  description:
    "Contratos, sucessão, herança, divórcio, questões familiares e direitos do consumidor.",
};

export default function CivelPage() {
  const area = getArea("civel");
  if (!area) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: area.label,
    description: area.summary,
    author: {
      "@type": "Person",
      name: site.lawyer.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={area.eyebrow}
        title={area.label}
        lead={area.summary}
      />

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-lg text-cream-200 leading-relaxed">
              {area.intro}
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="max-w-2xl mb-12">
            <SectionEyebrow>Quando buscar orientação</SectionEyebrow>
            <SectionTitle>Sinais de que é hora de conversar</SectionTitle>
            <GoldRule className="my-8 max-w-[6rem] mx-0" />
          </div>

          <ul className="grid gap-6 md:grid-cols-2 max-w-3xl">
            {area.whenToSeek.map((item, idx) => (
              <li
                key={idx}
                className="rounded-lg border border-green-800/60 bg-green-900/30 p-6"
              >
                <p className="text-cream-200 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl mb-12">
            <SectionEyebrow>Como funciona</SectionEyebrow>
            <SectionTitle>Processo de atuação</SectionTitle>
            <GoldRule className="my-8 max-w-[6rem] mx-0" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            {area.howIActConduct.map((step, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-green-800/60 bg-green-900/20 p-8"
              >
                <span className="inline-block font-serif text-2xl text-gold-500 mb-3">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-cream-50 mb-3">
                  {step.title}
                </h3>
                <p className="text-cream-200 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="max-w-2xl mb-12">
            <SectionEyebrow>Escopo de atuação</SectionEyebrow>
            <SectionTitle>O que cobrimos</SectionTitle>
            <GoldRule className="my-8 max-w-[6rem] mx-0" />
          </div>

          <ul className="grid gap-4 md:grid-cols-2 max-w-3xl">
            {area.scope.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-gold-500 mt-1">→</span>
                <span className="text-cream-200">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl mb-12">
            <SectionEyebrow>Dúvidas comuns</SectionEyebrow>
            <SectionTitle>FAQ</SectionTitle>
            <GoldRule className="my-8 max-w-[6rem] mx-0" />
          </div>

          <div className="max-w-3xl">
            <Accordion items={area.faq} />
          </div>
        </Container>
      </Section>

      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="rounded-2xl border border-gold-500/40 bg-gradient-to-br from-green-900 to-green-950 p-10 md:p-16 text-center">
            <SectionEyebrow>Próximos passos</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 text-cream-50">
              Agende uma conversa.
            </h2>
            <p className="mt-4 text-cream-200 max-w-xl mx-auto">
              Sem compromisso. Sem pressa. Apenas um bate-papo para entender
              melhor como posso ajudar.
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
