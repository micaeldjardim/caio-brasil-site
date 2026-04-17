import { Container } from "@/components/ui/Container";
import { GoldRule } from "@/components/ui/Section";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]"
      />
      <Container>
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-gold-500">
            {eyebrow}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mt-5 text-cream-50">
            {title}
          </h1>
          <GoldRule className="my-8 max-w-[8rem] mx-0" />
          {lead && (
            <p className="text-lg text-cream-200 leading-relaxed max-w-2xl">
              {lead}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
