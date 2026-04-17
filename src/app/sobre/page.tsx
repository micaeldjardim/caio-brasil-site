import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle, GoldRule } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CTABlock } from "@/components/sections/CTABlock";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Timeline } from "@/components/ui/Timeline";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Caio Brasil — advocacia preventiva e estratégica em Brasília. Formação, trajetória e forma de atuar.",
};

const principles = [
  {
    title: "Presença, não pressa",
    body:
      "Toda decisão importante merece tempo de escuta. O cliente que chega quer resolver, mas antes precisa ser entendido.",
  },
  {
    title: "Clareza antes de técnica",
    body:
      "O direito é, antes de tudo, uma linguagem de decisões. Explicar o caminho em termos claros faz parte do trabalho.",
  },
  {
    title: "Prevenção como postura",
    body:
      "A maior parte dos litígios que atravessam o escritório poderia ter sido evitada. Essa constatação orienta a rotina do trabalho.",
  },
  {
    title: "Discrição estrutural",
    body:
      "Cada cliente, cada empresa, cada caso tem uma história que não precisa — e muitas vezes não deve — virar narrativa pública.",
  },
];

const journey = [
  {
    year: "Formação",
    title: "Bacharel em Direito pelo UniCEUB",
    description:
      "Formação voltada desde cedo para o diálogo entre as áreas do direito que orientam o dia a dia das empresas — trabalhista, cível, tributário e criminal empresarial.",
  },
  {
    year: "Primeiros anos",
    title: "Atuação em relações de trabalho e contratos",
    description:
      "Início de carreira em escritório com rotina intensa de audiências e estruturação de contratos. É onde se forma a leitura de como uma relação profissional se torna — ou não — um litígio.",
  },
  {
    year: "Consolidação",
    title: "Prática própria em Brasília",
    description:
      "Estruturação do escritório no Lago Norte, com atuação preventiva e contenciosa para empresários, profissionais liberais e famílias do Distrito Federal.",
  },
  {
    year: "Hoje",
    title: "Acompanhamento contínuo de operações",
    description:
      "Trabalho próximo a empresas em crescimento, em que a advocacia participa das decisões cotidianas antes do surgimento do problema — do contrato ao desligamento, da reforma operacional à autuação fiscal.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Uma advocacia feita de presença, escuta e técnica."
        lead="Caio Brasil é advogado em Brasília — DF, com atuação voltada a empresários, profissionais liberais e famílias que precisam de acompanhamento jurídico próximo, continuado e bem fundamentado."
      />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] items-start">
            <div className="lg:sticky lg:top-28">
              <PhotoPlaceholder />
              <div className="mt-8 rounded-xl border border-green-800/60 bg-green-900/40 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-gold-500">
                  {site.lawyer.name}
                </p>
                <p className="mt-3 text-cream-200 text-sm leading-relaxed">
                  {site.lawyer.education}
                </p>
                <p className="mt-2 text-cream-400 text-sm">
                  OAB {site.lawyer.oab} · {site.lawyer.experience}
                </p>
              </div>
            </div>

            <div>
              <SectionEyebrow>Trajetória</SectionEyebrow>
              <SectionTitle>
                O direito visto de perto, ao lado de quem decide.
              </SectionTitle>
              <GoldRule className="my-8 max-w-[8rem] mx-0" />
              <div className="space-y-6 text-cream-200 leading-relaxed text-[1.0625rem]">
                <p>
                  A prática começa cedo: o primeiro contato com o direito se deu
                  em audiências de conciliação, onde o essencial nunca esteve
                  apenas no mérito da causa, mas no modo como as partes se
                  comunicavam — ou deixavam de se comunicar. Essa leitura, dos
                  bastidores da relação, acabou definindo o jeito de atuar.
                </p>
                <p>
                  Depois vieram anos de contencioso em diferentes frentes — das
                  disputas de trabalho às discussões contratuais e tributárias —
                  até a consolidação de uma prática própria em Brasília, voltada
                  a quem precisa de acompanhamento continuado: o dono de
                  negócio, a empresa em crescimento, o profissional liberal que
                  estrutura a própria atividade.
                </p>
                <p>
                  O escritório atende no Lago Norte e atua em todo o Distrito
                  Federal, com possibilidade de suporte em outras praças quando
                  o caso exige. A rotina combina trabalho preventivo — revisão
                  de contratos, estruturação de operações, consultoria contínua
                  — com defesa em processos já instalados, sempre com a mesma
                  premissa: decisões bem tomadas começam por informação clara.
                </p>
              </div>

              <div className="mt-14">
                <Timeline items={journey} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-green-950/40 border-y border-green-800/60">
        <Container>
          <div className="max-w-2xl">
            <SectionEyebrow>Princípios</SectionEyebrow>
            <SectionTitle>
              O que orienta o trabalho antes mesmo da técnica.
            </SectionTitle>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-14">
            {principles.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-green-800/60 bg-green-900/40 p-8 hover:border-gold-500/60 transition-colors"
              >
                <h3 className="font-serif text-2xl text-cream-50">{p.title}</h3>
                <GoldRule className="my-5 max-w-[4rem] mx-0" />
                <p className="text-cream-200 leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CTABlock
        eyebrow="Próximo passo"
        title="Conversar antes de contratar."
        lead="A primeira conversa serve para entender o caso, apontar caminhos possíveis e, se for o caso, definir juntos o melhor formato de atuação."
      />
    </>
  );
}
