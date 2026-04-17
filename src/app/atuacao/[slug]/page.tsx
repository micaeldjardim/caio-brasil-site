import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle, GoldRule } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CTABlock } from "@/components/sections/CTABlock";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { areas, getArea } from "@/content/areas";
import { whatsappLink } from "@/lib/site";

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/atuacao/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: area.label,
    description: area.summary,
  };
}

export default async function AtuacaoDetailPage(
  props: PageProps<"/atuacao/[slug]">,
) {
  const { slug } = await props.params;
  const area = getArea(slug);
  if (!area) notFound();

  const related = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero
        eyebrow={area.eyebrow}
        title={area.label}
        lead={area.summary}
      />

      <Section className="pt-0">
        <Container size="prose">
          <p className="text-[1.0625rem] leading-[1.8] text-cream-200">
            {area.intro}
          </p>
        </Container>
      </Section>

      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionEyebrow>Quando faz sentido procurar</SectionEyebrow>
              <SectionTitle className="text-3xl md:text-4xl">
                Momentos em que a orientação jurídica faz diferença.
              </SectionTitle>
              <GoldRule className="my-8 max-w-[6rem] mx-0" />
              <ul className="space-y-4">
                {area.whenToSeek.map((item) => (
                  <li
                    key={item}
                    className="relative pl-6 text-cream-200 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.8em] before:w-3 before:h-px before:bg-gold-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionEyebrow>Escopo</SectionEyebrow>
              <SectionTitle className="text-3xl md:text-4xl">
                Principais atuações dentro dessa frente.
              </SectionTitle>
              <GoldRule className="my-8 max-w-[6rem] mx-0" />
              <div className="grid gap-3 sm:grid-cols-2">
                {area.scope.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-green-800/60 bg-green-900/40 px-5 py-4 text-sm text-cream-200 leading-snug"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl">
            <SectionEyebrow>Como conduzo</SectionEyebrow>
            <SectionTitle>Um método aplicado caso a caso.</SectionTitle>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-14">
            {area.howIActConduct.map((step, i) => (
              <article
                key={step.title}
                className="rounded-2xl border border-green-800/60 bg-green-900/40 p-8 hover:border-gold-500/60 transition-colors"
              >
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-500 font-serif">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl mt-5 text-cream-50">
                  {step.title}
                </h3>
                <p className="mt-3 text-cream-200 leading-relaxed">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container size="prose">
          <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
          <SectionTitle className="mb-10">
            Dúvidas comuns antes do primeiro contato.
          </SectionTitle>
          <Accordion items={area.faq} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <SectionEyebrow>Outras áreas</SectionEyebrow>
              <SectionTitle className="text-3xl md:text-4xl">
                Frentes que dialogam com essa.
              </SectionTitle>
            </div>
            <ButtonLink href="/atuacao" variant="ghost">
              Ver todas as áreas →
            </ButtonLink>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/atuacao/${a.slug}`}
                className="group rounded-xl border border-green-800/60 bg-green-900/40 p-6 transition-all hover:border-gold-500/60"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gold-500">
                  {a.eyebrow}
                </span>
                <h3 className="font-serif text-xl mt-3 text-cream-50 group-hover:text-gold-300">
                  {a.label}
                </h3>
                <p className="mt-3 text-sm text-cream-400 group-hover:text-cream-200">
                  Saber mais →
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-green-950/60 pt-0">
        <Container>
          <div className="rounded-2xl border border-gold-500/40 bg-gradient-to-br from-green-900 to-green-950 p-10 md:p-14">
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
              <div>
                <SectionEyebrow>Conversemos sobre {area.label.toLowerCase()}</SectionEyebrow>
                <h2 className="font-serif text-3xl md:text-4xl mt-4 text-cream-50">
                  Cada caso começa com uma conversa.
                </h2>
                <p className="mt-5 text-cream-200 leading-relaxed max-w-xl">
                  Agende um primeiro contato para entender o caso, apontar
                  caminhos e definir, juntos, o melhor formato de atuação.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <ButtonLink href="/contato" variant="primary" size="lg">
                  Ir para o contato
                </ButtonLink>
                <ButtonLink
                  href={whatsappLink(
                    `Olá, gostaria de falar com o Dr. Caio Brasil sobre ${area.label}.`,
                  )}
                  external
                  variant="secondary"
                  size="lg"
                >
                  WhatsApp direto
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTABlock
        eyebrow="Conteúdo relacionado"
        title="Publicações sobre direito aplicado."
        lead="Textos curtos sobre temas que aparecem com frequência na rotina de quem toca um negócio — escritos para serem lidos antes do problema."
      />
    </>
  );
}
