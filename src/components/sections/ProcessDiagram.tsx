import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle, GoldRule } from "@/components/ui/Section";
import { MessageSquare, CheckCircle, Handshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Conversa inicial",
    description:
      "Você expõe o caso, suas preocupações e o que espera. Confidencialidade garantida.",
  },
  {
    icon: CheckCircle,
    title: "Diagnóstico e proposta",
    description:
      "Análise clara do cenário, riscos, alternativas disponíveis e recomendação de como proceder.",
  },
  {
    icon: Handshake,
    title: "Acompanhamento estruturado",
    description:
      "Execução do plano, seja preventivo, estratégico ou reativo — sempre com transparência.",
  },
];

export function ProcessDiagram() {
  return (
    <Section className="bg-green-950/40 border-y border-green-800/60">
      <Container>
        <div className="max-w-2xl mb-14">
          <SectionEyebrow>Como funciona</SectionEyebrow>
          <SectionTitle>
            Três etapas entre a dúvida e a ação.
          </SectionTitle>
          <GoldRule className="my-8 max-w-[6rem] mx-0" />
          <p className="text-cream-200 leading-relaxed">
            O acompanhamento jurídico não é uma caixa preta. Cada passo é explicado, cada custo é claro, e cada decisão é sua.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-500 mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-serif text-xl text-cream-50 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-cream-200 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-gold-500/60 to-transparent"
                  />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
