export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      credit?: string;
      width: number;
      height: number;
    };

export type Area = {
  slug: string;
  label: string;
  eyebrow: string;
  summary: string;
  intro: string;
  whenToSeek: string[];
  howIActConduct: { title: string; description: string }[];
  scope: string[];
  faq: { q: string; a: string }[];
};

export type Segment = {
  slug: string;
  label: string;
  eyebrow: string;
  summary: string;
  intro: string;
  risks: { title: string; description: string }[];
  goodPractices: string[];
  relatedPosts: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: "Trabalhista" | "Cível" | "Criminal" | "Tributário" | "Empresarial";
  cover: {
    src: string;
    alt: string;
    width: number;
    height: number;
    credit?: string;
  };
  content: Block[];
};
