import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle, GoldRule } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CTABlock } from "@/components/sections/CTABlock";
import { ButtonLink } from "@/components/ui/Button";
import { segments, getSegment } from "@/content/segments";
import { getPost } from "@/content/posts";
import { whatsappLink } from "@/lib/site";

export async function generateStaticParams() {
  return segments.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/para-empresarios/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const seg = getSegment(slug);
  if (!seg) return {};
  return {
    title: seg.label,
    description: seg.summary,
  };
}

export default async function SegmentDetailPage(
  props: PageProps<"/para-empresarios/[slug]">,
) {
  const { slug } = await props.params;
  const seg = getSegment(slug);
  if (!seg) notFound();

  const related = segments.filter((s) => s.slug !== seg.slug);
  const relatedPosts = seg.relatedPosts
    .map((s) => getPost(s))
    .filter((p): p is NonNullable<typeof p> => !!p);

  return (
    <>
      <PageHero
        eyebrow={seg.eyebrow}
        title={seg.label}
        lead={seg.summary}
      />

      <Section className="pt-0">
        <Container size="prose">
          <p className="text-[1.0625rem] leading-[1.8] text-cream-200">
            {seg.intro}
          </p>
        </Container>
      </Section>

      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="max-w-2xl">
            <SectionEyebrow>Pontos de atenção</SectionEyebrow>
            <SectionTitle>
              Onde o risco costuma estar — e passa despercebido.
            </SectionTitle>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-14">
            {seg.risks.map((risk, i) => (
              <article
                key={risk.title}
                className="rounded-2xl border border-green-800/60 bg-green-900/40 p-8 hover:border-gold-500/60 transition-colors"
              >
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gold-500/40 text-gold-500 font-serif text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl mt-5 text-cream-50">
                  {risk.title}
                </h3>
                <p className="mt-3 text-cream-200 leading-relaxed">
                  {risk.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] items-start">
            <div className="md:sticky md:top-28">
              <SectionEyebrow>Boas práticas</SectionEyebrow>
              <SectionTitle className="text-3xl md:text-4xl">
                O que se estrutura antes do problema aparecer.
              </SectionTitle>
              <GoldRule className="my-8 max-w-[6rem] mx-0" />
              <p className="text-cream-200 leading-relaxed">
                Nenhuma prática isolada resolve tudo. O que protege o negócio é
                a coerência entre o contrato, o procedimento interno e a forma
                como a operação se comunica no dia a dia.
              </p>
            </div>
            <ol className="space-y-5">
              {seg.goodPractices.map((item, i) => (
                <li
                  key={item}
                  className="relative rounded-xl border border-green-800/60 bg-green-900/30 p-6 pl-20"
                >
                  <span className="absolute left-6 top-6 inline-flex items-center justify-center h-9 w-9 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-500 font-serif text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-cream-200 leading-relaxed">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {relatedPosts.length > 0 && (
        <Section className="bg-green-950/40 border-y border-green-800/60">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-xl">
                <SectionEyebrow>Leitura relacionada</SectionEyebrow>
                <SectionTitle className="text-3xl md:text-4xl">
                  Textos que conversam com esse setor.
                </SectionTitle>
              </div>
              <ButtonLink href="/publicacoes" variant="ghost">
                Ver todas as publicações →
              </ButtonLink>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/publicacoes/${post.slug}`}
                  className="group rounded-2xl border border-green-800/60 bg-green-900/40 p-8 transition-all hover:border-gold-500/60"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-500">
                    {post.category} · {post.readingTime}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl mt-4 text-cream-50 group-hover:text-gold-300 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-cream-200 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <p className="mt-6 text-sm text-gold-500 group-hover:text-gold-300">
                    Ler texto completo →
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <SectionEyebrow>Outros setores</SectionEyebrow>
              <SectionTitle className="text-3xl md:text-4xl">
                Operações que enfrentam desafios próximos.
              </SectionTitle>
            </div>
            <ButtonLink href="/para-empresarios" variant="ghost">
              Ver todos os setores →
            </ButtonLink>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/para-empresarios/${s.slug}`}
                className="group rounded-xl border border-green-800/60 bg-green-900/40 p-6 transition-all hover:border-gold-500/60"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gold-500">
                  {s.eyebrow}
                </span>
                <h3 className="font-serif text-xl mt-3 text-cream-50 group-hover:text-gold-300">
                  {s.label}
                </h3>
                <p className="mt-3 text-sm text-cream-400 group-hover:text-cream-200 line-clamp-3">
                  {s.summary}
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
                <SectionEyebrow>
                  Conversar sobre {seg.label.toLowerCase()}
                </SectionEyebrow>
                <h2 className="font-serif text-3xl md:text-4xl mt-4 text-cream-50">
                  A leitura do seu caso começa numa conversa.
                </h2>
                <p className="mt-5 text-cream-200 leading-relaxed max-w-xl">
                  Agende um primeiro contato para diagnosticar a operação e
                  entender, em termos concretos, o que precisa ser ajustado.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <ButtonLink href="/contato" variant="primary" size="lg">
                  Ir para o contato
                </ButtonLink>
                <ButtonLink
                  href={whatsappLink(
                    `Olá, toco um(a) ${seg.label.toLowerCase()} e gostaria de conversar com o Dr. Caio Brasil.`,
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

      <CTABlock />
    </>
  );
}
