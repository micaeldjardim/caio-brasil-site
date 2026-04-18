import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Mensagem enviada",
  description: "Sua mensagem foi recebida com sucesso.",
};

export default function SucessoPage() {
  return (
    <>
      <Section className="min-h-[60vh] flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gold-500/20 border border-gold-500/60">
                <CheckCircle size={32} className="text-gold-500" />
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-cream-50 mb-6">
              Mensagem recebida!
            </h1>

            <p className="text-lg text-cream-200 mb-4 leading-relaxed">
              Obrigado por entrar em contato. Sua mensagem foi recebida com sucesso
              e será respondida pessoalmente em breve.
            </p>

            <p className="text-cream-400 mb-8 leading-relaxed">
              Responderemos dentro do horário comercial (segunda a sexta, 9h às 18h).
              Para assuntos urgentes, recomendamos entrar em contato pelo WhatsApp.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contato" variant="secondary" size="lg">
                Voltar ao contato
              </ButtonLink>
              <ButtonLink href="/" variant="ghost" size="lg">
                Ir para homepage
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
