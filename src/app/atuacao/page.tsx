import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle, GoldRule } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CTABlock } from "@/components/sections/CTABlock";
import { ButtonLink } from "@/components/ui/Button";
import { areas } from "@/content/areas";

export const metadata: Metadata = {
  title: "Áreas de atuação",
  description:
    "Atuação preventiva e estratégica em direito trabalhista e cível em Brasília.",
};

export default function AtuacaoPage() {
  const [primary, secondary] = areas;

  return (
    <>
      <PageHero
        eyebrow="Atuação"
        title="Duas frentes, uma mesma atenção ao detalhe."
        lead="O escritório se concentra em direito trabalhista e cível — áreas que, na prática, conversam entre si o tempo todo. Boa parte dos casos empresariais passa por ambas em algum momento."
      />

      <Section className="pt-0">
        <Container>
          <article
            className="group relative rounded-2xl border border-gold-500/40 bg-gradient-to-br from-green-900 to-green-950 p-10 md:p-14 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.08),transparent_60%)]"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] items-start">
              <div>
                <SectionEyebrow>{primary.eyebrow}</SectionEyebrow>
                <h2 className="font-serif text-3xl md:text-4xl mt-4 text-cream-50 leading-tight">
                  {primary.label}
                </h2>
                <GoldRule className="my-6 max-w-[6rem] mx-0" />
                <p className="text-cream-200 leading-relaxed text-[1.0625rem]">
                  {primary.summary}
                </p>
                <p className="text-cream-400 leading-relaxed mt-4">
                  A maior parte das operações empresariais começa, em algum
                  momento, passando por aqui — pela forma como as pessoas são
                  contratadas, pelos contratos de parceria, pelos procedimentos
                  internos que estruturam o dia a dia da empresa.
                </p>
                <div className="mt-8">
                  <ButtonLink
                    href={`/${primary.slug}`}
                    variant="primary"
                    size="md"
                  >
                    Ver detalhes →
                  </ButtonLink>
                </div>
              </div>
              <ul className="space-y-3 border-l border-gold-500/30 pl-6">
                {primary.scope.slice(0, 5).map((item) => (
                  <li key={item} className="text-cream-200 leading-relaxed text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {secondary && (
            <div className="mt-10">
              <Link
                href={`/${secondary.slug}`}
                className="group rounded-2xl border border-green-800/60 bg-green-900/40 p-8 transition-all hover:border-gold-500/60 hover:bg-green-900/70"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gold-500">
                  {secondary.eyebrow}
                </span>
                <h3 className="font-serif text-2xl mt-4 text-cream-50 group-hover:text-gold-300 transition-colors">
                  {secondary.label}
                </h3>
                <GoldRule className="my-5 max-w-[4rem] mx-0" />
                <p className="text-cream-200 leading-relaxed text-sm">
                  {secondary.summary}
                </p>
                <p className="mt-6 text-sm text-gold-500 group-hover:text-gold-300">
                  Ver detalhes →
                </p>
              </Link>
            </div>
          )}
        </Container>
      </Section>

      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] items-start">
            <div>
              <SectionEyebrow>Como trabalho</SectionEyebrow>
              <SectionTitle>Preventivo primeiro. Contencioso quando preciso.</SectionTitle>
            </div>
            <div className="space-y-5 text-cream-200 leading-relaxed text-[1.0625rem]">
              <p>
                A maioria dos clientes chega ao escritório em um de dois
                momentos: antes do problema existir, para estruturar a operação
                com segurança, ou depois que ele apareceu, buscando defesa
                técnica. As duas entradas são legítimas — mas produzem tipos
                diferentes de trabalho.
              </p>
              <p>
                No modo preventivo, a atuação é silenciosa e contínua: revisão
                de contratos, análise de procedimentos, consultoria pontual para
                decisões que envolvem risco jurídico. No modo contencioso, a
                postura muda para a construção da melhor defesa possível nos
                autos, com a mesma leitura estratégica.
              </p>
              <p className="text-cream-400">
                Em qualquer das frentes, o compromisso é o mesmo: comunicação
                clara, decisões bem fundamentadas e presença real em cada etapa.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTABlock />
    </>
  );
}
