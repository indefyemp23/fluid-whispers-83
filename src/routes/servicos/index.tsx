import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, HelpCircle } from "lucide-react";

import {
  ButtonLink,
  FeatureCard,
  NoryxLayout,
  PageHero,
  Section,
  SectionHeader,
  ServiceCard,
} from "@/components/noryx-site";
import { createPageHead, serviceRoutes } from "@/components/noryx-data";

export const Route = createFileRoute("/servicos/")({
  head: () =>
    createPageHead({
      title: "Servicos Noryx - Midia IA, Sites Premium e Operacao",
      description:
        "Compare os servicos da Noryx para midia comercial com IA, sites premium, operacao, sistemas personalizados e governanca de IA.",
    }),
  component: Servicos,
});

function Servicos() {
  return (
    <NoryxLayout stickyLabel="Comparar caminhos">
      <PageHero
        compact
        kicker="Servicos Noryx"
        title="Imagem, venda e operacao trabalhando na mesma direcao."
        text="A Noryx combina criacao visual, experiencias digitais e inteligencia operacional para transformar demandas soltas em sistemas de crescimento mais claros."
        primaryLabel="Diagnosticar meu projeto"
        primaryHref="/contato"
        secondaryLabel="Ver comparativo"
        secondaryHref="/servicos#comparativo"
      />

      <Section>
        <SectionHeader
          kicker="Frentes"
          title="Escolha pelo gargalo que mais limita sua empresa hoje."
          text="Cada frente pode ser contratada separadamente, mas todas seguem a mesma logica: clareza antes de ferramenta, narrativa antes de execucao."
        />
        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {serviceRoutes.map((service, index) => (
            <ServiceCard key={service.title} service={service} delay={index * 70} />
          ))}
        </div>
      </Section>

      <Section id="comparativo" className="pt-0">
        <div className="rounded-[34px] border border-white/70 bg-white/86 p-5 shadow-[0_24px_88px_rgba(13,13,13,0.09)] backdrop-blur-xl sm:p-8 lg:p-10">
          <SectionHeader
            compact
            kicker="Comparativo"
            title="Quando contratar cada frente."
            text="No mobile, cada linha vira uma decisao simples: onde doi, o que resolve e qual e o proximo passo."
          />
          <div className="mt-8 grid gap-3">
            {[
              {
                name: "Midia IA",
                when: "Quando faltam criativos, imagens, VSLs e materiais de venda.",
                solves: "Velocidade, consistencia e percepcao visual.",
                href: "/servicos/midia-ia",
              },
              {
                name: "Sites Premium",
                when: "Quando a pagina nao acompanha o valor da oferta.",
                solves: "Confianca, clareza, narrativa e conversao.",
                href: "/servicos/sites-premium",
              },
              {
                name: "Operacao & IA",
                when: "Quando processos, sistemas e IA viraram gargalo.",
                solves: "Controle, organizacao, implantacao e governanca.",
                href: "/servicos/operacao-ia",
              },
            ].map((row) => (
              <a
                key={row.name}
                href={row.href}
                className="grid gap-4 rounded-[26px] border border-black/5 bg-[#F4F4F4] p-5 transition hover:-translate-y-1 hover:bg-white md:grid-cols-[0.7fr_1.2fr_1.1fr_auto] md:items-center"
              >
                <h3 className="text-xl font-black tracking-[-0.045em]">{row.name}</h3>
                <p className="text-sm font-semibold leading-6 text-[#5C5C5C]">{row.when}</p>
                <p className="text-sm font-black leading-6 text-[#0D0D0D]">{row.solves}</p>
                <ArrowRight className="h-5 w-5 text-[#FF5722]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionHeader
          dark
          kicker="Como escolher"
          title="Se voce nao sabe por onde comecar, comece pelo gargalo."
          text="A primeira conversa existe para transformar uma sensacao de problema em um caminho claro de execucao."
        />
        <div className="mt-9 grid gap-3 md:grid-cols-3">
          {[
            [
              "Falta material para vender?",
              "Midia IA ajuda a dar forma, ritmo e volume comercial para a oferta.",
            ],
            [
              "A oferta nao parece premium?",
              "Sites Premium melhora a percepcao e conduz a decisao.",
            ],
            [
              "A rotina esta lenta ou solta?",
              "Operacao & IA organiza processos, sistemas e controle.",
            ],
          ].map(([title, text], index) => (
            <FeatureCard
              key={title}
              dark
              title={title}
              text={text}
              icon={index === 0 ? Check : HelpCircle}
              delay={index * 55}
            />
          ))}
        </div>
        <div className="mt-9">
          <ButtonLink href="/contato">Conversar com a Noryx</ButtonLink>
        </div>
      </Section>
    </NoryxLayout>
  );
}
