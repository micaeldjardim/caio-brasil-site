import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, GoldRule } from "@/components/ui/Section";
import { Prose } from "@/components/ui/Prose";
import { CTABlock } from "@/components/sections/CTABlock";
import { ButtonLink } from "@/components/ui/Button";
import { posts, getPost, formatDate } from "@/content/posts";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/publicacoes/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${site.url}/publicacoes/${post.slug}`;
  const cover = `${site.url}${post.cover.src}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [site.lawyer.name],
      siteName: site.name,
      locale: "pt_BR",
      images: [
        {
          url: cover,
          width: post.cover.width,
          height: post.cover.height,
          alt: post.cover.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [cover],
    },
  };
}

export default async function PostPage(
  props: PageProps<"/publicacoes/[slug]">,
) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const url = `${site.url}/publicacoes/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`${site.url}${post.cover.src}`],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pt-BR",
    articleSection: post.category,
    author: {
      "@type": "Person",
      name: site.lawyer.name,
      url: site.url,
    },
    publisher: {
      "@type": "LegalService",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]"
          />
          <Container size="prose">
            <div className="animate-fade-up">
              <Link
                href="/publicacoes"
                className="text-xs uppercase tracking-[0.2em] text-gold-500 hover:text-gold-300 transition-colors"
              >
                ← Publicações
              </Link>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-cream-400">
                <span className="text-gold-500">{post.category}</span>
                <span>·</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readingTime} de leitura</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl mt-6 text-cream-50 leading-[1.1]">
                {post.title}
              </h1>
              <GoldRule className="my-8 max-w-[8rem] mx-0" />
              <p className="text-lg text-cream-200 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </Container>
        </header>

        <Container>
          <figure className="relative overflow-hidden rounded-2xl border border-green-800/60 bg-green-950 max-w-5xl mx-auto">
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              width={post.cover.width}
              height={post.cover.height}
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              className="w-full h-auto"
            />
            {post.cover.credit && (
              <figcaption className="absolute bottom-3 right-4 text-[0.65rem] uppercase tracking-[0.2em] text-cream-50/70 bg-green-950/60 backdrop-blur px-3 py-1 rounded-full">
                {post.cover.credit}
              </figcaption>
            )}
          </figure>
        </Container>

        <Section className="pt-12 md:pt-16">
          <Container size="prose">
            <Prose blocks={post.content} />
          </Container>
        </Section>

        <Section className="pt-0">
          <Container size="prose">
            <div className="rounded-2xl border border-gold-500/30 bg-green-950/60 p-8 md:p-10">
              <SectionEyebrow>Nota final</SectionEyebrow>
              <p className="mt-4 text-cream-200 leading-relaxed">
                Este texto é uma introdução ao tema e não substitui orientação
                jurídica aplicada ao seu caso concreto. Se a leitura tocou algo
                da sua operação, a próxima etapa natural é conversar.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/contato" variant="primary" size="md">
                  Agendar conversa
                </ButtonLink>
                <ButtonLink href="/publicacoes" variant="ghost" size="md">
                  Ler outras publicações →
                </ButtonLink>
              </div>
            </div>
          </Container>
        </Section>
      </article>

      {related.length > 0 && (
        <Section className="bg-green-950/40 border-y border-green-800/60">
          <Container>
            <div className="max-w-xl mb-12">
              <SectionEyebrow>Continuar lendo</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 text-cream-50 leading-tight">
                Textos relacionados.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/publicacoes/${p.slug}`}
                  className="group rounded-2xl border border-green-800/60 bg-green-900/40 p-8 transition-all hover:border-gold-500/60"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-500">
                    {p.category} · {p.readingTime}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl mt-4 text-cream-50 group-hover:text-gold-300 transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-cream-200 leading-relaxed text-sm">
                    {p.excerpt}
                  </p>
                  <p className="mt-6 text-sm text-gold-500 group-hover:text-gold-300">
                    Ler →
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTABlock />
    </>
  );
}
