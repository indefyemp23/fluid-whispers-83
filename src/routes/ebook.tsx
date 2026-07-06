import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Clapperboard,
  FileText,
  Layers3,
  MonitorSmartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

import {
  ButtonLink,
  FeatureCard,
  NoryxLayout,
  PageHero,
  Section,
  SectionHeader,
} from "@/components/noryx-site";
import { createPageHead } from "@/components/noryx-data";

export const Route = createFileRoute("/ebook")({
  head: () =>
    createPageHead({
      title: "Ebook Noryx - IA para conteudo, venda e operacao",
      description:
        "Recurso de entrada da Noryx para aplicar IA em conteudo, venda, websites, carrosseis, skills e operacao.",
    }),
  component: Ebook,
});

function Ebook() {
  return (
    <NoryxLayout stickyLabel="Acessar ebook">
      <PageHero
        kicker="Recurso Noryx"
        title="Um guia pratico para aplicar IA em conteudo, venda e operacao."
        text="O ebook reune caminhos, exemplos e estruturas para quem quer entender como usar IA com mais intencao antes de investir em uma solucao completa."
        primaryLabel="Acessar ebook"
        primaryHref="/contato"
        secondaryLabel="Ver servicos"
        secondaryHref="/servicos"
        visual={<EbookVisual />}
      />

      <Section>
        <SectionHeader
          kicker="Conteudo"
          title="Uma entrada discreta para entender possibilidades antes de contratar."
          text="O ebook nao substitui a construcao completa. Ele ajuda a organizar repertorio e enxergar onde a IA pode gerar valor primeiro."
        />
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {(
            [
              ["Fotos e designs", "Como transformar ideia visual em material de venda.", Sparkles],
              [
                "VSLs com avatares",
                "Como dar presenca e ritmo para ofertas em video.",
                Clapperboard,
              ],
              [
                "Websites e landing pages",
                "Como pensar paginas por narrativa e decisao.",
                MonitorSmartphone,
              ],
              ["Edicao com IA", "Como ganhar acabamento e variacao com mais velocidade.", Layers3],
              ["Skills", "Como empacotar conhecimento em rotinas mais reutilizaveis.", BookOpen],
              ["Instagram automatizado", "Como manter presenca com mais consistencia.", FileText],
              ["Carrosseis", "Como estruturar conteudo sequencial que conduz.", FileText],
              ["Processos", "Como conectar IA a rotina e operacao.", Workflow],
            ] as const
          ).map(([title, text, Icon], index) => (
            <FeatureCard
              key={String(title)}
              title={String(title)}
              text={String(text)}
              icon={Icon}
              delay={index * 35}
            />
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <SectionHeader
            dark
            kicker="Baixo ticket"
            title="Um primeiro passo para quem ainda esta formando clareza."
            text="Quando a empresa ja sabe o que precisa construir, o caminho certo e falar com a Noryx. Quando ainda esta explorando, o ebook funciona como porta de entrada."
          />
          <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FFAB91]">
              Acesso discreto
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.07em]">
              Aprender primeiro. Construir melhor depois.
            </h2>
            <div className="mt-7">
              <ButtonLink href="/contato">Acessar ebook</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </NoryxLayout>
  );
}

function EbookVisual() {
  return (
    <aside className="rounded-[34px] border border-white/80 bg-white/86 p-5 shadow-[0_24px_80px_rgba(13,13,13,0.11)] backdrop-blur-xl sm:p-7">
      <div className="rounded-[28px] bg-[#0D0D0D] p-5 text-white">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FFAB91]">Ebook</p>
        <h2 className="mt-3 text-5xl font-black leading-none tracking-[-0.08em]">
          IA com intencao.
        </h2>
      </div>
      <div className="mt-4 grid gap-3">
        {["Conteudo", "Venda", "Operacao"].map((item) => (
          <div
            key={item}
            className="rounded-[22px] border border-black/5 bg-[#F4F4F4] px-5 py-4 text-lg font-black tracking-[-0.04em]"
          >
            {item}
          </div>
        ))}
      </div>
    </aside>
  );
}
