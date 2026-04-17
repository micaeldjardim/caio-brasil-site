import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CTABlock } from "@/components/sections/CTABlock";
import { Prose } from "@/components/ui/Prose";
import type { Block } from "@/content/types";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como os dados pessoais são tratados no relacionamento com Caio Brasil Advocacia, em conformidade com a LGPD.",
};

const blocks: Block[] = [
  {
    type: "p",
    text: "Esta política descreve como o escritório Caio Brasil Advocacia coleta, utiliza e protege os dados pessoais recebidos no curso das suas atividades, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/2018).",
  },
  { type: "h2", text: "Dados coletados" },
  {
    type: "p",
    text: "Coletamos apenas os dados estritamente necessários para a prestação dos serviços jurídicos contratados e para o contato com potenciais clientes. Isso pode incluir nome, contato, documentos de identificação, informações sobre o caso e dados de terceiros envolvidos, quando indispensáveis para a atuação.",
  },
  { type: "h2", text: "Finalidade do tratamento" },
  {
    type: "ul",
    items: [
      "Análise, acompanhamento e defesa de interesses em esfera judicial ou extrajudicial.",
      "Comunicação com o cliente a respeito do andamento dos serviços.",
      "Cumprimento de obrigações legais e regulatórias aplicáveis à advocacia.",
      "Resposta a contatos iniciados por potenciais clientes.",
    ],
  },
  { type: "h2", text: "Sigilo profissional" },
  {
    type: "p",
    text: "Independentemente da legislação de proteção de dados, toda a atuação do escritório é regida pelo sigilo profissional previsto no Estatuto da Advocacia. Informações transmitidas pelo cliente — ainda que em conversa preliminar — estão protegidas pelo dever de confidencialidade.",
  },
  { type: "h2", text: "Compartilhamento de dados" },
  {
    type: "p",
    text: "Dados pessoais só são compartilhados com terceiros quando estritamente necessário à prestação do serviço contratado (por exemplo, protocolo em órgãos públicos, comunicação com peritos, contrapartes ou autoridades), sempre dentro dos limites da autorização do cliente e da legislação aplicável.",
  },
  { type: "h2", text: "Retenção e descarte" },
  {
    type: "p",
    text: "Os dados são mantidos pelo prazo necessário ao cumprimento da finalidade para a qual foram coletados, observando prazos legais específicos (prescricionais, fiscais e profissionais). Após o prazo, são descartados ou anonimizados de forma segura.",
  },
  { type: "h2", text: "Direitos do titular" },
  {
    type: "p",
    text: "O titular dos dados pode, a qualquer momento, solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação dos seus dados pessoais, na forma do artigo 18 da LGPD. Os pedidos devem ser dirigidos ao contato abaixo.",
  },
  { type: "h2", text: "Contato" },
  {
    type: "p",
    text: `Dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais podem ser enviadas para ${site.contact.email}.`,
  },
  {
    type: "callout",
    text: "Esta política pode ser atualizada a qualquer momento para refletir mudanças legais ou operacionais. A versão em vigor é sempre a publicada nesta página.",
  },
];

export default function PoliticaPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de privacidade"
        lead="Como os dados pessoais são tratados no relacionamento com o escritório."
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
