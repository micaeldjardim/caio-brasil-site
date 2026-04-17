import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";

export function CTABlock({
  eyebrow = "Conversemos",
  title = "As portas do escritório estão abertas.",
  lead = "Agende uma conversa sem compromisso para entender como posso contribuir com a sua operação.",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <Section className="bg-green-950/60">
      <Container>
        <div className="rounded-2xl border border-gold-500/40 bg-gradient-to-br from-green-900 to-green-950 p-10 md:p-16 text-center">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-cream-50">
            {title}
          </h2>
          <p className="mt-5 text-cream-200 max-w-xl mx-auto leading-relaxed">
            {lead}
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
  );
}
