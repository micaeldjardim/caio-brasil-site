import type { Segment } from "./types";

export const segments: Segment[] = [
  {
    slug: "barbearias",
    label: "Barbearias",
    eyebrow: "Serviços de estética masculina",
    summary:
      "Relações de parceria com barbeiros, contratos de cadeira e estrutura trabalhista adequada ao modelo de operação.",
    intro:
      "Barbearias costumam operar em modelos híbridos — parte dos profissionais é contratada, parte trabalha sob contrato de parceria. Essa combinação, se não for bem estruturada, abre espaço para discussões trabalhistas que podem comprometer financeiramente o negócio. A atenção jurídica nesse setor começa pela forma como cada vínculo é desenhado e documentado.",
    risks: [
      {
        title: "Configuração involuntária de vínculo",
        description:
          "Quando a relação com o barbeiro parceiro apresenta na rotina características de emprego — horário fixo, subordinação direta, exclusividade — mesmo com contrato de parceria assinado, o vínculo pode ser reconhecido posteriormente.",
      },
      {
        title: "Contratos genéricos",
        description:
          "Contratos de parceria baixados de modelos padrão raramente contemplam as especificidades da operação em barbearia e deixam lacunas que podem ser exploradas.",
      },
      {
        title: "Ausência de procedimentos internos",
        description:
          "Regras verbais sobre divisão de receita, uso de espaço e responsabilidades tendem a virar conflito quando a relação se deteriora.",
      },
      {
        title: "Comunicação inadequada",
        description:
          "Mensagens e orientações enviadas pelo proprietário podem, se mal formuladas, servir como prova de subordinação em uma eventual discussão judicial.",
      },
    ],
    goodPractices: [
      "Redação de contratos específicos para o modelo de parceria adotado, com clareza sobre divisão de receita, uso do espaço e responsabilidades.",
      "Definição e formalização de regras internas que orientam a operação sem caracterizar subordinação.",
      "Cuidado com a comunicação cotidiana — o que é dito e registrado no WhatsApp tem peso documental.",
      "Revisão periódica dos contratos e práticas conforme mudanças na legislação e jurisprudência.",
      "Acompanhamento em casos de desligamento, garantindo encerramento adequado da relação.",
    ],
    relatedPosts: ["contrato-e-vinculo-empregaticio"],
  },
  {
    slug: "saloes",
    label: "Salões de beleza",
    eyebrow: "Estética e bem-estar",
    summary:
      "Relações entre proprietários, cabeleireiros, manicures e outros profissionais, incluindo aplicação da Lei do Salão Parceiro.",
    intro:
      "Salões de beleza têm uma legislação específica — a Lei 13.352/2016, conhecida como Lei do Salão Parceiro — que regulamenta a relação entre o proprietário e os profissionais parceiros. O simples fato de a lei existir não elimina riscos: sua aplicação exige requisitos que, se descumpridos, afastam sua proteção e reabrem o espaço para configuração de vínculo.",
    risks: [
      {
        title: "Aplicação incorreta da Lei do Salão Parceiro",
        description:
          "A lei exige contrato escrito com requisitos específicos, registro sindical e outras formalidades. A ausência de qualquer um desses elementos pode afastar a proteção legal.",
      },
      {
        title: "Modelo misto sem clareza",
        description:
          "Quando o salão tem profissionais CLT e parceiros atuando lado a lado, a linha que os separa precisa ser clara — na documentação e na prática.",
      },
      {
        title: "Cessão de espaço sem contrato",
        description:
          "Profissionais que usam cadeira em troca de percentual da receita, sem contrato formal, ficam em zona cinzenta que tende a ser interpretada como vínculo.",
      },
    ],
    goodPractices: [
      "Adoção correta dos requisitos da Lei do Salão Parceiro, quando aplicável.",
      "Contratos distintos e bem documentados para cada modalidade de relação.",
      "Registro claro da divisão de receita e das responsabilidades de cada parte.",
      "Procedimentos internos que preservem a autonomia do profissional parceiro.",
      "Treinamento da equipe administrativa para evitar comunicações que caracterizem subordinação.",
    ],
    relatedPosts: ["contrato-e-vinculo-empregaticio"],
  },
  {
    slug: "clinicas",
    label: "Clínicas",
    eyebrow: "Saúde e terapias",
    summary:
      "Relações com profissionais da saúde, contratos de prestação de serviço médico e estruturação societária de clínicas.",
    intro:
      "Clínicas operam em um cruzamento complexo entre direito trabalhista e empresarial. A relação com profissionais — médicos, dentistas, fisioterapeutas, psicólogos — pode seguir diferentes modelos, cada um com suas implicações jurídicas. A estrutura correta começa pela decisão consciente do modelo, documentada e coerente com a prática.",
    risks: [
      {
        title: "Pejotização mal estruturada",
        description:
          "A contratação de profissionais via pessoa jurídica é legítima quando a relação efetivamente tem natureza empresarial. Quando há subordinação, pessoalidade e habitualidade, o vínculo pode ser reconhecido apesar do CNPJ.",
      },
      {
        title: "Responsabilidade civil diluída",
        description:
          "Em caso de questionamento sobre conduta profissional, a forma como a clínica documentou a relação com o profissional impacta diretamente a extensão da responsabilidade da instituição.",
      },
      {
        title: "Governança e estrutura societária inadequada",
        description:
          "A forma como a clínica é constituída — PJ, sociedade, equiparação — impacta diretamente na responsabilidade legal do profissional e das operações. Decisões de estrutura devem ser conscientes e bem documentadas.",
      },
    ],
    goodPractices: [
      "Escolha consciente do modelo de contratação, com documentação coerente e prática alinhada.",
      "Contratos que delimitam responsabilidades do profissional e da clínica em casos de intercorrência.",
      "Escolha e formalização adequada da estrutura societária conforme a operação.",
      "Termos de consentimento e políticas de privacidade adequados à LGPD na saúde.",
      "Acompanhamento da adequação às normas do conselho profissional respectivo.",
    ],
    relatedPosts: ["contrato-e-vinculo-empregaticio"],
  },
  {
    slug: "restaurantes",
    label: "Restaurantes",
    eyebrow: "Gastronomia e food service",
    summary:
      "Relações trabalhistas em operações com alta rotatividade, contratos com fornecedores e enquadramento fiscal do food service.",
    intro:
      "Restaurantes são operações intensivas em pessoas e em relações comerciais — fornecedores, delivery, franquias, parceiros. Cada uma dessas frentes tem particularidades jurídicas e, quando a operação cresce, a ausência de estrutura transforma pequenos descuidos em passivos relevantes. O acompanhamento jurídico nesse setor é, em grande parte, organização da complexidade.",
    risks: [
      {
        title: "Alta rotatividade sem padrão",
        description:
          "Admissões e demissões frequentes, sem procedimentos padronizados, aumentam drasticamente o risco de falhas documentais que geram passivo trabalhista.",
      },
      {
        title: "Relações com plataformas de delivery",
        description:
          "Contratos com plataformas, entregadores e prestadores envolvidos na cadeia de entrega têm implicações que precisam ser mapeadas conforme o modelo adotado.",
      },
      {
        title: "Fornecedores sem contrato",
        description:
          "Relações comerciais recorrentes sem instrumento formal funcionam enquanto tudo vai bem — e se tornam disputa quando algo sai do previsto.",
      },
      {
        title: "Contratos com plataformas e franquias sem clareza",
        description:
          "Operações de food service frequentemente envolvem relações com plataformas, franquias e fornecedores — cada uma com implicações jurídicas que precisam estar claras.",
      },
    ],
    goodPractices: [
      "Procedimentos padronizados de admissão e desligamento, com checklist documental.",
      "Contratos formalizados com fornecedores recorrentes e parceiros de cadeia.",
      "Documentação adequada de contratos com fornecedores, plataformas e parceiros conforme a operação evolui.",
      "Treinamento da liderança operacional sobre comunicação com equipes e fornecedores.",
      "Acompanhamento contínuo para ajustes conforme mudanças na operação.",
    ],
    relatedPosts: ["contrato-e-vinculo-empregaticio"],
  },
];

export function getSegment(slug: string) {
  return segments.find((s) => s.slug === slug);
}
