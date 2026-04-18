export const site = {
  name: "Caio Brasil Advocacia",
  shortName: "Caio Brasil",
  tagline: "Advocacia que protege quem produz",
  description:
    "Advocacia preventiva e estratégica em Brasília. Atuação em direito trabalhista e cível.",
  url: "https://caiobrasiladvocacia.com.br",
  lawyer: {
    name: "Caio Brasil",
    oab: "DF 46.634",
    education: "Bacharel em Direito pelo UniCEUB",
    experience: "10 anos de atuação",
  },
  firm: {
    legalName: "Antonio Brasil Sociedade Individual de Advocacia",
    cnpj: "48.166.125/0001-12",
  },
  contact: {
    whatsapp: "5561981811620",
    whatsappDisplay: "(61) 98181-1620",
    email: "contato@caiobrasil.adv.br",
    address: {
      street: "SHIN CA 11, Bloco E, Junta B, Sala 307, Pavimento 3",
      district: "Lago Norte",
      city: "Brasília",
      state: "DF",
      zip: "71.503-511",
    },
    hours: "Segunda a sexta, 9h às 18h",
  },
  nav: [
    { href: "/sobre", label: "Sobre" },
    { href: "/atuacao", label: "Atuação" },
    { href: "/para-empresarios", label: "Para empresários" },
    { href: "/publicacoes", label: "Publicações" },
    { href: "/contato", label: "Contato" },
  ],
  areas: [
    { slug: "trabalhista", label: "Trabalhista" },
    { slug: "civel", label: "Cível" },
  ] as ReadonlyArray<{ slug: string; label: string }>,
  segments: [
    { slug: "barbearias", label: "Barbearias" },
    { slug: "saloes", label: "Salões de beleza" },
    { slug: "clinicas", label: "Clínicas" },
    { slug: "restaurantes", label: "Restaurantes" },
  ],
} as const;

export function whatsappLink(message = "Olá, gostaria de falar com o Dr. Caio Brasil.") {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
