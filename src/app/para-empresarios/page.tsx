import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle, GoldRule } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CTABlock } from "@/components/sections/CTABlock";
import { segments } from "@/content/segments";

export const metadata: Metadata = {
  title: "Para empresários",
  description:
    "Atuação jurídica pensada a partir do setor: barbearias, salões, clínicas e restaurantes — com leitura das especificidades de cada operação.",
};

const signals = [
  "Modelos híbridos de contratação (CLT + parceria + autônomo).",
  "Alta rotatividade de pessoas na operação.",
  "Cadeia de fornecedores e prestadores recorrentes.",
  "Enquadramento fiscal que evoluiu junto com o negócio.",
  "Regulação específica do setor (sindicatos, conselhos, vigilância).",
];

export default function ParaEmpresariosPage() {
  return (
    <>
      <PageHero
        eyebrow="Para empresários"
        title="O direito lido a partir da operação, não do manual."
        lead="Boa parte dos problemas jurídicos que atingem pequenas e médias empresas são silenciosos antes de explodirem. Esta é uma leitura por setor dos pontos que pedem atenção — e do que se pode estruturar antes do litígio."
      />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {segments.map((seg, i) => (
              <Link
                key={seg.slug}
                href={`/para-empresarios/${seg.slug}`}
                className="group relative rounded-2xl border border-green-800/60 bg-green-900/40 p-10 transition-all hover:border-gold-500/60 hover:bg-green-900/70 overflow-hidden"
              >
                <span className="absolute top-6 right-8 font-serif text-5xl text-gold-500/20 group-hover:text-gold-500/40 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-gold-500">
                  {seg.eyebrow}
                </span>
                <h2 className="font-serif text-3xl mt-4 text-cream-50 group-hover:text-gold-300 transition-colors">
                  {seg.label}
                </h2>
                <GoldRule className="my-6 max-w-[4rem] mx-0" />
                <p className="text-cream-200 leading-relaxed">
                  {seg.summary}
                </p>
                <p className="mt-8 text-sm text-gold-500 group-hover:text-gold-300">
                  Ler análise do setor →
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] items-start">
            <div>
              <SectionEyebrow>Quando o acompanhamento faz diferença</SectionEyebrow>
              <SectionTitle className="text-3xl md:text-4xl">
                Sinais de que o negócio precisa de uma leitura jurídica.
              </SectionTitle>
              <GoldRule className="my-8 max-w-[6rem] mx-0" />
              <p className="text-cream-200 leading-relaxed">
                Não é o porte da empresa que indica a necessidade de orientação
                — é a complexidade das relações que ela mantém. Abaixo, os
                indicadores mais recorrentes entre os clientes do escritório.
              </p>
            </div>
            <ul className="space-y-4">
              {signals.map((s) => (
                <li
                  key={s}
                  className="rounded-xl border border-green-800/60 bg-green-900/30 px-6 py-5 text-cream-200 leading-relaxed"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Leitura da operação",
                body:
                  "Primeiro movimento: entender como a empresa de fato funciona — quem contrata, quem executa, como se registra o trabalho, como se cobra.",
              },
              {
                n: "02",
                title: "Mapeamento de risco",
                body:
                  "Identificação das frentes que geram exposição hoje — contratos, procedimentos, enquadramentos, comunicação com equipe e fornecedores.",
              },
              {
                n: "03",
                title: "Plano de ajuste",
                body:
                  "Definição do que ajustar de imediato, do que é prioridade estrutural e do que é acompanhamento contínuo, com prazos claros.",
              },
            ].map((item) => (
              <article key={item.n}>
                <span className="font-serif text-4xl text-gold-500">
                  {item.n}
                </span>
                <GoldRule className="my-5 max-w-[4rem] mx-0" />
                <h3 className="font-serif text-2xl text-cream-50">
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

      <CTABlock
        eyebrow="Para o seu setor"
        title="Cada operação pede sua própria leitura."
        lead="Mesmo quando o setor não está listado aqui, o método é o mesmo. A conversa inicial serve, antes de tudo, para entender o que a sua operação precisa de verdade."
      />
    </>
  );
}
