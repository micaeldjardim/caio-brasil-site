import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, GoldRule } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CTABlock } from "@/components/sections/CTABlock";
import { posts, formatDate } from "@/content/posts";

export const metadata: Metadata = {
  title: "Publicações",
  description:
    "Textos sobre direito aplicado para empresários — contratos, vínculo empregatício, parceria e gestão de risco em barbearias, salões, clínicas e restaurantes.",
  alternates: { canonical: "/publicacoes" },
};

export default function PublicacoesPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Publicações"
        title="Textos para serem lidos antes do problema."
        lead="Análises breves sobre temas que aparecem com frequência na rotina de quem toca um negócio. Nenhuma delas substitui orientação jurídica — mas todas ajudam a entender o que perguntar."
      />

      {featured && (
        <Section className="pt-0">
          <Container>
            <Link
              href={`/publicacoes/${featured.slug}`}
              className="group block rounded-2xl border border-gold-500/40 bg-gradient-to-br from-green-900 to-green-950 overflow-hidden transition-all hover:border-gold-500/80"
              aria-label={featured.title}
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[22rem] overflow-hidden">
                  <Image
                    src={featured.cover.src}
                    alt={featured.cover.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-tr from-green-950/60 via-transparent to-transparent"
                  />
                </div>
                <div className="p-10 md:p-14">
                  <SectionEyebrow>Em destaque</SectionEyebrow>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-cream-400">
                    <span className="text-gold-500">{featured.category}</span>
                    <span>·</span>
                    <time dateTime={featured.date}>
                      {formatDate(featured.date)}
                    </time>
                    <span>·</span>
                    <span>{featured.readingTime}</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl mt-5 text-cream-50 group-hover:text-gold-300 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <GoldRule className="my-7 max-w-[4rem] mx-0" />
                  <p className="text-cream-200 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <p className="mt-8 text-sm text-gold-500 group-hover:text-gold-300">
                    Ler texto completo →
                  </p>
                </div>
              </div>
            </Link>
          </Container>
        </Section>
      )}

      {rest.length > 0 && (
        <Section className="pt-0">
          <Container>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/publicacoes/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-green-800/60 bg-green-900/40 overflow-hidden transition-all hover:border-gold-500/60 hover:bg-green-900/70"
                  aria-label={post.title}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.cover.src}
                      alt={post.cover.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-cream-400">
                      <span className="text-gold-500">{post.category}</span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-4 text-cream-50 group-hover:text-gold-300 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <GoldRule className="my-5 max-w-[3rem] mx-0" />
                    <p className="text-cream-200 leading-relaxed text-sm flex-1">
                      {post.excerpt}
                    </p>
                    <p className="mt-6 text-xs text-cream-400">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTABlock
        eyebrow="Acompanhamento contínuo"
        title="Quando ler não basta."
        lead="Os textos dão a introdução, mas cada caso tem particularidades que só aparecem na conversa. Se o tema tocou algo da sua operação, vale conversar."
      />
    </>
  );
}
