import type { Area } from "./types";

export const areas: Area[] = [
  {
    slug: "trabalhista",
    label: "Direito Trabalhista",
    eyebrow: "Relações de trabalho",
    summary:
      "Prevenção e defesa em relações de trabalho, vínculos de parceria e contratação de prestadores de serviço.",
    intro:
      "As relações de trabalho mudaram muito nas últimas décadas, e a legislação nem sempre acompanhou essa transformação no ritmo dos negócios. O trabalho preventivo em direito trabalhista é, antes de tudo, uma leitura atenta da rotina da empresa — como as pessoas são contratadas, como se comunicam, como registram o que fazem. É dessa leitura que surgem as orientações que evitam litígios antes de eles existirem.",
    whenToSeek: [
      "Quando sua operação envolve prestadores de serviço, parceiros ou autônomos e você não tem certeza se os contratos protegem a empresa.",
      "Quando há entrada ou saída relevante de pessoas na operação e é preciso estruturar esses processos com segurança.",
      "Quando a empresa está crescendo e quer padronizar relações de trabalho antes que se tornem um problema.",
      "Quando já existe uma reclamação trabalhista em curso ou uma notificação extrajudicial.",
      "Quando há dúvida sobre configuração de vínculo empregatício em relações de parceria.",
    ],
    howIActConduct: [
      {
        title: "Diagnóstico inicial",
        description:
          "Mapeamento das relações de trabalho da empresa — quem são, como foram contratados, como se relacionam com a operação no dia a dia.",
      },
      {
        title: "Análise documental",
        description:
          "Leitura crítica de contratos, termos de adesão, manuais internos e comunicações recorrentes para identificar pontos de exposição.",
      },
      {
        title: "Ajuste estrutural",
        description:
          "Redação ou revisão de contratos, elaboração de procedimentos internos e orientação sobre comunicação com os colaboradores.",
      },
      {
        title: "Acompanhamento contínuo",
        description:
          "Revisão periódica à luz de mudanças legislativas e jurisprudenciais, com atualização dos documentos e orientações conforme necessário.",
      },
    ],
    scope: [
      "Contratos de prestação de serviço e parceria",
      "Análise de vínculo empregatício",
      "Estruturação de regras e procedimentos internos",
      "Defesa em reclamações trabalhistas",
      "Rescisões contratuais e acordos",
      "Consultoria em reformas de operação",
    ],
    faq: [
      {
        q: "Quando um prestador de serviço pode ser considerado empregado?",
        a: "O vínculo empregatício se caracteriza pela presença simultânea de pessoalidade, habitualidade, onerosidade e subordinação. Na prática, o que decide é a realidade da relação, não o nome dado no contrato. Por isso o acompanhamento jurídico olha tanto o documento quanto a rotina.",
      },
      {
        q: "O contrato de parceria protege a empresa sozinho?",
        a: "Não. O contrato é a base, mas precisa estar alinhado com a forma como a relação é conduzida no dia a dia — comunicação, regras internas, cobrança de horários e metas. A proteção vem da coerência entre o documento e a prática.",
      },
      {
        q: "Faz sentido ter acompanhamento jurídico fixo ou só quando surge problema?",
        a: "Cada caso é um caso. Em geral, operações com mais de um prestador, rotatividade frequente ou contratos recorrentes se beneficiam do acompanhamento contínuo, porque o custo de prevenir é significativamente menor que o de remediar.",
      },
    ],
  },
  {
    slug: "civel",
    label: "Direito Cível",
    eyebrow: "Patrimônio, família e direitos",
    summary:
      "Redação e análise de contratos, questões de sucessão e divórcio, defesa de direitos do consumidor e solução de conflitos entre particulares.",
    intro:
      "A atuação cível envolve temas variados — desde contratos mal redigidos até questões familiares complexas e conflitos de consumo. Em cada um, o princípio é o mesmo: transformar acordos vagos em instrumentos claros quando há tempo, e conduzir a discussão de forma objetiva quando o conflito já existe, buscando solução antes do litígio sempre que possível.",
    whenToSeek: [
      "Quando é necessário redigir ou revisar contratos entre empresas, sócios ou particulares.",
      "Quando há questões de sucessão, herança ou divisão patrimonial a estruturar.",
      "Quando surge uma disputa sobre responsabilidade por dano, descumprimento contratual ou direitos do consumidor.",
      "Quando há conflitos familiares que exigem representação — divórcio, guarda, alimentos.",
      "Quando há necessidade de ação preventiva para proteger patrimônio ou direitos.",
    ],
    howIActConduct: [
      {
        title: "Entendimento da situação",
        description:
          "Compreensão do que está em jogo, quem são as partes, o histórico da relação e qual resultado é efetivamente desejado.",
      },
      {
        title: "Avaliação de caminhos",
        description:
          "Análise das alternativas disponíveis — negociação direta, mediação, ação judicial — com clareza sobre custos, prazos e riscos de cada uma.",
      },
      {
        title: "Execução da estratégia",
        description:
          "Redação de contratos, notificações extrajudiciais, atuação em audiências ou propositura da ação, conforme o plano definido.",
      },
      {
        title: "Encerramento estruturado",
        description:
          "Formalização adequada da solução — termo de acordo, quitação, contrato revisado — para que o problema não retorne por falta de registro.",
      },
    ],
    scope: [
      "Contratos empresariais e entre particulares",
      "Direito sucessório e partilha de herança",
      "Questões de divórcio, guarda e alimentos",
      "Cobrança judicial e extrajudicial",
      "Direito do consumidor",
      "Responsabilidade civil e indenizações",
    ],
    faq: [
      {
        q: "Vale a pena acionar judicialmente uma dívida?",
        a: "Depende do valor, da documentação existente e da capacidade financeira do devedor. A análise inicial busca o caminho mais eficiente — muitas vezes a notificação bem conduzida resolve sem precisar ir ao Judiciário.",
      },
      {
        q: "Um contrato baixado da internet serve?",
        a: "Serve como ponto de partida, raramente como versão final. Contratos genéricos costumam deixar de fora exatamente os pontos que protegem a parte. A revisão adaptada é o que faz diferença.",
      },
      {
        q: "Quanto tempo dura um processo cível?",
        a: "Varia muito conforme a complexidade, a comarca e a disposição das partes para acordo. O acompanhamento jurídico envolve também essa leitura — saber quando insistir e quando negociar.",
      },
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
