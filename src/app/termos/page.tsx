import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CTABlock } from "@/components/sections/CTABlock";
import { Prose } from "@/components/ui/Prose";
import type { Block } from "@/content/types";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de uso",
  description:
    "Termos de uso do site institucional de Caio Brasil Advocacia — finalidade informativa, limites de responsabilidade e contato.",
};

const blocks: Block[] = [
  {
    type: "p",
    text: "Este site é um canal institucional e informativo do escritório Caio Brasil Advocacia. A navegação pelas páginas não estabelece, por si só, relação profissional ou dever de patrocínio — essa relação só se constitui com a contratação formal dos serviços jurídicos.",
  },
  { type: "h2", text: "Finalidade do conteúdo" },
  {
    type: "p",
    text: "Os textos publicados aqui, incluindo as páginas de atuação e as publicações, têm finalidade informativa e institucional. Não constituem parecer, consulta jurídica ou orientação aplicada a casos concretos, que exigem análise específica.",
  },
  { type: "h2", text: "Propriedade intelectual" },
  {
    type: "p",
    text: "O conteúdo textual, visual e o projeto gráfico deste site são de titularidade do escritório ou utilizados sob licença. Reprodução parcial é permitida desde que citada a fonte; reprodução integral ou para fins comerciais depende de autorização prévia.",
  },
  { type: "h2", text: "Comunicação publicitária" },
  {
    type: "p",
    text: "Em conformidade com o Código de Ética e Disciplina da OAB e com o Provimento 205/2021, o site não tem caráter mercantil, não realiza captação de clientela, não publica resultados de causas e não promove comparação com outros profissionais. O conteúdo é sóbrio, informativo e voltado a orientação geral.",
  },
  { type: "h2", text: "Links externos" },
  {
    type: "p",
    text: "Eventuais links para páginas externas são fornecidos como referência. O escritório não se responsabiliza pelo conteúdo, pela disponibilidade ou pelas práticas de privacidade de sites de terceiros.",
  },
  { type: "h2", text: "Atualização dos termos" },
  {
    type: "p",
    text: "Os presentes termos podem ser atualizados a qualquer tempo. A versão em vigor é sempre a publicada nesta página. Alterações relevantes serão sinalizadas no próprio conteúdo.",
  },
  { type: "h2", text: "Contato" },
  {
    type: "p",
    text: `Dúvidas sobre estes termos podem ser encaminhadas para ${site.contact.email}.`,
  },
  {
    type: "callout",
    text: `${site.firm.legalName} · CNPJ ${site.firm.cnpj}. ${site.lawyer.name}, inscrito na OAB sob o nº ${site.lawyer.oab}.`,
  },
];

export default function TermosPage() {
  return (
    <>
      <PageHero
        eyebrow="Termos"
        title="Termos de uso"
        lead="Condições gerais de uso do site institucional do escritório."
      />
      <Section className="pt-0">
        <Container size="prose">
          <Prose blocks={blocks} />
        </Container>
      </Section>
      <CTABlock />
    </>
  );
}
