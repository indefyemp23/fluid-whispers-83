import {
  BrainCircuit,
  Building2,
  Clapperboard,
  FileText,
  Layers3,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const siteNav = [
  { label: "Inicio", href: "/" },
  { label: "Servicos", href: "/servicos" },
  { label: "Midia IA", href: "/servicos/midia-ia" },
  { label: "Sites Premium", href: "/servicos/sites-premium" },
  { label: "Operacao & IA", href: "/servicos/operacao-ia" },
  { label: "Sobre", href: "/sobre" },
] as const;

export const serviceRoutes = [
  {
    title: "Midia comercial com IA",
    eyebrow: "Imagem e conteudo",
    href: "/servicos/midia-ia",
    icon: Sparkles,
    summary:
      "Fotos, designs, VSLs, avatares, carrosseis e edicoes que transformam ideias soltas em materiais prontos para vender.",
    outcome: "Mais consistencia visual, mais velocidade e mais material para sustentar sua oferta.",
    signal: "Criar demanda",
  },
  {
    title: "Sites e paginas premium",
    eyebrow: "Presenca e conversao",
    href: "/servicos/sites-premium",
    icon: MonitorSmartphone,
    summary:
      "Websites, landing pages e paginas de campanha com narrativa, hierarquia e estrutura comercial.",
    outcome: "Uma presenca digital que sustenta confianca, preco e decisao.",
    signal: "Converter melhor",
  },
  {
    title: "Operacao, sistemas e IA",
    eyebrow: "Processo e controle",
    href: "/servicos/operacao-ia",
    icon: Workflow,
    summary:
      "Organizacao operacional, sistemas personalizados, implantacao, auditoria e governanca de IA.",
    outcome: "Menos improviso na rotina e mais clareza para operar com tecnologia.",
    signal: "Ganhar controle",
  },
] as const;

export const mediaFormats = [
  {
    title: "Fotos e designs",
    text: "Imagens e composicoes para campanhas, produtos, apresentacoes e social.",
    icon: Sparkles,
  },
  {
    title: "VSLs com avatares",
    text: "Videos comerciais com presenca humana, narrativa e ritmo de venda.",
    icon: Clapperboard,
  },
  {
    title: "Edicao com IA",
    text: "Ajustes, cortes, variacoes e acabamento visual com mais velocidade.",
    icon: Layers3,
  },
  {
    title: "Carrosseis",
    text: "Conteudo sequencial para educar, convencer e conduzir a acao.",
    icon: FileText,
  },
  {
    title: "Instagram automatizado",
    text: "Fluxos e publicacoes com mais consistencia para manter presenca.",
    icon: Network,
  },
] as const;

export const operationSolutions = [
  "Organizacao operacional",
  "Otimizacao de processos",
  "Sistema personalizado",
  "Implantacao",
  "Auditoria de IA",
  "Governanca de IA",
] as const;

export const trustedSignals = [
  {
    title: "Narrativa antes da ferramenta",
    text: "A conversa comeca pelo que precisa mudar, nao pela tecnologia da moda.",
    icon: BrainCircuit,
  },
  {
    title: "Estrutura antes da automacao",
    text: "Fluxo ruim automatizado continua sendo fluxo ruim. Primeiro vem clareza.",
    icon: Workflow,
  },
  {
    title: "Uso real antes da complexidade",
    text: "A solucao precisa caber na rotina de quem vai operar.",
    icon: Building2,
  },
  {
    title: "Controle antes da escala",
    text: "IA sem criterio cria risco. IA com governanca cria capacidade.",
    icon: ShieldCheck,
  },
] as const;

export function createPageHead({ title, description }: { title: string; description: string }) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/logo.jpg" },
      { name: "theme-color", content: "#F4F4F4" },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: "/logo.jpg" },
      { rel: "apple-touch-icon", href: "/logo.jpg" },
    ],
  };
}
