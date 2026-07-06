import { createFileRoute } from "@tanstack/react-router";
import { FileText, LayoutTemplate, MonitorSmartphone, MousePointerClick } from "lucide-react";

import {
  ButtonLink,
  FeatureCard,
  NoryxLayout,
  PageHero,
  ProcessSteps,
  Section,
  SectionHeader,
} from "@/components/noryx-site";
import { createPageHead } from "@/components/noryx-data";

export const Route = createFileRoute("/servicos/sites-premium")({
  head: () =>
    createPageHead({
      title: "Sites e Landing Pages Premium - Noryx",
      description:
        "Sites corporativos, landing pages e paginas de campanha com narrativa, design premium e estrutura de conversao.",
    }),
  component: SitesPremium,
});

function SitesPremium() {
  return (
    <NoryxLayout stickyLabel="Construir meu site">
      <PageHero
        kicker="Sites e paginas premium"
        title="Sites que sustentam o valor da sua oferta."
        text="Criamos websites, landing pages e paginas de campanha com narrativa, design e estrutura de conversao para empresas que precisam parecer tao boas quanto o que entregam."
        primaryLabel="Construir meu site"
        primaryHref="/contato"
        secondaryLabel="Ver estrutura"
        secondaryHref="/servicos/sites-premium#estrutura"
        visual={<SiteVisual />}
      />

      <Section dark>
        <SectionHeader
          dark
          kicker="O problema"
          title="Uma oferta premium perde forca quando a pagina parece improvisada."
          text="Boa entrega precisa de uma presenca que ajude o visitante a entender, confiar e agir."
        />
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Mensagem confusa",
            "Design sem hierarquia",
            "Prova escondida",
            "CTA fraco",
            "Mobile dificil de usar",
            "Promessa tecnica demais",
          ].map((title, index) => (
            <FeatureCard
              key={title}
              dark
              title={title}
              text="Quando a pagina nao organiza a decisao, a oferta precisa trabalhar dobrado."
              icon={index % 2 === 0 ? LayoutTemplate : MousePointerClick}
              delay={index * 45}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          kicker="Entregas"
          title="Cada pagina precisa cumprir uma funcao comercial."
          text="Do site institucional a pagina de campanha, a estrutura nasce da narrativa e do objetivo de conversao."
        />
        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          {(
            [
              [
                "Site corporativo",
                "Para apresentar empresa, servicos, autoridade e contato.",
                MonitorSmartphone,
              ],
              [
                "Landing page",
                "Para vender uma oferta especifica com foco em decisao.",
                MousePointerClick,
              ],
              [
                "Pagina de campanha",
                "Para anuncios, lancamentos, eventos ou funis temporarios.",
                LayoutTemplate,
              ],
              [
                "Arquitetura de copy",
                "Para transformar informacao solta em narrativa que convence.",
                FileText,
              ],
            ] as const
          ).map(([title, text, Icon], index) => (
            <FeatureCard
              key={String(title)}
              title={String(title)}
              text={String(text)}
              icon={Icon}
              delay={index * 55}
            />
          ))}
        </div>
      </Section>

      <Section id="estrutura" className="pt-0">
        <div className="rounded-[34px] border border-white/70 bg-white/86 p-5 shadow-[0_24px_88px_rgba(13,13,13,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
          <SectionHeader
            compact
            kicker="Estrutura"
            title="Uma pagina boa conduz a atencao em ordem."
            text="O visitante nao deve montar a historia sozinho. A pagina precisa organizar contexto, valor, prova e acao."
          />
          <ProcessSteps
            steps={[
              { title: "Posicionamento", text: "A promessa aparece antes do detalhe tecnico." },
              {
                title: "Prova e solucao",
                text: "A pagina mostra por que confiar e como a oferta resolve.",
              },
              {
                title: "Conversao",
                text: "O CTA fica claro, repetido e facil de acionar no mobile.",
              },
            ]}
          />
          <div className="mt-9">
            <ButtonLink href="/contato">Construir meu site</ButtonLink>
          </div>
        </div>
      </Section>
    </NoryxLayout>
  );
}

function SiteVisual() {
  return (
    <aside className="rounded-[34px] border border-white/80 bg-white/86 p-5 shadow-[0_24px_80px_rgba(13,13,13,0.11)] backdrop-blur-xl sm:p-7">
      <div className="rounded-[28px] bg-[#0D0D0D] p-5 text-white">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FFAB91]">
          Primeira dobra
        </p>
        <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.07em]">
          Clareza que vende antes do scroll.
        </h2>
      </div>
      <div className="mt-4 grid gap-3">
        {["Promessa", "Prova", "Oferta", "Acao"].map((item) => (
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
