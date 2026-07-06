import { createFileRoute } from "@tanstack/react-router";
import { Clapperboard, FileText, Layers3, Network, Sparkles } from "lucide-react";

import {
  ButtonLink,
  FeatureCard,
  NoryxLayout,
  PageHero,
  ProcessSteps,
  Section,
  SectionHeader,
} from "@/components/noryx-site";
import { createPageHead, mediaFormats } from "@/components/noryx-data";

export const Route = createFileRoute("/servicos/midia-ia")({
  head: () =>
    createPageHead({
      title: "Midia Comercial com IA - Noryx",
      description:
        "Fotos, designs, VSLs com avatares fotorealistas, carrosseis, Instagram automatizado e edicao com IA para ofertas comerciais.",
    }),
  component: MidiaIa,
});

function MidiaIa() {
  return (
    <NoryxLayout stickyLabel="Criar minha midia">
      <PageHero
        kicker="Midia comercial com IA"
        title="Midia que faz sua oferta parecer pronta para vender."
        text="Criamos fotos, designs, VSLs com avatares fotorealistas, carrosseis e edicoes com IA para transformar ideias soltas em materiais comerciais consistentes."
        primaryLabel="Criar minha midia"
        primaryHref="/contato"
        secondaryLabel="Ver formatos"
        secondaryHref="/servicos/midia-ia#formatos"
        visual={<MediaVisual />}
      />

      <Section id="formatos">
        <SectionHeader
          kicker="Formatos"
          title="Conteudo que nao parece experimento. Parece marca."
          text="O foco nao e produzir mais por produzir. E criar materiais que sustentem percepcao, oferta e decisao comercial."
        />
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {mediaFormats.map((format, index) => (
            <FeatureCard
              key={format.title}
              title={format.title}
              text={format.text}
              icon={format.icon}
              delay={index * 50}
            />
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            dark
            kicker="Narrativa"
            title="Nao e sobre produzir mais. E sobre parecer mais preparado."
            text="A diferenca entre uma ideia boa e uma oferta desejavel muitas vezes esta na forma como ela aparece. A Noryx transforma conteudo em percepcao: mais clareza, mais acabamento e mais material para sustentar a venda."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [
                "Oferta com rosto",
                "Avatares e videos dao presenca para mensagens que antes ficavam planas.",
              ],
              [
                "Campanha com linha visual",
                "Criativos deixam de parecer improvisados e passam a conversar entre si.",
              ],
              [
                "Conteudo com ritmo",
                "Carrosseis e VSLs conduzem a atencao em vez de apenas ocupar espaco.",
              ],
              [
                "Entrega pronta para uso",
                "Arquivos, variacoes e orientacao pensados para publicacao real.",
              ],
            ].map(([title, text], index) => (
              <FeatureCard
                key={title}
                dark
                title={title}
                text={text}
                icon={[Sparkles, Layers3, FileText, Clapperboard][index]}
                delay={index * 55}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          kicker="Processo"
          title="Da ideia solta para uma linha de midia pronta."
          text="O fluxo organiza oferta, direcao visual e formatos antes de gerar assets."
        />
        <ProcessSteps
          steps={[
            {
              title: "Briefing da oferta",
              text: "Entendemos promessa, publico, objecoes e canais de uso.",
            },
            {
              title: "Direcao visual",
              text: "Definimos o tom visual e a narrativa para os materiais.",
            },
            {
              title: "Criacao e ajustes",
              text: "Geramos os assets, revisamos e entregamos variacoes prontas.",
            },
          ]}
        />
        <div className="mt-9">
          <ButtonLink href="/contato">Criar minha midia</ButtonLink>
        </div>
      </Section>
    </NoryxLayout>
  );
}

function MediaVisual() {
  return (
    <aside className="rounded-[34px] border border-white/80 bg-white/86 p-5 shadow-[0_24px_80px_rgba(13,13,13,0.11)] backdrop-blur-xl sm:p-7">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FF5722]">
        Linha de campanha
      </p>
      <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.07em]">
        Ideia em ativos comerciais.
      </h2>
      <div className="mt-7 grid gap-3">
        {[
          ["Imagem", "Fotos e designs", Sparkles],
          ["Video", "VSLs e avatares", Clapperboard],
          ["Social", "Carrosseis e Instagram", Network],
        ].map(([label, title, Icon]) => (
          <div
            key={String(title)}
            className="flex items-center gap-4 rounded-[24px] border border-black/5 bg-[#F4F4F4] p-4"
          >
            <div className="grid h-12 w-12 place-items-center rounded-[18px] bg-[#0D0D0D] text-white">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5C5C5C]">
                {String(label)}
              </p>
              <p className="text-lg font-black tracking-[-0.04em]">{String(title)}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
