import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle, GoldRule } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { site, whatsappLink } from "@/lib/site";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "FAQ — Processo de Contato",
  description:
    "Perguntas frequentes sobre como funciona o primeiro contato com Caio Brasil Advocacia.",
};

const faqs = [
  {
    q: "Como funciona o primeiro contato?",
    a: "O processo tem três etapas: você entra em contato (WhatsApp ou e-mail) com um resumo do caso; agendamos uma conversa para entender melhor; e, se fizer sentido, propomos um formato de atuação com escopo e condições bem definidas.",
  },
  {
    q: "Preciso pagar algo para conversar?",
    a: "Não. A primeira conversa é gratuita e sem compromisso. Serve para ambos — você conhece como trabalho, eu entendo melhor o seu caso — e decidimos juntos se faz sentido seguir adiante.",
  },
  {
    q: "Qual é o tempo de resposta?",
    a: "Durante o horário comercial (segunda a sexta, 9h às 18h), a resposta é rápida. Fora desse horário, mensagens são respondidas no próximo dia útil. Para assuntos urgentes, sempre indicar isso na mensagem inicial.",
  },
  {
    q: "Posso conversar pessoalmente ou precisa ser por WhatsApp/e-mail?",
    a: "Pode começar do jeito que se sentir mais confortável. Se preferir conversa presencial, agendamos um horário no escritório. Para clientes fora de Brasília, também fazemos reuniões por vídeo.",
  },
  {
    q: "Qual informação devo enviar na primeira mensagem?",
    a: "O essencial é um resumo claro do caso — o que aconteceu, quem está envolvido, o que você espera. Não precisa ser detalhado; a ideia é que eu tenha o bastante para sugerir um primeiro encontro e alinhar expectativas.",
  },
  {
    q: "Como funciona o acompanhamento depois que começamos a trabalhar?",
    a: "Depende do formato que definimos. Pode ser consultoria pontual (você me procura quando surge dúvida), acompanhamento contínuo (revisões periódicas) ou atuação em caso específico (uma ação judicial, por exemplo). Tudo fica claro no contrato de prestação de serviços.",
  },
  {
    q: "Qual é a forma de pagamento?",
    a: "Variam conforme o tipo de trabalho — honorários por atuação (quando é uma ação específica), horários (acompanhamento contínuo), ou fixo mensal (para operações que exigem suporte regular). Tudo fica acordado por escrito antes de qualquer compromisso.",
  },
  {
    q: "Meu caso é sigiloso?",
    a: "Totalmente. Sigilo profissional é um direito seu e uma obrigação minha — começa no primeiro contato e se estende a todo o acompanhamento. Nada do que você me comunica é compartilhado sem autorização.",
  },
  {
    q: "E se eu não tiver certeza se o meu caso é da sua área?",
    a: "Sem problema. Se durante a conversa ficar claro que o trabalho está fora de minhas áreas (Trabalhista e Cível), indico colegas de confiança. O importante é você ter a orientação certa, ainda que não seja comigo.",
  },
  {
    q: "Quanto tempo leva para resolver um caso?",
    a: "Depende muito do tipo. Um acompanhamento preventivo pode ser contínuo e indefinido. Um contrato bem estruturado resolve em dias. Uma ação judicial pode levar meses ou anos. Na conversa inicial, faço uma leitura realista dos prazos.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Perguntas sobre o processo de contato"
        lead="Tudo que você precisa saber para dar o primeiro passo — sem mistério, sem surpresas."
      />

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqs} />
          </div>
        </Container>
      </Section>

      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="rounded-2xl border border-gold-500/40 bg-gradient-to-br from-green-900 to-green-950 p-10 md:p-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-cream-50">
              Ainda com dúvidas?
            </h2>
            <p className="mt-4 text-cream-200 max-w-xl mx-auto">
              O melhor é conversar. Sem compromisso, sem pressa.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink("Gostaria de tirar algumas dúvidas sobre o processo.")}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gold-500 text-green-950 font-semibold hover:bg-gold-400 transition-colors"
              >
                Chamar no WhatsApp
              </a>
              <a
                href={`mailto:${site.contact.email}?subject=Dúvidas sobre o processo`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gold-500/60 text-gold-500 font-semibold hover:bg-gold-500/10 transition-colors"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
