import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, GoldRule } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Section className="pt-28 md:pt-32 pb-20 md:pb-28 min-h-[70vh] flex items-center">
        <Container>
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gold-500/10 border border-gold-500/40 mb-8">
              <span className="font-serif text-4xl text-gold-500">404</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] mt-6 text-cream-50">
              Página não encontrada.
            </h1>
            <GoldRule className="my-8 max-w-[8rem] mx-0" />
            <p className="text-lg text-cream-200 leading-relaxed max-w-xl">
              Pode ser que o endereço mudou, ou você seguiu um link desatualizado. A boa notícia é que o escritório continua no mesmo lugar.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/" variant="primary" size="lg">
                Voltar ao início
              </ButtonLink>
              <ButtonLink href="/contato" variant="secondary" size="lg">
                Falar com a gente
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
