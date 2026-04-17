import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Daniel R.",
    title: "Proprietário de Barbearia",
    content:
      "Não sabia se meus contratos com os barbeiros tavam protegendo a empresa. O Caio ajudou a estruturar tudo e me deu clareza do que tava certo e errado. Desde então, durmo melhor.",
    rating: 5,
  },
  {
    name: "Marina S.",
    title: "Sócia de Salão de Beleza",
    content:
      "Recebemos uma notificação trabalhista e a gente tava perdido. O acompanhamento jurídico fez toda a diferença — não só na defesa, mas em como estruturar a operação depois.",
    rating: 5,
  },
  {
    name: "Felipe C.",
    title: "Dono de Restaurante",
    content:
      "Crescemos rápido e começou a ficar confuso quem era funcionário, quem era parceiro. A consultoria preventiva economizou problemas que custavam caro.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <Section className="bg-green-950/40 border-y border-green-800/60">
      <Container>
        <div className="max-w-2xl mb-14">
          <SectionEyebrow>Quem passa pelo escritório</SectionEyebrow>
          <SectionTitle>
            Empresários que chegam com dúvidas e saem com segurança.
          </SectionTitle>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-green-800/60 bg-green-900/40 p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold-500 text-gold-500"
                  />
                ))}
              </div>
              <p className="text-cream-200 leading-relaxed mb-6">
                "{t.content}"
              </p>
              <div>
                <p className="font-serif text-cream-50 text-sm">{t.name}</p>
                <p className="text-xs text-cream-400">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
